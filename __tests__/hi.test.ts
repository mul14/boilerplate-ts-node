import hi from '../src/hi'

test('Should return Hi, stranger', () => {
  expect(hi()).toBe('Hi, stranger')
})

test('Should return Hi, Mulia', () => {
  expect(hi('Mulia')).toBe('Hi, Mulia')
})
