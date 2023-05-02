import { StartFunc as StartFuncOrderItemsTableRow } from "../../FetchFuncs/FetchHtml/OrderItemsTableHeader.js";

let StartFunc = async () => {
    let jVarLocalTemplateForOrderItemsTableRow = document.getElementById("ItemsTableHeaderId");
    let jVarLocalFromTemplate = await StartFuncOrderItemsTableRow();

    if (jVarLocalFromTemplate.KTF) {
        jVarLocalTemplateForOrderItemsTableRow.innerHTML = jVarLocalFromTemplate.HtmlString;
    };
};

export { StartFunc };