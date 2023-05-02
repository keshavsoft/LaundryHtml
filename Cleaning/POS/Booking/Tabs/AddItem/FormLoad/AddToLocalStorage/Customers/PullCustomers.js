import data from './Customers.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("Customers", JSON.stringify(data));
};

export { StartFunc };