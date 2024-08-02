import defaultDate from '../index';

describe('defaultDate', () => {
  test('默认日期区间', () => {
    const timeStamp = defaultDate('currentMonth','-'),
    expectFormat = ['2024-07-01','2024-07-30'];
    expect(timeStamp).toEqual(expectFormat);
  });
});
