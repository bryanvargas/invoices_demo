sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("belerofonte.sapui5.controller.App", {
            onInit: function () {
                var oData = {
                    recipient: {
                        name: "Worlddds"
                    }
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            }
        });
    });
