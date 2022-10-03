const getNumber = (num) => {
    document.querySelector('.calcans').value += num;
    calcObj.screenMemory += '' + num;
    console.log('Value of screen memory:', calcObj.screenMemory);

}
const getSymbol = (symbol) => {
    document.querySelector('.calcans').value += symbol;
    calcObj.memory.push(calcObj.screenMemory);
    calcObj.screenMemory = '';
    calcObj.operator = symbol;
    console.log('screen memory now:', calcObj.screenMemory);
    console.log("memory=", calcObj.memory);
}
const getClear = () => {
    calcObj.memory = [];
    calcObj.screenMemory = '';
    document.querySelector('.calcans').value = '';
}

const getPercent = () =>{
    let perct=(calcObj.screenMemory)/100;
    console.log("Percentage="+perct+","+calcObj.screenMemory);
    document.querySelector('.calcans').value = perct;
    calcObj.screenMemory = perct;
}
const getResult = () =>{
    let result = 0;
        calcObj.memory.push(calcObj.screenMemory);
        console.log("Inside Result" + calcObj.screenMemory + " Memory=" + calcObj.memory);
        for (let index = 0; index < calcObj.memory.length; index++) {
            console.log(calcObj.memory + "===" + calcObj.symbols[0]);
            if ((calcObj.operator === calcObj.symbols[0])) {
                let add = Number(calcObj.memory[index]);
                if (index==0) {
                    result = add;
                } else {
                    result = result+add;
                }
                document.querySelector('.calcans').value = result;
                calcObj.screenMemory = result;
                console.log("Addition=", result);
            } else if ((calcObj.operator === calcObj.symbols[1])) {
                let sub = Number(calcObj.memory[index]);
                if (index==0) {
                    result = sub;
                } else {
                    result = result-sub;
                }
                document.querySelector('.calcans').value = result;
                calcObj.screenMemory = result;
                console.log("Subtraction=", result);
            } else if ((calcObj.operator === calcObj.symbols[2])) {
                let mul = Number(calcObj.memory[index]);
                if (index==0) {
                    result = mul;
                } else {
                    result = result*mul;
                }
                document.querySelector('.calcans').value = result;
                calcObj.screenMemory = result;
                console.log("Multiplication=", result);
            } else if ((calcObj.operator === calcObj.symbols[3])) {
                let mul = Number(calcObj.memory[index]);
                if (index==0) {
                    result = mul;
                } else {
                    result = result/mul;
                }
                document.querySelector('.calcans').value = result;
                calcObj.screenMemory = result;
                console.log("Division=", result);
            }
        }
        calcObj.memory = [];
        console.log("out for" + calcObj.memory);
        console.log("out out for" + calcObj.memory);
    
}

const calcObj = {
    symbols: ["+", "-", "*", "/", "%"],
    memory: [],
    operator: [],
    screenMemory: ''
};