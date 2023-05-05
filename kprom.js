let jFCallBack = () => {
    console.log("jFCallBack is called");
};
const jF1 = () => {
    console.log("function1 is called");
};



const jF2 = () => {
    console.log("function2 is called");
  
};

const jF3 = () => {
    console.log("function3 is called");
};

jF1();
setTimeout(jFCallBack, 5);
jF2();
jF3();