import { StartFunc as StartFuncOrderItemsTableHeader } from "./OrderItemsTableHeader.js";
import { StartFunc as StartFuncOrderItemsTableRow } from "./OrderItemsTableRow.js";
import { StartFunc as StartFuncOrderItemsTableFooter } from "./OrderItemsTableFooter.js";

let StartFunc = () => {
    StartFuncOrderItemsTableHeader().then();
    StartFuncOrderItemsTableRow().then();
    StartFuncOrderItemsTableFooter().then();
};

export { StartFunc };