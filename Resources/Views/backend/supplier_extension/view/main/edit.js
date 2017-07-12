//{block name="backend/supplier/view/main/edit"}
//{$smarty.block.parent}
Ext.define('Shopware.apps.SupplierExtension.view.main.Edit', {
    override: 'Shopware.apps.Supplier.view.main.Edit',


    getInfoForm : function() {
        var me = this,
            formPanel = me.callParent(arguments),
            attrFieldset = me.getAttrFieldset();

        formPanel.add(attrFieldset);
        formPanel.doLayout();
        return formPanel;
    },

    getAttrFieldset: function() {
        var me = this;

        return Ext.create('Ext.form.FieldSet', {
            alias:'widget.supplier-seo-field-set',
            collapsible: true,
            collapsed: true,
            defaults : {
                labelWidth  : 155,
                anchor      : '100%'
            },
            title : '{s name=panel_seo1}Group{/s}',
            items : [
                {
                    xtype       : 'textfield',
                    name        : 'additional',
                    fieldLabel  : '{s name=seo_meta_description}Description{/s}',
                    supportText : '{s name=seo_meta_description_support}Description meta tag{/s}',
                    allowBlank  : true
                },
                {
                    xtype       : 'textfield',
                    name        : 'additional2',
                    fieldLabel  : '{s name=seo_meta_keywords}Keywords{/s}',
                    supportText : '{s name=seo_meta_keywords_support}Keywords meta tag{/s}',
                    allowBlank  : true
                }
            ]
        })
    },
    // initComponent : function () {
    //     var me = this;
    //     me.callParent(arguments);
    //     Ext.Ajax.request({
    //         url: '{url controller=AttributeData action=loadData}',
    //         params: {
    //             _foreignKey: this.record.getId(),
    //             _table: 's_articles_supplier_attributes'
    //         },
    //         success: function(responseData, request) {
    //             var response = Ext.JSON.decode(responseData.responseText);
    //             me.formPanel.setValue(response.data['__attribute_additional']);
    //         }
    //     });
    // }
});
//{/block}