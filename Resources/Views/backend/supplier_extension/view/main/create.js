//{block name="backend/supplier/view/main/create"}
//{$smarty.block.parent}
Ext.define('Shopware.apps.SupplierExtension.view.main.Create', {
    override: 'Shopware.apps.Supplier.view.main.Create',

    getFormPanel : function() {
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
    }
});
//{/block}