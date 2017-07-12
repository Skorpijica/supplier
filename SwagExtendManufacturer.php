<?php

namespace SwagExtendManufacturer;
use Shopware\Bundle\AttributeBundle\Service\CrudService;
use Shopware\Bundle\AttributeBundle\Service\TypeMapping;
use Shopware\Components\Plugin;
use Shopware\Components\Plugin\Context\InstallContext;
use Shopware\Components\Plugin\Context\UninstallContext;

class SwagExtendManufacturer extends Plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'Enlight_Controller_Action_PostDispatchSecure_Backend_Supplier' => 'onPostDispatchSupplier'
        ];
    }
    public function onPostDispatchSupplier(\Enlight_Event_EventArgs $args)
    {
        /** @var \Enlight_Controller_Action $controller */
        $controller = $args->getSubject();
        $request = $controller->Request();
        $view = $controller->View();
        $view->addTemplateDir(__DIR__ . '/Resources/Views/');
        if ($request->getActionName() == 'load'){
            $view->extendsTemplate('backend/supplier_extension/controller/main.js');
            $view->extendsTemplate('backend/supplier_extension/view/main/create.js');
            $view->extendsTemplate('backend/supplier_extension/view/main/edit.js');
        }
    }
}