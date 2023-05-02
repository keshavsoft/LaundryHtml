// import { StartFunc as StartFuncAddListeners } from "../AddListeners/FrequentItems/ButtonClickFuncs.js";
import { StartFunc as StartFuncAddListeners } from "../../AddListeners/FrequentItems/ButtonClickFuncs.js";

const StartFunc = () => {
    jFMenTab({
        inLocalStorateKey: "MenItems",
        inHtmlId: "MenFrequentItems"
    });

    jFMenTab({
        inLocalStorateKey: "WomenItems",
        inHtmlId: "WomenFrequentItems"
    });
};

const jFMenTab = ({ inLocalStorateKey, inHtmlId }) => {
    let jVarLocalinLocalStorateKey = inLocalStorateKey;
    let jVarLocalinHtmlId = inHtmlId;

    let jVarLocalMenItems = localStorage.getItem(jVarLocalinLocalStorateKey);
    let jVarLocalMenItemsJson = JSON.parse(jVarLocalMenItems);

    let jVarLocalSorted = jVarLocalMenItemsJson.sort((a, b) => { return b.Pcs - a.Pcs });

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

        container.appendChild(jVarLocalRow);
    };
};

const jFLocalItemClick = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarLocalItemName = jVarLocalCurrentTarget.value;
    let jVarLocalRate = jVarLocalCurrentTarget.dataset.rate;
    let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
    let jVarHtmlRate = jVarClosestTabPane.querySelector(".RateClass");
    let jVarLocalAddButton = jVarClosestTabPane.querySelector(".AddItemButtonClass");

    let jVarLocalClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
    let jVarLocalItemSelectId = jVarLocalClosestTabPane.querySelector("select.ItemSelect");

    selectItemByValue({
        inHtmlSelect: jVarLocalItemSelectId,
        inItemName: jVarLocalItemName
    });

    jVarHtmlRate.value = jVarLocalRate;
    jVarLocalAddButton.click();
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

function selectItemByValue({ inHtmlSelect, inItemName }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].text === inItemName) {
            inHtmlSelect.selectedIndex = i;
            // return inHtmlSelect.options[i].value;
            break;
        }
    }
};

export { StartFunc }