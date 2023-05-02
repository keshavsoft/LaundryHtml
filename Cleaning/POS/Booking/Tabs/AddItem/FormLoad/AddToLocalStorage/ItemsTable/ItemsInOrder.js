import data from './ItemsInOrder.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("ItemsInOrder", JSON.stringify(data));
};

let StartFunc_Keshav_24Apr2023 = () => {
    localStorage.setItem("ItemsInOrder", JSON.stringify(data));
};

export { StartFunc };