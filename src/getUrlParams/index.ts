// @ts-nocheck
/**
 * 获取当前运行环境,返回运行环境的集合判断
 * @returns
 */
 import url2obj from '../url2obj';
function getUrlParams(name?: string) {
  const url = window.location.search;
  if(name){
    return url ? url2obj(url)[name] : url;
  }else{
    return url ? url2obj(url) : url;
  }
}
export default getUrlParams;
