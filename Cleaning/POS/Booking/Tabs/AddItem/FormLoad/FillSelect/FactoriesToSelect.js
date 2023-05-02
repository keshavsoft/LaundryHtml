import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/Factories.js";

let StartFunc = () => {
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();

    jFCommonSelectFill({
        inData: jVarLocalFromLocalStorage,
        inHtmlId: "MenItemsTabId"
    });
};

let jFCommonSelectFill = ({ inData, inHtmlId }) => {
    let jVarLocalinHtmlId = document.getElementById(inHtmlId);

    if (jVarLocalinHtmlId === null === false) {
        let jVarLocalWomanWashSelectId = jVarLocalinHtmlId.querySelector("select.FactorySelectClass");
        console.log("jVarLocalWomanWashSelectId",jVarLocalWomanWashSelectId);

        let jVarLocalMenItems = inData.map(element => {
            return {
                location: element.location,
                pk: element.pk
            }
        });

        jFLocalAddToSelect({
            inData: jVarLocalMenItems,
            inHtmlSelect: jVarLocalWomanWashSelectId
        });
    };
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    if (inHtmlSelect === null === false) {
        inHtmlSelect.innerHTML = "";

        inData.forEach((element, LoopIndex) => {
            var car = new Option(element.location, element.pk);
            inHtmlSelect.options.add(car);
        });
    };
};

export { StartFunc };