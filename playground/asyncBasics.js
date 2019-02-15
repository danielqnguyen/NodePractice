console.log('starting app');

setTimeout(() => {
  console.log('inside of callback')
}, 2000)

setTimeout(() => {
  console.log('second tiemout')
}, 0)

console.log('finishing up');