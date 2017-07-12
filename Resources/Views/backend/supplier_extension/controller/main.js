//{block name="backend/supplier/controller/main"}
//{$smarty.block.parent}
Ext.define('Shopware.apps.SupplierExtension.controller.Main', {
    override: 'Shopware.apps.Supplier.controller.Main',

    init: function() {
        var me = this;
        me.callParent(arguments);
        Shopware.app.Application.addListener('supplier-save-successfully', function (controller, record, form) {
            Ext.Ajax.request({
                method: 'POST',
                url: '{url controller=AttributeData action=saveData}',
                params: {
                    _foreignKey: record.get('id'),
                    _table: 's_articles_supplier_attributes',
                    __attribute_additional: form.getForm().findField("additional").getValue(),
                    __attribute_additional2: form.getForm().findField("additional2").getValue()
                }
            });
            console.log(record.get('id'));
            console.log(form.getForm().findField("additional").getValue());
            console.log(form.getForm().findField("additional2").getValue());
        });
}

});
//{/block}