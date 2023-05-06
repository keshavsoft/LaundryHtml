let jFCallBack = () => {
    console.log("jFCallBack is called");
};

let jFCallBack1 = () => {
    console.log("jFCallBack1 is called");
};

const jF1 = (params) => {
    console.log("function is called");
};

const jF2 = (params, mycallback) => {
    console.log("function2 is called");
    mycallback();
};


const jF3 = (params, par2, mycallback) => {
    console.log("function2 is called");
    mycallback();
};

jF3(1, jFCallBack1, jFCallBack);