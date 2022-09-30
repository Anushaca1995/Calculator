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
    

}