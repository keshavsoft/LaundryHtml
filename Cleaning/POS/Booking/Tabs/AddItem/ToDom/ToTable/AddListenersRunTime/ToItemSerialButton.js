import { StartFunc as StartFuncToAddOns } from "../ToAddOns.js";

let StartFunc = (event) => {
    jFLocalItemSerialButtonClickFunc(event);
};

// MenItemsTabId

let jFLocalItemSerialButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalRowSelected = jVarLocalCurrentTarget.value;

    let jVarLocalDataFromrow = jFLocalFromRowTable({ inJVarClosestTr: jVarLocalClosestTr });

    jFLocalShowOnAbove({ inDataToShow: jVarLocalDataFromrow, inRowSelected: jVarLocalRowSelected });

    StartFuncToAddOns({ inItemSerial: jVarLocalRowSelected });

};

let jFLocalShowOnAbove = ({ inDataToShow, inRowSelected }) => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalPcsClass = jVarLocalMenItemsTabId.querySelector(".PcsClass");
        jVarLocalPcsClass.value = inDataToShow.Pcs;

        let jVarLocalItemSerialClass = jVarLocalMenItemsTabId.querySelector(".ItemSerialClass");
        jVarLocalItemSerialClass.value = inRowSelected;

        let jVarLocalItemSelect = jVarLocalMenItemsTabId.querySelector(".ItemSelect");
        jVarLocalItemSelect.value = inDataToShow.ItemNamePk;

        let jVarLocalItemRateClass = jVarLocalMenItemsTabId.querySelector(".RateClass");
        jVarLocalItemRateClass.value = inDataToShow.Rate;

        let jVarLocalWashTypeClass = jVarLocalMenItemsTabId.querySelector(".WashTypeClass");
        jVarLocalWashTypeClass.value = inDataToShow.WashTypePk;
        //change toggle state
        jFLocalAboutAddOnToggle();

        // let jVarLocalAddOnMenuClass = jVarLocalMenItemsTabId.querySelector(".AddOnMenuClass");
        // if (event.currentTarget.checked) {
        //     jVarLocalMenuTabAddOnId.classList.add("col");
        //     jVarLocalMenuTabAddOnId.classList.remove("d-none");
        // } else {
        //     jVarLocalMenuTabAddOnId.classList.remove("col");
        //     jVarLocalMenuTabAddOnId.classList.add("d-none");
        // }

        // let jVarLocalFromSimulation = simulateClick();
        // console.log("jVarLocalFromSimulation ", jVarLocalFromSimulation);
    };
};

let jFLocalAboutAddOnToggle = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalAddOnMenuClass = jVarLocalMenItemsTabId.querySelector(".AddOnMenuClass");

        if (jVarLocalAddOnMenuClass.checked) {
        } else {
            simulateClick();
        };
    };
};

function simulateClick() {
    const event = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    const cb = document.getElementById("AddOnMenuId");
    const cancelled = !cb.dispatchEvent(event);
    return cancelled;
    if (cancelled) {
        // A handler called preventDefault.
        alert("cancelled");
    } else {
        // None of the handlers called preventDefault.
        alert("not cancelled");
    }
}

let jFLocalFromRowTable = ({ inJVarClosestTr }) => {
    let jVarLocalReturnObject = {};

    let jVarLocalOrderItemsCategoryClass = inJVarClosestTr.querySelector(".OrderItemsCategoryClass");

    let jVarLocalOrderItemsItemNameClass = inJVarClosestTr.querySelector(".OrderItemsItemNameClass");

    let jVarLocalOrderItemsItemWashClass = inJVarClosestTr.querySelector(".OrderItemsItemWashClass");

    let jVarLocalOrderItemsItemPcsClass = inJVarClosestTr.querySelector(".OrderItemsItemPcsClass");

    let jVarLocalOrderItemsRateClass = inJVarClosestTr.querySelector(".OrderItemsRateClass");

    let jVarLocalOrderItemsAddOnClass = inJVarClosestTr.querySelector(".OrderItemsAddOnClass");

    let jVarLocalOrderItemsTotalClass = inJVarClosestTr.querySelector(".OrderItemsTotalClass");

    // jVarLocalOrderItemsCategoryClass.innerHTML = inCategory;
    jVarLocalReturnObject.Category = jVarLocalOrderItemsCategoryClass.innerHTML;

    jVarLocalReturnObject.ItemName = jVarLocalOrderItemsItemNameClass.innerHTML;
    jVarLocalReturnObject.ItemNamePk = jVarLocalOrderItemsItemNameClass.dataset.pk;

    jVarLocalReturnObject.WashType = jVarLocalOrderItemsItemWashClass.innerHTML;
    jVarLocalReturnObject.WashTypePk = jVarLocalOrderItemsItemWashClass.dataset.pk;

    jVarLocalReturnObject.Pcs = jVarLocalOrderItemsItemPcsClass.innerHTML;

    jVarLocalReturnObject.Rate = jVarLocalOrderItemsRateClass.innerHTML;

    jVarLocalReturnObject.AddOn = jVarLocalOrderItemsRateClass.innerHTML;

    jVarLocalReturnObject.Total = jVarLocalOrderItemsTotalClass.innerHTML;

    return jVarLocalReturnObject;
    // let jVarLocalOrderItemsOrderItemsItemNameClass = clone.querySelector(".OrderItemsItemNameClass");
    // jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inItemName;

    // let jVarLocalOrderItemsOrderItemsRateClass = clone.querySelector(".OrderItemsRateClass");
    // jVarLocalOrderItemsOrderItemsRateClass.innerHTML = inItemRate;

    // let jVarLocalOrderItemsOrderItemsItemWashClass = clone.querySelector(".OrderItemsItemWashClass");
    // jVarLocalOrderItemsOrderItemsItemWashClass.innerHTML = inWashType;

    // let jVarLocalOrderItemsOrderItemsAddOnClass = clone.querySelector(".OrderItemsAddOnClass");
    // jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = inAddOn;

    // let jVarLocalOrderItemsOrderItemsItemPcsClass = clone.querySelector(".OrderItemsItemPcsClass");
    // jVarLocalOrderItemsOrderItemsItemPcsClass.innerHTML = inPcs;

    //  console.log("jVarLocalCurrentTarget : ", jVarLocalOrderItemsCategoryClass.innerHTML);
    //  StartFuncToAddOns({ inItemSerial: jVarLocalCurrentTarget.value });
};

export { StartFunc };