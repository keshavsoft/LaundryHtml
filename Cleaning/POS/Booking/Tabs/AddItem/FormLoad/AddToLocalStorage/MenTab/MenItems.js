import data from './MenItems.json' assert {type: 'json'};
import WomenData from './WomenItems.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("MenItems", JSON.stringify(data));
    localStorage.setItem("WomenItems", JSON.stringify(WomenData));
};

export { StartFunc };