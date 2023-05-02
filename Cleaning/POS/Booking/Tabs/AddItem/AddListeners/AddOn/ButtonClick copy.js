let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);
};
let jFLocalButtonClick = () => {
    jFLocalPrepareData();
    console.log("ssssssssssssss");
};

let jFLocalPrepareData = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");
    let jVarLocalAddOnImageId = document.getElementById("AddOnImageId");

    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;
    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarLocaljVarLocalAddOnImageIdValue = jVarLocalAddOnImageId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    jFLocalInsertRow({
        inAddOnService: jVarLocalAddOnServiceIdtext,
        inAddOnRate: jVarLocalAddOnRateIdValue,
        inAddOnItemSerial: jVarLocaljVarLocalAddOnItemIdValue,
        inAddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    });
};

let jFLocalInsertRow = ({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial }) => {
    var table = document.getElementById("AddOnTableBodyId");
    let jVarLocalTableRowLength = table.rows.length

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = inAddOnItemSerial;
    cell2.innerHTML = jVarLocalTableRowLength + 1;
    cell3.innerHTML = inAddOnService;
    cell4.innerHTML = inAddOnRate;
    cell5.innerHTML = inAddOnImageSerial;
};

export { StartFunc };