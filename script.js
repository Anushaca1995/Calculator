const calcObj = {
    symbols : ["+","-","*","=","/"],
    memory: [],
    operator: [],
    screenMemory: '',
    inputs: function (num){
        document.querySelector('.calcans').innerHTML +=num;
        document.querySelector('.calcans').value +=num;
        this.screenMemory += ''+num;
        console.log('Value of screen memory:', this.screenMemory);
    },
    keySymbols: function (symbol){
        document.querySelector('.calcans').innerHTML +=symbol;
        document.querySelector('.calcans').value +=symbol;
        this.memory.push(this.screenMemory);
        this.screenMemory='';
        this.operator=symbol;
        console.log('screen memory now:', this.screenMemory);
        console.log("memory=",this.memory);
    }

}