import { StartFunc as StartFuncToAddOns } from "./ToAddOns.js";
import { StartFunc as StartFuncToRow } from "./ToRow/ToOrderItems.js";
import { StartFunc as StartFuncToItemSerialButton } from "./AddListenersRunTime/ToItemSerialButton.js";
import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncFromAddOnsAll } from "../../FromLocalStorage/FromAddOnsAll.js";
import { StartFunc as StartFuncShowTotals } from "./ToFooter/ShowTotals.js";
import { StartFunc as StartFuncToFactories } from "./ToRow/ToFactories.js";
import { StartFunc as StartFuncToDeliveryDateTime } from "./ToRow/ToDeliveryDateTime.js";

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
                inTotal: element.Total,
                inlocation: element.location,
                inlocationPk: element.locationPk,
                inDeliveryDateTime: element.DeliveryDateTime
            });
        }
    );

    //jFLocalShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
    StartFuncShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
};



let jFLocalItemsInsertRowFromTemplate = ({ inRowPk, inTableBodyId, inCategory, inItemName, inItemNamePk, inWashType, inWashTypePk, inPcs, inItemRate, inAddOn, inTotal, inlocation, inlocationPk, inDeliveryDateTime }) => {
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
    jVarLocalOrderItemsOrderItemsEditButtonClass.addEventListener("click", jFLocalItemEditButtonClickFunc);

    StartFuncToFactories({ inlocation, inlocationPk, inClonedTemplateRow: clone });
    StartFuncToDeliveryDateTime({ inDeliveryDateTime, inClonedTemplateRow: clone });

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