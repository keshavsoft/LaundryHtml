const jF1 = new Promise((resolve, reject) => {
    console.log("resolve called");
    reject("reject called");
});


jF1.then().catch((fromreject) => {
    console.log("fromreject", fromreject);
});

const jF2 = async () => {
    let k1 = await jF1();
};

jF2();