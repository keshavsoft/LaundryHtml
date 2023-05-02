import { StartFunc as StartFuncFromAddOnsAll } from "../../../FromLocalStorage/FromAddOnsAll.js";

let StartFunc = ({ inJsonData }) => {
    jFLocalShowTotals({ inJsonData });
};

let jFLocalShowTotals = ({ inJsonData }) => {
    jFLocalShowTotalTotals({ inJsonData });
    jFLocalShowTotalPcs({ inJsonData });
    jFLocalAddOnTotal();
};

let jFLocalShowTotalTotals = ({ inJsonData }) => {
    let jVarLocalItemsTableFootTotal = document.getElementById("ItemsTableFootTotal");

    if (jVarLocalItemsTableFootTotal === null === false) {
        let jVarLocalTotalArray = inJsonData.map(element => element.Total);
        let sumTotal = jVarLocalTotalArray.reduce((a, b) => a + b, 0);

        jVarLocalItemsTableFootTotal.innerHTML = sumTotal;
    };
};

let jFLocalShowTotalPcs = ({ inJsonData }) => {
    let jVarLocalItemsTableFootPcs = document.getElementById("ItemsTableFootPcs");

    if (jVarLocalItemsTableFootPcs === null === false) {
        let jVarLocalPcsArray = inJsonData.map(element => element.Pcs);
        let sum = jVarLocalPcsArray.reduce((a, b) => a + b, 0);

        jVarLocalItemsTableFootPcs.innerHTML = sum;
    };
};

let jFLocalAddOnTotal = () => {
    let jVarLocalItemsTableFootAddOn = document.getElementById("ItemsTableFootAddOn");

    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    if (jVarLocalItemsTableFootAddOn === null === false) {
        let jVarLocalAddOnRateArray = Object.values(jVarLocalAddOnData).map(element => element.AddOnRate);
        let jVarLocalAddOnDataTotal = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);
        jVarLocalItemsTableFootAddOn.innerHTML = `${jVarLocalAddOnRateArray.length}-${jVarLocalAddOnDataTotal}`;
    };
};

export { StartFunc };