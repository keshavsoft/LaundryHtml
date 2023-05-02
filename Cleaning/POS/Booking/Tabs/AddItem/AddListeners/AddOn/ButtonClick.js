import { StartFunc as StartFuncToAddOns } from "../../ToDom/ToTable/ToAddOns.js";
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ToAddOnData.js";
import { StartFunc as StartFuncToOrderItems } from "../../ToDom/ToTable/ToOrderItems.js";

let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);
};

let jFLocalButtonClick = () => {
    let jVarLocalItemSerial = jFLocalPrepareData();

    StartFuncToOrderItems();
    StartFuncToAddOns({ inItemSerial: jVarLocalItemSerial });
};

let jFLocalPrepareData = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");
    let jVarLocalAddOnImageId = document.getElementById("AddOnImageId");

    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;
    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarLocaljVarLocalAddOnImageIdValue = jVarLocalAddOnImageId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    // let jVarObjectToInsert = {
    //     AddOnService: jVarLocalAddOnServiceIdtext,
    //     AddOnRate: parseInt(jVarLocalAddOnRateIdValue),
    //     AddOnItemSerial: jVarLocaljVarLocalAddOnItemIdValue,
    //     AddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    // };

    // jFLocalToLocalStorage({ inObjectToInsert: jVarObjectToInsert });
    StartFuncToLocalStorage({
        inAddOnService: jVarLocalAddOnServiceIdtext,
        inAddOnRate: parseInt(jVarLocalAddOnRateIdValue),
        inAddOnItemSerial: jVarLocaljVarLocalAddOnItemIdValue,
        inAddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    });

    return jVarLocaljVarLocalAddOnItemIdValue;
};

let jFLocalToLocalStorage = ({ inObjectToInsert }) => {
    try {
        let jVarLocalStorageKey = "AddOnData";

        let jVarObjectToInsert = inObjectToInsert;

        let jVLocalFromLocalStorate = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalOrderItems = JSON.parse(jVLocalFromLocalStorate);
        let jVarLocalKeys = Object.keys(jVarLocalOrderItems);
        let jVarLocalNewKey = 1;

        if (jVarLocalKeys.length > 0) {
            const max = Math.max(...jVarLocalKeys);

            jVarLocalNewKey = max + 1;
        }

        jVarLocalOrderItems[jVarLocalNewKey] = jVarObjectToInsert;
        //  jVarLocalItemsArray.push(jVarObjectToInsert);

        localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalOrderItems));
    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };