import data from './Items.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("Items", JSON.stringify(data));
};

export { StartFunc };