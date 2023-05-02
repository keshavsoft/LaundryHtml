import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
import { StartFunc as StartFillSelect } from "./FillSelect/MenTab/MenItems.js";
import { StartFunc as StartFuncToDomToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncOrderItemsTableRow } from "../ToDom/Templates/OrderItemsTableRow.js";

let StartFunc = () => {
    StartFuncWashTypeFill();
    StartFillSelect();
    StartFuncToDomToOrderItems();
    StartFuncOrderItemsTableRow().then(() => {

    });
    // StartFuncToAddOns();
};

export { StartFunc }