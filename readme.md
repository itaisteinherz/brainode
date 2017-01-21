# brainode

[![Build Status](https://travis-ci.org/itaisteinherz/brainode.svg?branch=master)](https://travis-ci.org/itaisteinherz/brainode)

A Node.js interpreter for [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck).

```js
const Interpreter = require("brainode");

const brainode = new Interpreter();

brainode.run("+>++++++[<++++++++>-]<.");
```

## Installation

```bash
npm install brainode
```

## License

MIT © [Itai Steinherz](https://github.com/itaisteinherz)
