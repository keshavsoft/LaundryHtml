let jF1 = () => {
    return new Promise((resolve, reject) => {
        console.log("resolve called");
        resolve("reject called");
    });
};

jF1().then();

const jF2 = async () => {
    let k1 = await jF1();
};

jF2();