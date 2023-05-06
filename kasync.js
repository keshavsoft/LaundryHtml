let jFCallBack = () => {
    console.log("jFCallBack is called");
};
const jF1 = () => {
    console.log("function1 is called");
};

const jF2 = (mcallback) => {
    console.log("function2 is called");
    mcallback();
};

const jF3 = () => {
    console.log("function3 is called");
};

jF1();
jF2(jFCallBack);
jF3();