import { StartFunc as StartFuncAddFrequent } from "./MenTab/AddFrequent.js";
import { StartFunc as StartFuncAddToDom } from "./AddToDom.js";

import { StartFunc as StartFuncToLocalStorageFuncs } from "./ToLocalStorageFuncs.js";
import { StartFunc as StartFuncToItemAddTemplateRow } from "./ToDom/ToItemAddTemplateRow/ToItemSerialClass.js";

let StartFunc = () => {
    StartFuncToLocalStorageFuncs();
    StartFuncAddToDom();

    StartFuncAddFrequent();
    StartFuncToItemAddTemplateRow();
};

export { StartFunc }