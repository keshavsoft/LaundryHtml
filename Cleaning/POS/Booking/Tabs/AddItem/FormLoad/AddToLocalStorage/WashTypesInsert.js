import data from './WashTypes.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("WashTypes", JSON.stringify(data));
};

export { StartFunc };