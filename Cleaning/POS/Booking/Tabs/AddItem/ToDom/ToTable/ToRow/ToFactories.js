let StartFunc = ({ inlocation,inlocationPk, inClonedTemplateRow }) => {

    let jVarLocalOrderItemsOrderItemsItemNameClass = inClonedTemplateRow.querySelector(".OrderItemsFactoryClass");
    jVarLocalOrderItemsOrderItemsItemNameClass.dataset.pk = inlocationPk;
    jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inlocation;

    // OrderItemsFactoryClass:OrderItemsFactoryClass
};

export { StartFunc };