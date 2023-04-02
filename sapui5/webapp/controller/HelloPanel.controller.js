sap.ui.define([
	"sap/ui/core/mvc/Controller",    
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(
	Controller,
	MessageToast,
	Fragment
) {
	"use strict";

	return Controller.extend("belerofonte.sapui5.controller.HelloPanel", {

        /**
         * @override
         */
        onInit: function() {          
        
        },
        
        onShowHello: function () {
            var oBundle = this.getView().getModel("i18n").getResurceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMgs = oBundle.getText("helloMgs", [sRecipient]);
            MessageToast.show(sMgs);
        },

		onOpenDialog: function(oEvent) {
            this.getOwnerComponent().openHelloDialog();
			// const oView = this.getView();
            // if (!this.byId("helloDialog")) {
            //     Fragment.load({
            //         id: oView.getId(),
            //         name: "belerofonte.sapui5.view.HelloDialog",
            //         controller: this
            //     }).then(function(oDialog) {
            //         oView.addDependent(oDialog);
            //         oDialog.open();
            //     });
            // } else {
            //     thid.byId("helloDialog").open();
            // }
		}

		// onCloseDialog: function(oEvent) {
		// 	this.byId("helloDialog").close();
		// }
	});
});