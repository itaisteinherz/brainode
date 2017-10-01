# brainode [![Build Status](https://travis-ci.org/itaisteinherz/brainode.svg?branch=master)](https://travis-ci.org/itaisteinherz/brainode)

> A Node.js interpreter for [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck)


## Install

```
$ npm install https://github.com/itaisteinherz/brainode
```


## Usage

```js
const brainode = require("brainode");

brainode.run("+>++++++[<++++++++>-]<.");
//=> "1"
```


## API

#### brainode.run(code)

Executes the given brainfuck code.

##### code

Type: `string`

The brainfuck code to execute.


#### brainode.memory

Type: `Array<number>`

Returns the memory of the interpreter.


#### brainode.pointer

Type: `number`

Returns the pointer of the interpreter.


## License

MIT © [Itai Steinherz](https://github.com/itaisteinherz)
