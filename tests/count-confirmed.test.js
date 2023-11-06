const countConfirmed = require('../solutions/count-confirmed');

const user1 = {
  id: 3242342,
  username: 'belakovacs12',
  email: 'bela@gmail.com',
  phone: '701231231',
  isConfirmed: true,
};

const user2 = {
  id: 2136523,
  username: 'lajosnagy',
  email: 'lajos@gmail.com',
  phone: '303214321',
  isConfirmed: true,
};

const user3 = {
  id: 8743534,
  username: 'akarki99',
  email: 'kazmer@gmail.com',
  phone: '206546547',
  isConfirmed: false,
};

test('Test 1', () => {
  expect(countConfirmed([user1, user2, user3]))
    .toStrictEqual(2);
});

test('Test 2', () => {
  expect(countConfirmed([user1, user3]))
    .toStrictEqual(1);
});

test('Test 3', () => {
  expect(countConfirmed([user1, user1]))
    .toStrictEqual(2);
});

test('Test 4', () => {
  expect(countConfirmed([user1]))
    .toStrictEqual(1);
});

test('Test 5', () => {
  expect(countConfirmed([user3]))
    .toStrictEqual(0);
});
