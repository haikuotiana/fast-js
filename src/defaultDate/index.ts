/**
 * 默认日期区间
 * @param type
 * @returns
 */
function toDateString(
  startDate: Date | number,
  endDate: Date | number,
  separator: string,
) {
  let dateStartTime = new Date(startDate); //将时间戳转换成时间格式
  let dateEndTime = new Date(endDate); //将时间戳转换成时间格式
  let start_year = dateStartTime.getFullYear();
  let start_month = dateStartTime.getMonth() + 1;
  let start_day = dateStartTime.getDate();
  let end_year = dateEndTime.getFullYear();
  let end_month = dateEndTime.getMonth() + 1;
  let end_day = dateEndTime.getDate();
  let s_m = start_month < 10 ? '0' + start_month : start_month;
  let s_d = start_day < 10 ? '0' + start_day : start_day;
  let e_m = end_month < 10 ? '0' + end_month : end_month;
  let e_d = end_day < 10 ? '0' + end_day : end_day;
  let start = start_year + separator + s_m + separator + s_d;
  let end = end_year + separator + e_m + separator + e_d;
  return [start, end];
}
function defaultDate(type: string, separator: string) {
  let date = new Date(); //获取当前时间
  date.setDate(1); //设置当月1号
  let nowDay = new Date().getTime();
  let beforeThreeMonthDay = new Date().getTime() - 1000 * 60 * 60 * 24 * 90; //三个月前日期
  let beforeYearDay = new Date().getTime() - 1000 * 60 * 60 * 24 * 365; //一年前日期
  let startDate =
    type == 'currentMonth'
      ? date
      : type == 'threeMonth'
      ? beforeThreeMonthDay
      : beforeYearDay;
  return toDateString(startDate, nowDay, separator);
}

export default defaultDate;
