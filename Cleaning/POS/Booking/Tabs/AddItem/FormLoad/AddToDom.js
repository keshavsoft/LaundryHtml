import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
import { StartFunc as StartFuncItemsToSelect } from "./FillSelect/ItemsToSelect.js";
import { StartFunc as StartFuncToDomToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncOrderItemsTableRow } from "../ToDom/Templates/OrderItemsTableRow.js";

let StartFunc = () => {
    StartFuncWashTypeFill();
    StartFuncItemsToSelect();
    StartFuncToDomToOrderItems();
    StartFuncOrderItemsTableRow().then(() => {

    });
    // StartFuncToAddOns();
};

export { StartFunc }