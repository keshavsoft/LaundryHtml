let StartFunc = () => {
    let jVarLocalIdNeeded = "MenItemsTabId";
    let jVarLocalClassNeeded = "ItemSerialClass";
    let jVarLocalIdItemsTableBodyId = "ItemsTableBodyId"

    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalIdNeeded);
    let jVarLocalTableBody = document.getElementById(jVarLocalIdItemsTableBodyId);
    let jVarLocalSerial = jVarLocalMenItemsTabId.querySelector(`.${jVarLocalClassNeeded}`);

    jVarLocalSerial.value = jVarLocalTableBody.rows.length + 1;
};

export { StartFunc };