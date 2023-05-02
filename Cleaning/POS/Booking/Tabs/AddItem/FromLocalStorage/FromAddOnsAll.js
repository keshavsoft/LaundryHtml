let StartFunc = () => {
    let jVarLocalItemsInOrder = localStorage.getItem("AddOnData");
    let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    return jVarLocaljVarLocalItemsInOrderJson;
};

export { StartFunc };