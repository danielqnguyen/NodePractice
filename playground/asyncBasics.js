console.log('starting app');

setTimeout(() => {
  console.log('inside of callback');
}, 2000)

setTimeout(() => {
  console.log('second timeout');
}, 0)

console.log('finishing up');
//the reason this is called before both setTimeout is because they are sent to the node api and then the callback before they are executed