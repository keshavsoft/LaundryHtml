let StartFunc = () => {
    let jVarLocalMenItems = "Customers";
    let jVarFromLocalStorage = localStorage.getItem(jVarLocalMenItems);
    let jVarFromLocalStorageAsJson = JSON.parse(jVarFromLocalStorage);

    return jVarFromLocalStorageAsJson;
};

export { StartFunc };