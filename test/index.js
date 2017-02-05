"use strict";
const chai = require("chai"), { expect } = chai;
const sinonChai = require("sinon-chai");
const sinon = require("sinon");

const brainode = require("../src/index.js");
const code = "+>++++++[<++++++++>-]<.";

chai.use(sinonChai);

describe("brainode", function() {
    describe("#run()", function() {
        it("should execute the given brainfuck code", sinon.test(function() {
            expect(brainode.run).to.exist.and.to.be.a("function");

            this.stub(process.stdout, "write");
            brainode.run(code);

            expect(process.stdout.write).to.have.been.calledTwice.and.calledWith("1").and.calledWith("\n");
            expect(brainode.memory).to.deep.equal([49, 0]);
            expect(brainode.pointer).to.equal(0);
        }));

        it("should throw an error if the code paramter is invalid", function() {
            const invalidCode = () => brainode.run();

            expect(invalidCode).to.throw(TypeError, "Expected `code` to be a `string`, got `undefined`");
        });
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
