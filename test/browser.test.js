import { store, sleep,getUrlParams } from '../src/index';

describe('浏览器相关测试', () => {
  test('支持设置过期时间的 localstorage', async () => {
    store.set('name', 'jack', Date.now() + 1000);
    expect(store.get('name')).toEqual({ status: 0, value: 'jack' });

    await sleep(1000);
    expect(store.get('name')).toEqual({ status: 3, value: null });
  });
  test('获取地址栏参数', async () => {
    const params = getUrlParams('dxhy_sso_sessionid'),
      expectdObj = '';
    expect(params).toEqual(expectdObj);
  });
});
