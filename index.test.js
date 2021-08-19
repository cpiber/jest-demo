const JSDOM = require('jsdom').JSDOM;

const dom = new JSDOM(`<p>Hi from Jest!</p>`);
console.log(dom.window.document.body.innerHTML);

test.todo('ex');