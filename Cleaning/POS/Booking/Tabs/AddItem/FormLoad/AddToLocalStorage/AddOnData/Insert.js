import data from './AddOnData.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("AddOnData", JSON.stringify(data));
};

export { StartFunc };