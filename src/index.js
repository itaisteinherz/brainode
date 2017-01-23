"use strict";
const { question } = require("readline-sync"); // TODO: Check if I should move into an asynchronous approach.

let memory,
    pointer,
    currentIndex;

module.exports = class Interpreter {
    constructor() {
        memory = [0];
        pointer = 0;
        currentIndex = 0;
    }

    run(input = "") {
        if (currentIndex !== 0) {
            memory = [0];
            pointer = 0;
            currentIndex = 0;
        }

        if (typeof input !== "string") {
            throw new TypeError("The input parameter is not a string");
        }

        if (input.length === 0) {
            throw new Error("The input parameter is empty");
        }

        const code = input.replace(/[^><+-.,[\]]+/g, ""); // Remove any character that isn't a brainfuck command;

        while (currentIndex < code.length) {
            const command = code[currentIndex];
            commands[command](currentIndex, code);
            currentIndex++;
        }
    }

    get memory() {
        return memory;
    }

    get pointer() {
        return pointer;
    }
};

const commands = {
    ">": () => {
        // Move the pointer to the right
        if (pointer === memory.length - 1) {
            memory.push(0);
        }
        pointer++;
    },
    "<": () => {
        // Move the pointer to the left
        if (pointer > 0) {
            pointer--;
        }
    },
    "+": () => {
        // Increment the memory cell under the pointer
        memory[pointer]++;
    },
    "-": () => {
        // Decrement the memory cell under the pointer
        memory[pointer]--;
    },
    ".": () => {
        // Output the character signified by the cell at the pointer
        const output = String.fromCharCode(memory[pointer]);
        console.log(output);
    },
    ",": () => {
        // Input a character and store it in the cell at the pointer
        const userInput = question("Please enter your input: ");
        memory[pointer] = userInput.charCodeAt(0);
    },
    "[": (current, code) => {
        // Jump past the matching ] if the cell under the pointer is 0
        if (memory[pointer] === 0) {
            const commandsLeft = code.slice(current);
            const splittedLeft = commandsLeft.split("]");

            currentIndex = current + (splittedLeft[0].length - 1);
        }
    },
    "]": (current, code) => {
        // Jump back to the matching [ if the cell under the pointer is nonzero
        if (memory[pointer] !== 0) {
            const commandsBefore = code.slice(0, current);
            const splittedBefore = commandsBefore.lastIndexOf("[");

            currentIndex = splittedBefore;
        }
    }
};
