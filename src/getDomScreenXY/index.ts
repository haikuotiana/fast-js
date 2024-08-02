/*
 * @Description: 获取dom节点相对于screen定位。
 */

function getDomScreenXY(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    const { top, left } = element.getBoundingClientRect();

    return [left, top];
  }
  return undefined;
}

export default getDomScreenXY;
