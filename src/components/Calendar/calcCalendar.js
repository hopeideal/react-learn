/**
 * @description 根据年、月获取当前月份的天数
 * @param {number} y 年份
 * @param {number} m 月份
 * @return {number} 天数
 */
function getMonthDays(y, m) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 能整除 4 但不能整除 100 的为闰年
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    days[1] = 29;
  }
  return days[m - 1];
}

function getWeekNumber(y, m, d) {}

export { getMonthDays };
