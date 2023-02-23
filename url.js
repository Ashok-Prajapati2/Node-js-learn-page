// import url from 'url';
// const myURL = new URL ('https://example.org:5454');
// myURL.pathname = '/a/s/d';
// myURL.search = '?d=e';
// myURL.hash = '#fgh'
// console.log(myURL.href)
// console.log(myURL)

import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn of the moter!');
  setTimeout(() => {
   console.log('Send again that please turn of the morer')
  }, 3000);
});
myEmitter.emit('waterfull');