// import { StartFunc as StartFuncAddListeners } from "../AddListeners/FrequentItems/ButtonClickFuncs.js";
import { StartFunc as StartFuncAddListeners } from "../../AddListeners/FrequentItems/ButtonClickFuncs.js";
import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/Items.js";

const StartFunc = () => {
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();

    jFMenTab({
        inData: jVarLocalFromLocalStorage,
        inHtmlId: "MenFrequentItems"
    });

    // jFMenTab({
    //     inLocalStorateKey: "WomenItems",
    //     inHtmlId: "WomenFrequentItems"
    // });
};

const jFMenTab = ({ inData, inHtmlId }) => {
    let jVarLocalMenItemsJson = inData;
    let jVarLocalSorted = jVarLocalMenItemsJson.sort((a, b) => { return b.Pcs - a.Pcs });

    jFLocalDescByWashed({ inDataSorted: jVarLocalSorted, inHtmlId });
};

const jFLocalDescByWashed = ({ inDataSorted, inHtmlId }) => {
    let jVarLocalinHtmlId = inHtmlId;

    let jVarLocalSorted = inDataSorted;

    const container = document.getElementById(jVarLocalinHtmlId);

    if (container === null === false) {
        let jVarLocalRow = document.createElement("div");
        jVarLocalRow.className = "row";

        if (jVarLocalSorted.length > 0) {
            jVarLocalRow.appendChild(jFLocalCreateButton({
                inItemName: jVarLocalSorted[0].ItemName,
                inItemRate: jVarLocalSorted[0].DryWashRate
            }));
        };

        if (jVarLocalSorted.length > 1) {
            jVarLocalRow.appendChild(jFLocalCreateButton({
                inItemName: jVarLocalSorted[1].ItemName,
                inItemRate: jVarLocalSorted[1].DryWashRate
            }));
        };

        if (jVarLocalSorted.length > 2) {
            jVarLocalRow.appendChild(jFLocalCreateButton({
                inItemName: jVarLocalSorted[2].ItemName,
                inItemRate: jVarLocalSorted[2].DryWashRate
            }));
        };

        if (jVarLocalSorted.length > 3) {
            jVarLocalRow.appendChild(jFLocalCreateButton({
                inItemName: jVarLocalSorted[3].ItemName,
                inItemRate: jVarLocalSorted[3].DryWashRate
            }));
        };

        container.appendChild(jVarLocalRow);
    };
};

const jFLocalCreateButton = ({ inItemName, inItemRate }) => {
    let jVarLocalItemName = inItemName;
    let jVarLocalCol = document.createElement("div");
    jVarLocalCol.className = "col";

    let jVarLocalButton = document.createElement("input");
    jVarLocalButton.type = "button";
    jVarLocalButton.value = jVarLocalItemName;
    jVarLocalButton.className = "btn btn-primary";
    jVarLocalButton.dataset.rate = inItemRate;

    jVarLocalButton.addEventListener("click", StartFuncAddListeners);

    jVarLocalCol.appendChild(jVarLocalButton);

    return jVarLocalCol;
};

export { StartFunc }