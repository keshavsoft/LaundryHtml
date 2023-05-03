import { StartFunc as StartFuncItemsInOrder } from "../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncFromAddOnsAll } from "../FromLocalStorage/FromAddOnsAll.js";

let StartFunc = () => {
    let jVarLocalOrderItemsData = StartFuncItemsInOrder();
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    let jVarLocalToShowData = { BodyData: {}, FooterData: {} };

    jVarLocalToShowData.BodyData = JSON.parse(JSON.stringify(jVarLocalOrderItemsData));

    console.log("jVarLocalToShowData : ", jVarLocalToShowData);
    //jFLocalToLocalStorage({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial });
};

export { StartFunc };