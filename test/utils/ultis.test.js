const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number')
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number')
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({ name: 'andrew' }).toEqual({ name: 'andrew' })
//   // expect([2, 3, 4]).toExclude(1)
//   expect({
//     name: 'Daniel',
//     age: 25,
//     location: 'CA'
//   }).toInclude({
//     age: 25
//   })
// })

