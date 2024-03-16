const readline=require('readline')
console.log("Hello World");

const rl=readline.createInterface({
    input:process.stdin,// from where it read
    output:process.stdout// where it has to write the output
});

rl.question("Enter a sentence:",display);//  display callback function

function display(str){
    console.log("Sentence is: "+str);
    rl.close(); // closing the interface
}

rl.on('close',closeListen);//cllback

function closeListen(){
    console.log('Interface is closed');
    process.exit(0); // exiting the process
}

process.on('exit', exitListen);

function exitListen(){
    console.log("Exiting the code");
}

