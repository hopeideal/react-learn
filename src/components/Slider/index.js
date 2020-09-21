import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './style.css';

// export default function Swiper(props) {
//   const [source] = useState();

//   const { sources } = props;

//   const slides = (sources || []).map((item) => {
//     return <Slide source={item} />;
//   });

//   useEffect(() => {
//     let timer = setTimeout(() => {}, 2000);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div className="swiper-container">
//       <div className="swiper-content">{slides}</div>
//     </div>
//   );
// }

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.player = undefined;
    this.state = {
      sources: [],
      offset: -(props.width * 1),
      index: 0,
    };
  }

  static defaultProps = {
    width: 300,
    height: 150,
    loop: false /** 是否循环 */,
    auto: false /** 是否自动滑动 */,
    duration: '200',
  };

  componentDidMount() {
    this.stop();
    this.initSlides();

    const { width } = this.props;
    const { index } = this.state;

    // this.player = setTimeout(() => {
    //   const offset = -(width * (index + 1));
    //   console.log('didmout offset', offset);
    //   this.setState({
    //     offset,
    //   });
    // }, 2000);
  }

  componentDidUpdate() {
    // clearTimeout(this.player);
    this.stop();
    this.play();
  }

  initSlides() {
    const { sources = [] } = this.props;
    const length = sources.length;
    const first = sources[0];
    const last = sources[sources.length - 1];

    sources.push(first);
    sources.unshift(last);

    this.setState({
      sources,
      length,
    });
  }

  stop() {
    clearInterval(this.player);
  }

  play() {
    const { length, index, offset } = this.state;
    const { width } = this.props;
    console.log('index', index);
    this.player = setInterval(() => {
      if (index >= length) {
        this.setState({
          index: 1,
        });
      } else {
        this.setState({
          index: index + 1,
        });
      }
    }, 2000);
  }

  renderSlide() {
    const { sources } = this.state;

    return sources.map((item, index) => {
      return <Slide source={item} index={`slide:` + index} />;
    });
  }

  /**
   * @description 计算动画样式
   * @return {object} style
   */
  animation() {
    const { index } = this.state;
    const { width, direction, duration } = this.props;
    const offset = -index * width;

    if (direction === 'vertical') {
      return {
        WebkitTransform: 'translate3d(0, ' + offset + 'px, 0)',
        transform: 'translate3d(0, ' + offset + 'px, 0)',
        WebkitTransformDuration: duration + 'ms',
        transitionDuration: duration + 'ms',
      };
    }
    return {
      WebkitTransform: 'translate3d(' + offset + 'px,0,0)',
      transform: 'translate3d(' + offset + 'px,0,0)',
      WebkitTransformDuration: duration + 'ms',
      transitionDuration: duration + 'ms',
    };
  }

  render() {
    // const { index } = this.state;
    // const { width } = this.props;
    // const offset = -index * width;
    // console.log('offset', offset, index);

    return (
      <div className="swiper-container">
        <div className="swiper-wrapper" style={this.animation()}>
          {this.renderSlide()}
        </div>
      </div>
    );
  }
}
