"use strict";
const test = require("ava");
const sinon = require("sinon");

const brainode = require("../src/index.js");

const code = "+>++++++[<++++++++>-]<.";

test(".run(code)", (t) => {
	t.is(typeof brainode.run, "function");

	sinon.stub(process.stdout, "write");
	brainode.run(code);

	t.deepEqual(brainode.memory, [49, 0]);
	t.is(brainode.pointer, 0);

	t.true(process.stdout.write.calledTwice);
	t.true(process.stdout.write.calledWith("1"));
	t.true(process.stdout.write.calledWith("\n"));

	process.stdout.write.restore();
});

test(".run(code) invalid code argument", (t) => {
	const invalidCode = () => brainode.run();

	t.throws(invalidCode, TypeError, "Expected `code` to be a `string`, got `undefined`");
});

test(".memory", (t) => {
	t.true(brainode.memory instanceof Array);
});

test(".pointer", (t) => {
	t.is(typeof brainode.pointer, "number");
});
