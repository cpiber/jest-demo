const JSDOM = require('jsdom').JSDOM;

const dom = new JSDOM(`<p>Hi!</p>`);
console.log(dom.window.document.body.innerHTML);