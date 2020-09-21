import React, { useState, useEffect, useRef, useCallback } from 'react';

interface LoadProps {
  isLoading: Boolean;
  isLoaded: Boolean;
  loadingText: String;
  loadedText: String;
}

const loadingText = '<div>正在加载中...</div>';
const loadedText = '<div>上拉加载更多</div>';
const overText = '<div>没有更多了</div>';

const DragLoad = ({isLoading, isLoaded, onRefresh, children}) => {
  const previous = useRef();

  const handleScroll = useCallback(() => {
    if (!isLoading && !isLoaded) {
      const pageHeight = document.body.scrollHeight; // 文档高度
      const scrollComponentHeight = window.screen.height;  // 屏幕的高度
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log('滚动的', scrollTop, previous.current.scrollTop)
      if ((pageHeight - (scrollTop + scrollComponentHeight)) < 360 && previous.current && scrollTop >= previous.current.scrollTop) {
        previous.current.scrollTop = scrollTop;
        onRefresh()
      }
    }
  }, [isLoaded, isLoading, onRefresh]);

  useEffect(() => {
    previous.current = {
      scrollTop: 0
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const renderFooter = () => {
    console.log('footer', isLoaded, isLoading)
    if (isLoaded) {
      return overText;
    } else if (isLoading) {
      return loadingText;
    }
    return loadedText;
  }

  return (
    <div>
      {children}
      {renderFooter()}
    </div>
  )
}

const Load = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const getApiData = () => {
    console.log('请求接口...');
    setLoading(true);
    setTimeout(() => {
      setPage(pre => pre + 1);
      setData(data => data.concat([1,2,3,4,5]));
      setLoading(false);
    }, 3000);
  }
console.log(page)
  return (
    <div style={{height: '800px'}}>
      <DragLoad
        onRefresh={getApiData}
        isLoading={loading}
        isLoaded={page === 5}
      >{data.map((item, index) => {
        return (
          <div
            key={index}
            style={{height: '40px'}}
          >{item}</div>
        )
      })}</DragLoad>
    </div>
  )
}

export default Load;