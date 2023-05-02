let StartFunc = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("WashTypes");
    let jVarLocalOptionSelected = "PetrolWash";

    jFLocalMenSelectFill({
        inWashTypeData: JSON.parse(jVarLocalFromLocalStorage),
        inOptionSelected: jVarLocalOptionSelected
    });

    jFLocalWomenSelectFill({
        inWashTypeData: JSON.parse(jVarLocalFromLocalStorage),
        inOptionSelected: jVarLocalOptionSelected
    });

    // selectItemByValue(inHtmlSelect, jVarLocalOptionSelected);
    // console.log("sssssss : ", k1);
};

let jFLocalWomenSelectFill = ({ inWashTypeData, inOptionSelected }) => {
    let jVarLocalWomanWashSelectId = document.getElementById("WomanWashSelectId");

    if (jVarLocalWomanWashSelectId === null === false) {
        let jVarLocalOptionSelected = inOptionSelected;

        jFLocalAddToSelect({
            inData: inWashTypeData,
            inHtmlSelect: jVarLocalWomanWashSelectId
        });

        selectItemByValue(jVarLocalWomanWashSelectId, jVarLocalOptionSelected);
    };
};

let jFLocalMenSelectFill = ({ inWashTypeData, inOptionSelected }) => {
    let jVarLocalWomanWashSelectId = document.getElementById("WashSelectId");
    let jVarLocalOptionSelected = inOptionSelected;

    jFLocalAddToSelect({
        inData: inWashTypeData,
        inHtmlSelect: jVarLocalWomanWashSelectId
    });

    selectItemByValue(jVarLocalWomanWashSelectId, jVarLocalOptionSelected);
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    if (inHtmlSelect === null === false) {
        inHtmlSelect.innerHTML = "";

        inData.forEach((element, LoopIndex) => {
            var car = new Option(element, LoopIndex);
            inHtmlSelect.options.add(car);
        });

        //inHtmlSelect.options[1].selected = true;

    };
};

function selectItemByValue(elmnt, value) {
    for (var i = 0; i < elmnt.options.length; i++) {
        if (elmnt.options[i].text === value) {
            elmnt.selectedIndex = i;
            break;
        }
    }
};

export { StartFunc };