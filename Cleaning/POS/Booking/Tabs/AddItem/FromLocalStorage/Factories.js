let StartFunc = () => {
    let jVarLocalMenItems = "Factories";
    let jVarFromLocalStorage = localStorage.getItem(jVarLocalMenItems);
    let jVarFromLocalStorageAsJson = JSON.parse(jVarFromLocalStorage);

    return jVarFromLocalStorageAsJson;
};

export { StartFunc };