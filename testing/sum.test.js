const sum = require("./sum")


test("sum of two numbers",()=>{
    expect(sum(2,3)).toBe(5)
})
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });