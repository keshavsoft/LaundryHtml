let StartFunc = () => {
    let jVarLocalItemsInOrder = localStorage.getItem("ItemsInOrder");
    let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    return jVarLocaljVarLocalItemsInOrderJson;
};

export { StartFunc };