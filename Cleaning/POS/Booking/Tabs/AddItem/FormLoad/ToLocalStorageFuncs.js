import { StartFunc as StartFuncAddToLocalStorageWashTypesInsert } from "./AddToLocalStorage/WashTypesInsert.js";
import { StartFunc as StartFuncAddToLocalStorageMenItems } from "./AddToLocalStorage/MenTab/MenItems.js";
import { StartFunc as StartFuncAddToLocalStorageItemsInOrder } from "./AddToLocalStorage/ItemsTable/ItemsInOrder.js";
import { StartFunc as StartFuncAddOnData } from "./AddToLocalStorage/AddOnData/Insert.js";
import { StartFunc as StartFuncPullCustomers } from "./AddToLocalStorage/Customers/PullCustomers.js";
import { StartFunc as StartFuncItemsToLocalStorage } from "./AddToLocalStorage/Items/ItemsToLocalStorage.js";

let StartFunc = () => {
    StartFuncAddToLocalStorageWashTypesInsert();
    // StartFuncAddToLocalStorageMenItems();
    StartFuncAddToLocalStorageItemsInOrder();
    StartFuncAddOnData();
    StartFuncPullCustomers();
    StartFuncItemsToLocalStorage();
};

export { StartFunc }