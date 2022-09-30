const calcObj = {
    symbols: ["+", "-", "*", "/", "%"],
    memory: [],
    operator: [],
    screenMemory: '',
    inputs: function (num) {
        document.querySelector('.calcans').innerHTML += num;
        document.querySelector('.calcans').value += num;
        this.screenMemory += '' + num;
        console.log('Value of screen memory:', this.screenMemory);
    },
    keySymbols: function (symbol) {
        document.querySelector('.calcans').innerHTML += symbol;
        document.querySelector('.calcans').value += symbol;
        this.memory.push(this.screenMemory);
        this.screenMemory = '';
        this.operator = symbol;
        console.log('screen memory now:', this.screenMemory);
        console.log("memory=", this.memory);
    },
    clear: function () {
        this.memory = [];
        this.screenMemory = '';
        document.querySelector('.calcans').value = '';
    },
    result: function () {
        let result = 0;
        this.memory.push(this.screenMemory);
        console.log("Inside Result" + this.screenMemory + " Memory=" + this.memory);
        for (let index = 0; index < this.memory.length; index++) {
            console.log(this.memory + "===" + this.symbols[0]);
            if ((this.operator === this.symbols[0])) {
                let add = Number(this.memory[index]);
                if (index==0) {
                    result = add;
                } else {
                    result = result+add;
                }
                document.querySelector('.calcans').value = result;
                this.screenMemory = result;
                console.log("Addition=", result);
            } else if ((this.operator === this.symbols[1])) {
                let sub = Number(this.memory[index]);
                if (index==0) {
                    result = sub;
                } else {
                    result = result-sub;
                }
                document.querySelector('.calcans').value = result;
                this.screenMemory = result;
                console.log("Subtraction=", result);
            } else if ((this.operator === this.symbols[2])) {
                let mul = Number(this.memory[index]);
                if (index==0) {
                    result = mul;
                } else {
                    result = result*mul;
                }
                document.querySelector('.calcans').value = result;
                this.screenMemory = result;
                console.log("Multiplication=", result);
            } else if ((this.operator === this.symbols[3])) {
                let mul = Number(this.memory[index]);
                if (index==0) {
                    result = mul;
                } else {
                    result = result/mul;
                }
                document.querySelector('.calcans').value = result;
                this.screenMemory = result;
                console.log("Division=", result);
            } 
        }
        this.memory = [];
        console.log("out for" + this.memory);
        console.log("out out for" + this.memory);
    }

}