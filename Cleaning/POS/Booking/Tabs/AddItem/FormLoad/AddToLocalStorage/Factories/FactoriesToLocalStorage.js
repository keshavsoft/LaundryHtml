import data from './Factories.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("Factories", JSON.stringify(data));
};

export { StartFunc };