let StartFunc = ({ inLocalStorageKey }) => {
    let jVarLocalMenItems = inLocalStorageKey;
    let jVarFromLocalStorage = localStorage.getItem(jVarLocalMenItems);
    let jVarFromLocalStorageAsJson = JSON.parse(jVarFromLocalStorage);

    return jVarFromLocalStorageAsJson;
};

export { StartFunc };