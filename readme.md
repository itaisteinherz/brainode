# brainode

[![Build Status](https://travis-ci.org/itaisteinherz/brainode.svg?branch=master)](https://travis-ci.org/itaisteinherz/brainode)

> A Node.js interpreter for [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck).


## Install

Using Yarn:

```bash
$ yarn add https://github.com/itaisteinherz/brainode.git
```

Alternatively using npm:

```bash
$ npm install --save https://github.com/itaisteinherz/brainode.git
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

Type: `Array`

Returns the memory of the interpreter.


#### brainode.pointer

Type: `number`

Returns the pointer of the interpreter.


## License

MIT © [Itai Steinherz](https://github.com/itaisteinherz)
