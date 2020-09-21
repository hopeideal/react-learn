import React from 'react';
import data from '../../data/disney';
import * as Days from './calcCalendar';
import './style.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.source = data.data.disneyTicketSpecList;
  }

  renderMonthDay() {}

  render() {
    return (
      <div className="calendar">
        <div className="calendar-navi">
          <div>《</div>
          <div>2020.07</div>
          <div>》</div>
        </div>
        <div className="calendar-month">
          <div className="weeky-day">
            <div>日</div>
            <div>一</div>
            <div>二</div>
            <div>三</div>
            <div>四</div>
            <div>五</div>
            <div>六</div>
          </div>
          <div className="month-day"></div>
        </div>
      </div>
    );
  }
}
