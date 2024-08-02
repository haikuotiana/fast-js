/*
 * @Description: 获取dom节点相对于文档定位。
 */

function getDomPageXY(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    const { top, left } = element.getBoundingClientRect();
    //top和left加上滚动条
    // For scrollX
    const scrollLeft = document.documentElement.scrollLeft;
    // For scrollY
    const scrollTop = document.documentElement.scrollTop;
    return [left + scrollLeft, top + scrollTop];
  }
  return undefined;
}

export default getDomPageXY;
