let StartFunc = () => {
    let jVarLocalMenItems = "Items";
    let jVarFromLocalStorage = localStorage.getItem(jVarLocalMenItems);
    let jVarFromLocalStorageAsJson = JSON.parse(jVarFromLocalStorage);

    return jVarFromLocalStorageAsJson;
};

export { StartFunc };