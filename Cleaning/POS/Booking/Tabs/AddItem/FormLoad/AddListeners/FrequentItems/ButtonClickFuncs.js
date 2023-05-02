let StartFunc = (event) => {
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