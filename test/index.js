"use strict";
const chai = require("chai"), { expect } = chai,
    sinonChai = require("sinon-chai"),
    sinon = require("sinon");

const fs = require("fs"),
    path = require("path");

const Interpreter = require("../dist/index.js");

chai.use(sinonChai);

let brainode, code;

describe("brainode", function() {
    before("load test brainfuck code from basic.bf", function() {
        code = fs.readFileSync(path.join(__dirname, "basic.bf"), {
            encoding: "utf8"
        });
    });

    describe("#constructor()", function() {
        it("should return a new interpreter object", function() {
            brainode = new Interpreter();

            expect(brainode).to.be.instanceof(Interpreter);
        });
    });

    describe("#run(input = \"\")", function() {
        it("should execute the given brainfuck code", sinon.test(function() {
            expect(brainode.run).to.exist.and.to.be.a("function");

            this.stub(console, "log");
            brainode.run(code);

            expect(console.log).to.have.been.calledOnce.and.to.have.been.calledWith("1");
            expect(brainode.memory).to.deep.equal([49, 0]);
            expect(brainode.pointer).to.equal(0);
        }));
    });

    describe("#get memory()", function() {
        it("should return the memory of the interpreter", function() {
            expect(brainode.memory).to.exist.and.to.be.an("array");
        });
    });

    describe("#get pointer()", function() {
        it("should return the pointer of the interpreter", function() {
            expect(brainode.pointer).to.exist.and.to.be.a("number");
        });
    });
});
