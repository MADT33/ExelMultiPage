sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        fnReplaceMapeoBL: function (oTable) {
            
            for (var i = 0; i < oTable.length; i++) {
                var columns = {};
                    columns['Tipo'] = oTable[i].Tipo;
                    columns['Sociedad'] = oTable[i].Sociedad;
                    columns['SociedadParceiro'] = oTable[i].SociedadParceiro;
                    columns['GrupoCC'] = oTable[i].GrupoCC;
                    columns['LITemplate'] = oTable[i].LITemplate;
                    columns['RZMI1'] = oTable[i].RZMI1;
                    columns['RZMI2'] = oTable[i].RZMI2;
                    columns['RZMI3'] = oTable[i].RZMI3;
                    columns['RZMI4'] = oTable[i].RZMI4;
                    columns['RZMI5_LITemplate'] = oTable[i].RZMI5_LITemplate;
                    columns['RZMI6_Presentacion'] = oTable[i].RZMI6_Presentacion;
                
                oTable[i] = columns;
            }
            return oTable;
        },

        fnReplaceCuentaPL: function (oTable) {

            for (var i = 0; i < oTable.length; i++) {

                var columns = {};                
                columns['Cuenta'] = oTable[i].CuentaSap;
                columns['Grupo'] = oTable[i].GrupoCC;
                columns['GrupoDesc'] = oTable[i].GrupoCCDesc;
                columns['CuentaPLN1'] = oTable[i].CuentaPLN1;
                columns['CuentaPLN2'] = oTable[i].CuentaPLN2;
                columns['CuentaPLN3'] = oTable[i].CuentaPLN3;
                columns['CuentaPLN4'] = oTable[i].CuentaPLN4;
                columns['Opex_MF1'] = oTable[i].Opex_MF1;
                columns['Opex_MF2'] = oTable[i].Opex_MF2;
                oTable[i] = columns;
            }

            return oTable;
        },

        fnReplaceCuentaBS: function (oTable) {

            for (var i = 0; i < oTable.length; i++) {

                var columns = {};
                  columns['Cuenta'] = oTable[i].CuentaSAP;
                  columns['Grupo'] = oTable[i].GrupoCC;
                  columns['GrupoDesc'] = oTable[i].GrupoCCDesc;                
                  columns['CuentaBSN1'] = oTable[i].CuentaBSN1;
                  columns['CuentaBSN2'] = oTable[i].CuentaBSN2;
                  columns['CuentaBSN3'] = oTable[i].CuentaBSN3;
                  columns['CuentaBSN4'] = oTable[i].CuentaBSN4;
                oTable[i] = columns;
            }

            return oTable;
        },

        fnReplaceMapPL: function (oTable) {

            for (var i = 0; i < oTable.length; i++) {
                var columns = {};
                columns['Tipo'] = oTable[i].Tipo;
                columns['GrupoCeco'] = oTable[i].GrupoCeco;
                columns['GrupoCC'] = oTable[i].GrupoCC;
                columns['GrupoArticulo'] = oTable[i].GrupoArticulo;
                columns['CeBe'] = oTable[i].CeBe;
                columns['Centro'] = oTable[i].Centro;
                columns['Material'] = oTable[i].Material;
                columns['CLmovimientoStock'] = oTable[i].CLmovimientoStock;
                columns['ClaseDocumento'] = oTable[i].ClaseDocumento;
                columns['Condicion'] = oTable[i].Condicion;
                columns['LITemplate'] = oTable[i].LITemplate;
                columns['LIAdicional'] = oTable[i].LIAdicional;
                columns['PLMI1'] = oTable[i].PLMI1;
                columns['PLMI2'] = oTable[i].PLMI2;
                columns['PLMI3'] = oTable[i].PLMI3;
                columns['PLMI4'] = oTable[i].PLMI4;
                columns['PLMI5'] = oTable[i].PLMI5;
                columns['PLMI6_LITemplate'] = oTable[i].PLMI6_LITemplate;
                columns['PLMI6_LIAdicional'] = oTable[i].PLMI6_LIAdicional;
                columns['PL_EBITDA'] = oTable[i].PL_EBITDA;
                columns['PL_Nivel_1'] = oTable[i].PL_Nivel_1;
                columns['PL_Nivel_2'] = oTable[i].PL_Nivel_2;
                columns['PL_Otros'] = oTable[i].PL_Otros;                

                oTable[i] = columns;
            }

            return oTable;
        },

        fnReplaceGDA: function (oTable) {

            for (var i = 0; i < oTable.length; i++) {

                var columns = {};
                    columns['GrupoArticulo'] = oTable[i].GrupoDeArticulo;
                    columns['Grupo'] = oTable[i].GrupoDeArticuloDesc;
                    columns['GrupoDesc'] = oTable[i].Grupo;
                oTable[i] = columns;
            }

            return oTable;
        },

        fnReplaceCeCo: function (oTable) {

            for (var i = 0; i < oTable.length; i++) {

                var columns = {};
                columns['Ceco'] = oTable[i].CeCo;
                columns['CecoDesc'] = oTable[i].CeCoName;
                columns['CecoGrupo'] = oTable[i].GrupoDeCeCo;
                oTable[i] = columns;
            }

            return oTable;
        },

        fnReplaceCeBe: function (oTable) {

            for (var i in oTable) {

                var columns = {};
                columns['CebeN1'] = oTable[i].CeBeN1;
                columns['CebeN1Desc'] = oTable[i].CeBeN1Desc;
                columns['CebeN2'] = oTable[i].CeBeN2;
                columns['CebeN2Desc'] = oTable[i].CeBeN2Desc;
                columns['Cebe'] = oTable[i].CeBe;
                columns['CebeDesc'] = oTable[i].CeBeDesc;
                oTable[i] = columns;
            }

            return oTable;
        }
    };
});