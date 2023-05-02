import { StartFuncs as StartFuncItemButtonClick } from "./AddItem/AddItemButton.js";
import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";
import { StartFunc as StartFuncMainScreen } from "./MainScreen/MenuIdCollapse.js";

let StartFunc = () => {
    StartFuncItemButtonClick();
    StartFuncAddOn();
    StartFuncOnChange();
    StartFuncMainScreen();
};

export { StartFunc };