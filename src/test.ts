import { Foo } from "./foo"

test('say hi', async()=>{
  const f = new Foo();
  expect(f.sayHi()).toBe('hello')
  expect(f.name).toBe('hello')
})