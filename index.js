const code = require("./code.js").code;
const input = code.replace(/\s/g, "");

/* 
    Commands: 
        < : DONE
        > : DONE
        . : DONE
        , : DONE
        [ : TODO
        ] : TODO
        + : DONE
        - : DONE
*/

let memory = [0];
let pointer = 0;


const commands = {
    '>': () => {
        if (pointer === memory.length - 1) {
            memory.push(0);
        }
        pointer++;
    },
    '<': () => {
        if (pointer > 0) {
            pointer--;
        }
    },
    '+': () => {
        memory[pointer]++;
    },
    '-': () => {
        memory[pointer]--;
    },
    '.': () => {
        const output = String.fromCharCode(memory[pointer]);
        console.log(output);
    }
}

for (command of input) {
    commands[command]();
}
