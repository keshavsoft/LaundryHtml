import { StartFunc as StartFuncToDom } from "../../ToDom/ToTable/ToOrderItems.js";

let StartFuncs = () => {
    jFLocalMenTab();

    let jVarLocalWomanAddItemButtonId = document.getElementById("WomanAddItemButtonId");
    let jVarLocalKidAddItemButtonId = document.getElementById("KidAddItemButtonId");

    if (jVarLocalWomanAddItemButtonId === null === false) jVarLocalWomanAddItemButtonId.addEventListener("click", localWomanAddItemButtonFunc);
    if (jVarLocalKidAddItemButtonId === null === false) jVarLocalKidAddItemButtonId.addEventListener("click", localKidAddItemButtonFunc);
    
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalAddButton = jVarLocalMenItemsTabId.querySelector(".AddItemButtonClass");

        if (jVarLocalAddButton === null === false) jVarLocalAddButton.addEventListener("click", localAddItemButtonFunc);
    };
};

let localAddItemButtonFunc = (event) => {
    try {
        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;

        let jVarObjectToInsert = jFLocalPrepareObject({ inCurrentTarget: jVarLocalCurrentTarget });

        jFLocalToLocalStorage({ inObjectToInsert: jVarObjectToInsert });

        StartFuncToDom();

        let jVarLocalItemsShowCollapseId = document.getElementById("ItemsShowCollapseId");

        let jVarLocalBSItemsShowCollapseId = bootstrap.Collapse.getOrCreateInstance(jVarLocalItemsShowCollapseId);

        jVarLocalBSItemsShowCollapseId.show();
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalToLocalStorage = ({ inObjectToInsert }) => {
    try {
        let jVarObjectToInsert = inObjectToInsert;

        let jVLocalFromLocalStorate = localStorage.getItem("ItemsInOrder");
        let jVarLocalItemsArray = JSON.parse(jVLocalFromLocalStorate);
        jVarLocalItemsArray.push(jVarObjectToInsert);

        localStorage.setItem("ItemsInOrder", JSON.stringify(jVarLocalItemsArray));


    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalPrepareObject = ({ inCurrentTarget }) => {
    try {
        let jVarLocalCurrentTarget = inCurrentTarget;

        let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarLocalItemSelect = jVarClosestTabPane.querySelector(".ItemSelect");
        let jVarLocalWashType = jVarClosestTabPane.querySelector(".WashTypeClass");
        let jVarLocalPcs = jVarClosestTabPane.querySelector(".PcsClass");
        let jVarLocalRate = jVarClosestTabPane.querySelector(".RateClass");
        console.log("jVarClosestTabPane ", jVarClosestTabPane.dataset);
        //let jVarLocalAddItemButtonId = document.getElementById("AddItemButtonId");
        let jVarLocalCategory = jVarClosestTabPane.dataset.category;
        let localItemSelect = jFLocalFromSelectFunc({ inHtmlSelect: jVarLocalItemSelect });
        let localWashSelect = jFLocalFromSelectFunc({ inHtmlSelect: jVarLocalWashType });
        let localPcs = jFLocalFromDomAsInt({ inHtmlId: jVarLocalPcs });
        let localRate = jFLocalFromDomAsInt({ inHtmlId: jVarLocalRate });

        let localReturnObject = {
            Category: jVarLocalCategory,
            ...localItemSelect,
            ...localWashSelect,
            ...localPcs,
            ...localRate,
            AddOn: 0,
            Total: 0
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };

};

let jFLocalFromSelectFunc = ({ inHtmlSelect }) => {
    let jVarLocalReturnObject = {};
    // let jVarLocalItemSelectId = document.getElementById("ItemSelectId");
    let jVarLocalItemSelectId = inHtmlSelect;

    let jVarLocalItemSelectIdValue = jVarLocalItemSelectId.value;
    let jVarLocalItemSelectIdName = jVarLocalItemSelectId.name;

    jVarLocalReturnObject[jVarLocalItemSelectIdName] = jVarLocalItemSelectIdValue;

    return jVarLocalReturnObject;
};

let jFLocalFromDomAsInt = ({ inHtmlId }) => {
    let jVarLocalReturnObject = {};
    let jVarLocalPcsId = inHtmlId;

    let jVarLocalPcsIdValue = jVarLocalPcsId.value;
    let jVarLocalPcsIdName = jVarLocalPcsId.name;

    jVarLocalReturnObject[jVarLocalPcsIdName] = parseInt(jVarLocalPcsIdValue);
    return jVarLocalReturnObject;
};

let jFLocalWomanItemSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanItemSelectId = document.getElementById("WomanItemSelectId");

    let jVarLocalWomanItemSelectIdValue = jVarLocalWomanItemSelectId.value;
    let jVarLocalWomanItemSelectIdName = jVarLocalWomanItemSelectId.name;


    jVarLocalReturnObject[jVarLocalWomanItemSelectIdName] = jVarLocalWomanItemSelectIdValue;

    return jVarLocalReturnObject;
};

let jFLocalWomanWashSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanWashSelectId = document.getElementById("WomanWashSelectId");

    let jVarLocalWomanWashSelectIdValue = jVarLocalWomanWashSelectId.value;
    let jVarLocalWomanWashSelectIdName = jVarLocalWomanWashSelectId.name;

    jVarLocalReturnObject[jVarLocalWomanWashSelectIdName] = jVarLocalWomanWashSelectIdValue;
    return jVarLocalReturnObject;
};

let jFLocalWomanPcsFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanPcsId = document.getElementById("WomanPcsId");

    let jVarLocalWomanPcsIdValue = jVarLocalWomanPcsId.value;
    let jVarLocalWomanPcsIdName = jVarLocalWomanPcsId.name;

    jVarLocalReturnObject[jVarLocalWomanPcsIdName] = jVarLocalWomanPcsIdValue;
    return jVarLocalReturnObject;
};

let jFLocalWomanRateFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanRateId = document.getElementById("WomanRateId");

    let jVarLocalWomanRateIdValue = jVarLocalWomanRateId.value;
    let jVarLocalWomanRateIdName = jVarLocalWomanRateId.name;

    jVarLocalReturnObject[jVarLocalWomanRateIdName] = jVarLocalWomanRateIdValue;

    return jVarLocalReturnObject;
};

let localWomanAddItemButtonFunc = () => {
    let jVarLocalWomanAddItemButtonId = document.getElementById("WomanAddItemButtonId");
    let localWomanItemSelect = jFLocalWomanItemSelectFunc();
    let localWomanWashSelect = jFLocalWomanWashSelectFunc();
    let localWomanPcs = jFLocalWomanPcsFunc();
    let localWomanRate = jFLocalWomanRateFunc();

    let localReturnObject = {
        ...localWomanItemSelect,
        ...localWomanWashSelect,
        ...localWomanPcs,
        ...localWomanRate
    };
    console.log("localReturnObject", localReturnObject);
    return localReturnObject;
};

//Woman tab funcs end

//Kid's tab funcs start

let jFLocalKidItemSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidItemSelectId = document.getElementById("KidItemSelectId");

    let jVarLocalKidItemSelectIdValue = jVarLocalKidItemSelectId.value;
    let jVarLocalKidItemSelectIdName = jVarLocalKidItemSelectId.name;


    jVarLocalReturnObject[jVarLocalKidItemSelectIdName] = jVarLocalKidItemSelectIdValue;

    return jVarLocalReturnObject;
};

let jFLocalKidWashSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidWashSelectId = document.getElementById("KidWashSelectId");

    let jVarLocalKidWashSelectIdValue = jVarLocalKidWashSelectId.value;
    let jVarLocalKidWashSelectIdName = jVarLocalKidWashSelectId.name;

    jVarLocalReturnObject[jVarLocalKidWashSelectIdName] = jVarLocalKidWashSelectIdValue;
    return jVarLocalReturnObject;
};

let jFLocalKidPcsFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidPcsId = document.getElementById("KidPcsId");

    let jVarLocalKidPcsIdValue = jVarLocalKidPcsId.value;
    let jVarLocalKidPcsIdName = jVarLocalKidPcsId.name;

    jVarLocalReturnObject[jVarLocalKidPcsIdName] = jVarLocalKidPcsIdValue;
    return jVarLocalReturnObject;
};

let jFLocalKidRateFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidRateId = document.getElementById("KidRateId");

    let jVarLocalKidRateIdValue = jVarLocalKidRateId.value;
    let jVarLocalKidRateIdName = jVarLocalKidRateId.name;

    jVarLocalReturnObject[jVarLocalKidRateIdName] = jVarLocalKidRateIdValue;

    return jVarLocalReturnObject;
};

let localKidAddItemButtonFunc = () => {
    let jVarLocalKidAddItemButtonId = document.getElementById("KidAddItemButtonId");
    let localKidItemSelect = jFLocalKidItemSelectFunc();
    let localKidWashSelect = jFLocalKidWashSelectFunc();
    let localKidPcs = jFLocalKidPcsFunc();
    let localKidRate = jFLocalKidRateFunc();

    let localReturnObject = {
        ...localKidItemSelect,
        ...localKidWashSelect,
        ...localKidPcs,
        ...localKidRate
    };
    console.log("localReturnObject", localReturnObject);
    return localReturnObject;
};

//Kid's tab funcs end
export { StartFuncs };