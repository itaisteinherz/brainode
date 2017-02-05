"use strict";
const { question } = require("readline-sync"); // TODO: Check if I should move into an asynchronous approach.

let memory = [0];
let pointer = 0;
let currentIndex = 0;

function run(code) {
    if (typeof code !== "string") {
        throw new TypeError(`Expected \`code\` to be a \`string\`, got \`${typeof code}\``);
    }

    if (currentIndex !== 0) {
        memory = [0];
        pointer = 0;
        currentIndex = 0;
    }

    const filteredCode = code.replace(/[^><+-.,[\]]+/g, ""); // Remove any character that isn't a brainfuck command;

    while (currentIndex < filteredCode.length) {
        const command = filteredCode[currentIndex];
        commands[command](currentIndex, filteredCode);
        currentIndex++;
    }

    if (code.indexOf(".") != -1) {
        process.stdout.write("\n"); // This is for outputting a new line before the next console output.
    }
}

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
        process.stdout.write(output);
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

module.exports.run = run;
module.exports.memory = memory;
module.exports.pointer = pointer;
