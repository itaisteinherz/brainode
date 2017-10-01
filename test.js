"use strict";
import test from "ava";
import sinon from "sinon";

import m from ".";

const code = "This +>+ is +++ some ++[<+++ unnecessary +++++> text -]<.";

test("run brainfuck code", t => {
	sinon.stub(process.stdout, "write");
	m(code);

	t.is(m.pointer, 0);
	t.deepEqual(m.memory, [49, 0]);

	t.true(process.stdout.write.calledTwice);
	t.true(process.stdout.write.calledWith("1"));
	t.true(process.stdout.write.calledWith("\n"));

	process.stdout.write.restore();
});

test("invalid code argument", t => {
	t.throws(() => m(5), "Expected `code` to be a `string`, got `number`");
	t.throws(() => m(true), "Expected `code` to be a `string`, got `boolean`");
});

test(".memory", t => {
	t.true(Array.isArray(m.memory));

	for (const cell of m.memory) {
		t.is(typeof cell, "number");
	}
});

test(".pointer", t => {
	t.is(typeof m.pointer, "number");
});
