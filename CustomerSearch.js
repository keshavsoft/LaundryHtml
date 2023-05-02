import { StartFunc as StartFuncPullCustomers } from "./Cleaning/POS/Booking/Tabs/AddItem/FormLoad/AddToLocalStorage/Customers/PullCustomers.js";
import { StartFunc as StartFuncFromLocalStorage } from "./Cleaning/POS/Booking/Tabs/AddItem/FromLocalStorage/Customers.js";

let LocalFillDataList = ({ inData }) => {
    let jVarLocalCustomerDataListId = document.getElementById("CustomerDataListId");
    jVarLocalCustomerDataListId.innerHTML = "";

    if (inData.length) {
        for (var i = 0, len = inData.length; i < len; i++) {
            let LoopInsideOption = document.createElement("option");
            LoopInsideOption.value = inData[i];
            jVarLocalCustomerDataListId.append(LoopInsideOption);
            //jVarLocalCustomerDataListId.append(`<option value="${inData[i]}">`);
        }
    }
};

const StartFunc = (params) => {
    StartFuncPullCustomers();
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();

    let jVarLocalCustomersArray = Object.values(jVarLocalFromLocalStorage.CustomerNames).map(
        LoopItem => {
            return `${LoopItem.Mobile} : ${LoopItem.CustomerName}`;
        }
    );
    
    LocalFillDataList({ inData: jVarLocalCustomersArray });
};

StartFunc();
