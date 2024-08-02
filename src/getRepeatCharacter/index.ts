/*
 * @Description:计算字符串中重复字符以及重复字符的次数(用对象的方法，key为字符，value为个数，然后遍历对象)
 */
export default getRepeatCharacter;

function getRepeatCharacter(str: string) {
  const obj: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
