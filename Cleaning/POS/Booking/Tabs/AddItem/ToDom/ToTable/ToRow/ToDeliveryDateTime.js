let StartFunc = ({ inDeliveryDateTime, inClonedTemplateRow }) => {
    let jVarLocalOrderItemsOrderItemsItemNameClass = inClonedTemplateRow.querySelector(".OrderItemsDeliveryDateTimeClass");
    jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inDeliveryDateTime;
};

export { StartFunc };