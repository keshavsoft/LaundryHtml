import { StartFunc as StartFuncToAddOns } from "./ToAddOns.js";
import { StartFunc as StartFuncToRow } from "./ToRow/ToOrderItems.js";
import { StartFunc as StartFuncToItemSerialButton } from "./AddListenersRunTime/ToItemSerialButton.js";
import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncFromAddOnsAll } from "../../FromLocalStorage/FromAddOnsAll.js";
import { StartFunc as StartFuncShowTotals } from "./ToFooter/ShowTotals.js";

let jVarCommonTableBodyId = "ItemsTableBodyId";

let StartFunc = () => {
    jFClearDom();

    let jVarLocalJsonData = StartFuncFromLocalStorage();

    ShowOnDom({ inJsonData: jVarLocalJsonData });
};

let jFClearDom = () => {
    let jVarLocalItemsTableBodyId = "ItemsTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";
};

let PullFromLocalStorage = ({ inTableBodyId }) => {
    // let jVarLocalItemsInOrder = localStorage.getItem("ItemsInOrder");
    // let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    let jVarLocaljVarLocalItemsInOrderJson = StartFuncFromLocalStorage();

    Object.entries(jVarLocaljVarLocalItemsInOrderJson).forEach(
        ([key, element]) => {
            jFLocalItemsInsertRowFromTemplate({
                inRowPk: key,
                inTableBodyId,
                inCategory: element.Category,
                inItemName: element.ItemName,
                inItemNamePk: element.ItemNamePk,
                inWashType: element.WashType,
                inPcs: element.Pcs,
                inItemRate: element.Rate,
                inAddOn: element.AddOn,
                inTotal: element.Total
            });
        }
    );

    jFLocalShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
};

let ShowOnDom = ({ inJsonData }) => {
    // let jVarLocalItemsInOrder = localStorage.getItem("ItemsInOrder");
    // let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);
    let jVarLocalItemsTableBodyId = jVarCommonTableBodyId;
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    let jVarLocaljVarLocalItemsInOrderJson = inJsonData;

    Object.entries(jVarLocaljVarLocalItemsInOrderJson).forEach(
        ([key, element]) => {
            jFLocalItemsInsertRowFromTemplate({
                inRowPk: key,
                inTableBodyId: jVarLocalHtmlTableBody,
                inCategory: element.Category,
                inItemName: element.ItemName,
                inItemNamePk: element.ItemNamePk,
                inWashType: element.WashType,
                inPcs: element.Pcs,
                inItemRate: element.Rate,
                inAddOn: element.AddOn,
                inTotal: element.Total
            });
        }
    );

    //jFLocalShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
    StartFuncShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
};

let jFLocalShowTotals = ({ inJsonData }) => {
    let jVarLocalItemsTableFootPcs = document.getElementById("ItemsTableFootPcs");
    let jVarLocalItemsTableFootAddOn = document.getElementById("ItemsTableFootAddOn");
    let jVarLocalItemsTableFootTotal = document.getElementById("ItemsTableFootTotal");

    let jVarLocalPcsArray = inJsonData.map(element => element.Pcs);
    let sum = jVarLocalPcsArray.reduce((a, b) => a + b, 0);

    // let jVarLocalAddOnArray = inJsonData.map(element => parseInt(element.AddOn.split("-")[0]));
    // let sumAddOn = jVarLocalAddOnArray.reduce((a, b) => a + b, 0);

    // console.log("sumAddOn ", jVarLocalAddOnArray, sumAddOn);

    // let jVarLocalAddOnArrayAmont = inJsonData.map(element => parseInt(element.AddOn.split("-")[1]));
    // // let jVarLocalAddOnArrayAmont = inJsonData.map(element => element.AddOn);
    // let sumAddOnAmount = jVarLocalAddOnArrayAmont.reduce((a, b) => a + b, 0);
    // console.log("sumAddOnAmount ", sumAddOnAmount, jVarLocalAddOnArrayAmont);

    let jVarLocalTotalArray = inJsonData.map(element => element.Total);
    let sumTotal = jVarLocalTotalArray.reduce((a, b) => a + b, 0);

    jVarLocalItemsTableFootPcs.innerHTML = sum;
    // jVarLocalItemsTableFootAddOn.innerHTML = sumAddOn;
    jVarLocalItemsTableFootTotal.innerHTML = sumTotal;

    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    let jVarLocalAddOnRateArray = Object.values(jVarLocalAddOnData).map(element => element.AddOnRate);
    let jVarLocalAddOnDataTotal = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);
    jVarLocalItemsTableFootAddOn.innerHTML = `${jVarLocalAddOnRateArray.length}-${jVarLocalAddOnDataTotal}`;
    // jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = `${jVarLocalAddOnRateArray.length}-${sum}`;

};

let jFLocalItemSerialButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;

    StartFuncToAddOns({ inItemSerial: jVarLocalCurrentTarget.value });
};

let jFLocalItemsInsertRowFromTemplate = ({ inRowPk, inTableBodyId, inCategory, inItemName, inItemNamePk, inWashType, inWashTypePk, inPcs, inItemRate, inAddOn, inTotal }) => {
    var table = inTableBodyId;
    let jVarLocalTemplateForOrderItemsTableRow = document.getElementById("TemplateForOrderItemsTableRow");
    // let jVarLocalAddOnData = StartFuncFromAddOns({ inItemSerial: inRowPk });
    // console.log("jVarLocalAddOnData : ", jVarLocalAddOnData);
    const clone = jVarLocalTemplateForOrderItemsTableRow.content.cloneNode(true);

    let jVarLocalOrderItemsSerialButtonClass = clone.querySelector(".OrderItemsSerialButtonClass");
    jVarLocalOrderItemsSerialButtonClass.value = inRowPk;
    // jVarLocalOrderItemsSerialButtonClass.addEventListener("click", jFLocalItemSerialButtonClickFunc);

    jVarLocalOrderItemsSerialButtonClass.addEventListener("click", StartFuncToItemSerialButton);

    let jVarLocalOrderItemsEditButtonClass = clone.querySelector(".OrderItemsEditButtonClass");
    jVarLocalOrderItemsEditButtonClass.value = inRowPk;
    jVarLocalOrderItemsEditButtonClass.addEventListener("click", StartFuncToItemSerialButton);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector(".OrderItemsCategoryClass");
    jVarLocalOrderItemsCategoryClass.innerHTML = inCategory;

    let jVarLocalOrderItemsOrderItemsItemNameClass = clone.querySelector(".OrderItemsItemNameClass");
    jVarLocalOrderItemsOrderItemsItemNameClass.dataset.pk = inItemNamePk;
    jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inItemName;

    let jVarLocalOrderItemsOrderItemsRateClass = clone.querySelector(".OrderItemsRateClass");
    jVarLocalOrderItemsOrderItemsRateClass.innerHTML = inItemRate;

    let jVarLocalOrderItemsOrderItemsItemWashClass = clone.querySelector(".OrderItemsItemWashClass");
    jVarLocalOrderItemsOrderItemsItemWashClass.dataset.pk = inWashTypePk;
    jVarLocalOrderItemsOrderItemsItemWashClass.innerHTML = inWashType;

    // let jVarLocalOrderItemsOrderItemsAddOnClass = clone.querySelector(".OrderItemsAddOnClass");
    // jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = inAddOn;

    let jVarLocalOrderItemsOrderItemsItemPcsClass = clone.querySelector(".OrderItemsItemPcsClass");
    jVarLocalOrderItemsOrderItemsItemPcsClass.innerHTML = inPcs;

    let jVarLocalOrderItemsOrderItemsTotalClass = clone.querySelector(".OrderItemsTotalClass");
    jVarLocalOrderItemsOrderItemsTotalClass.innerHTML = inTotal;

    let jVarLocalOrderItemsOrderItemsDeleteButtonClass = clone.querySelector(".OrderItemsDeleteButtonClass");
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.addEventListener("click", jFLocalItemDeleteButtonClickFunc)

    let jVarLocalOrderItemsOrderItemsEditButtonClass = clone.querySelector(".OrderItemsEditButtonClass");
    jVarLocalOrderItemsOrderItemsEditButtonClass.addEventListener("click", jFLocalItemEditButtonClickFunc)

    StartFuncToRow({ inItemSerial: inRowPk, inClonedTemplateRow: clone });

    table.appendChild(clone);
};

const jFLocalItemDeleteButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    console.log("Delete", jVarLocalCurrentTarget);

};

const jFLocalItemEditButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    console.log("Edit", jVarLocalCurrentTarget);

};

export { StartFunc };