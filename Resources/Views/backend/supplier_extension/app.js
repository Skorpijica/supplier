//{block name="backend/supplier/app"}
console.log("first");
//{$smarty.block.parent}
console.log("second");
//{include file="backend/supplier_extension/view/main/create.js"}
console.log("third");
//{/block}




