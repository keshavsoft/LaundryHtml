let StartFunc = () => {
    let jVarLocalItemsTableBodyId = "ItemsTableBodyId";

    let jVarLocalItemsInOrder = localStorage.getItem("ItemsInOrder");
    let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    jVarLocaljVarLocalItemsInOrderJson.forEach(element => {
        jFLocalItemsInsertRow({
            inTableBodyId: jVarLocalItemsTableBodyId,
            inCategory: element.Category,
            inItemName: element.ItemName,
            inWashType: element.WashType,
            inPcs: element.Pcs,
            inItemRate: element.Rate,
            inAddOn: element.AddOn,
            inTotal: element.Total
        });
    });
};

let jFLocalItemsInsertRow = ({ inTableBodyId, inCategory, inItemName, inWashType, inPcs, inItemRate, inAddOn, inTotal }) => {
    var table = document.getElementById(inTableBodyId);
    let jVarLocalTableRowLength = table.rows.length

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell5.className = "text-end";
    cell6.className = "text-end";
    cell7.className = "text-end";
    cell8.className = "text-end";

    let jVarLocalSerialButton = document.createElement("input");
    jVarLocalSerialButton.type = "button";
    jVarLocalSerialButton.value = jVarLocalTableRowLength + 1;

    // class="text-end"

    // Add some text to the new cells:
    //cell1.innerHTML = jVarLocalTableRowLength + 1;

    cell1.appendChild(jVarLocalSerialButton);

    cell2.innerHTML = inCategory;
    cell3.innerHTML = inItemName;
    cell4.innerHTML = inWashType;
    cell5.innerHTML = inPcs;
    cell6.innerHTML = `₹ ${inItemRate}`;
    cell7.innerHTML = `₹ ${inAddOn}`;
    cell8.innerHTML = `₹ ${inTotal}`;
};

export { StartFunc };