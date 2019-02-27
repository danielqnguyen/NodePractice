const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number')
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number')
});

it('should async square a number', (done) => {
  utils.asyncSquare(4, (sum) => {
    expect(sum).toBe(16).toBeA('number');
    done();
  });
});

it('should be my name', () => {
  var user = { location: "CA", age: 25 };
  var res = utils.setName(user, 'Daniel Nguyen');
  expect(user).toInclude({
    firstName: 'Daniel',
    lastName: 'Nguyen'
  });
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

