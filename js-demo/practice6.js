// 判断今天是该年份的第几天
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 != 0 || year % 400 === 0;
}
function getDays(year, month, day) {
  var days = day;
  if (month === 1) {
    return days
  }
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for(var i = 0; i < month - 1; i++) {
    days += months[i]
  }
  if (isLeapYear(year) && month > 2) {
    days++;
  }
  return days;
}
console.log(getDays(2019, 7, 6))