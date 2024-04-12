import sum from './sum'

test('sum function always return summetion value',()=>{
    expect(sum(2,4)).toBe(6)
    expect(sum(5,19)).toBe(24)
})