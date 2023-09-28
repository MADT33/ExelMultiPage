sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/Device"], function(e, o) {
	"use strict";
	return {
		createDeviceModel: function() {
			var n = new e(o);
			n.setDefaultBindingMode("OneWay");
			return n
		},
		fnReplaceMapeoBL: function(e) {
			for (var o = 0; o < e.length; o++) {
				var n = {};
				n["Tipo"] = e[o].Tipo;
				n["Sociedad"] = e[o].Sociedad;
				n["SociedadParceiro"] = e[o].SociedadParceiro;
				n["GrupoCC"] = e[o].GrupoCC;
				n["LITemplate"] = e[o].LITemplate;
				n["RZMI1"] = e[o].RZMI1;
				n["RZMI2"] = e[o].RZMI2;
				n["RZMI3"] = e[o].RZMI3;
				n["RZMI4"] = e[o].RZMI4;
				n["RZMI5_LITemplate"] = e[o].RZMI5_LITemplate;
				n["RZMI6_Presentacion"] = e[o].RZMI6_Presentacion;
			    n["BS_Nivel_1"] = e[o].BS_Nivel_1;
			    n["BS_Nivel_2"] = e[o].BS_Nivel_2;
			    n["BS_Nivel_3"] = e[o].BS_Nivel_3;
			    n["BS_Nivel_4"] = e[o].BS_Nivel_4;
			    n["BS_Nivel_5"] = e[o].BS_Nivel_5;
			    n["Brasil_BS1"] = e[o].Brasil_BS1;
				n["Brasil_BS2"] = e[o].Brasil_BS2;
				n["Brasil_BS3"] = e[o].Brasil_BS3;
				n["Brasil_BS4"] = e[o].Brasil_BS4;
				n["Brasil_BS5"] = e[o].Brasil_BS5;
				n["Brasil_BS6"] = e[o].Brasil_BS6;
				n["Brasil_BS7"] = e[o].Brasil_BS7;
				n["Brasil_BS8"] = e[o].Brasil_BS8;
				n["Brasil_BS9"] = e[o].Brasil_BS9;
				n["Brasil_BS10"] = e[o].Brasil_BS10;
				e[o] = n
			}
			return e
		},
		fnReplaceCuentaPL: function(e) {
			for (var o = 0; o < e.length; o++) {
				var n = {};
				n["Cuenta"] = e[o].CuentaSap;
				n["Grupo"] = e[o].GrupoCC;
				n["GrupoDesc"] = e[o].GrupoCCDesc;
				n["CuentaPLN1"] = e[o].CuentaPLN1;
				n["CuentaPLN2"] = e[o].CuentaPLN2;
				n["CuentaPLN3"] = e[o].CuentaPLN3;
				n["CuentaPLN4"] = e[o].CuentaPLN4;
				n["CuentaPLN5"] = e[o].CuentaPLN5;
				n["CuentaPLN6"] = e[o].CuentaPLN6;
				n["CuentaPLN7"] = e[o].CuentaPLN7;
				n["CuentaPLN8"] = e[o].CuentaPLN8;
				n["CuentaPLN9"] = e[o].CuentaPLN9;
				n["CuentaPLN10"] = e[o].CuentaPLN10;
				n["Opex_MF1"] = e[o].Opex_MF1;
				n["Opex_MF2"] = e[o].Opex_MF2;
				e[o] = n
			}
			return e
		},
		fnReplaceCuentaBS: function(e) {
			for (var o = 0; o < e.length; o++) {
				var n = {};
				n["Cuenta"] = e[o].CuentaSAP;
				n["Grupo"] = e[o].GrupoCC;
				n["GrupoDesc"] = e[o].GrupoCCDesc;
				n["CuentaBSN1"] = e[o].CuentaBSN1;
				n["CuentaBSN2"] = e[o].CuentaBSN2;
				n["CuentaBSN3"] = e[o].CuentaBSN3;
				n["CuentaBSN4"] = e[o].CuentaBSN4;
				n["CuentaBSN5"] = e[o].CuentaBSN5;
				n["CuentaBSN6"] = e[o].CuentaBSN6;
				n["CuentaBSN7"] = e[o].CuentaBSN7;
				n["CuentaBSN8"] = e[o].CuentaBSN8;
				n["CuentaBSN9"] = e[o].CuentaBSN9;
				n["CuentaBSN10"] = e[o].CuentaBSN10;
				e[o] = n
			}
			return e
		},
		fnReplaceMapPL: function(e) {
			for (var o = 0; o < e.length; o++) {
				var n = {};
				n["Tipo"] = e[o].Tipo;
				n["GrupoCeco"] = e[o].GrupoCeco;
				n["GrupoCC"] = e[o].GrupoCC;
				n["GrupoArticulo"] = e[o].GrupoArticulo;
				n["CeBe"] = e[o].CeBe;
				n["Centro"] = e[o].Centro;
				n["Material"] = e[o].Material;
				n["CLmovimientoStock"] = e[o].CLmovimientoStock;
				n["ClaseDocumento"] = e[o].ClaseDocumento;
				n["Condicion"] = e[o].Condicion;
				n["LITemplate"] = e[o].LITemplate;
				n["LIAdicional"] = e[o].LIAdicional;
				n["PLMI1"] = e[o].PLMI1;
				n["PLMI2"] = e[o].PLMI2;
				n["PLMI3"] = e[o].PLMI3;
				n["PLMI4"] = e[o].PLMI4;
				n["PLMI5"] = e[o].PLMI5;
				n["PLMI6_LITemplate"] = e[o].PLMI6_LITemplate;
				n["PLMI6_LIAdicional"] = e[o].PLMI6_LIAdicional;
				n["PL_EBITDA"] = e[o].PL_EBITDA;
				n["PL_Nivel_1"] = e[o].PL_Nivel_1;
				n["PL_Nivel_2"] = e[o].PL_Nivel_2;
				n["PL_Otros"] = e[o].PL_Otros;
				n["PL_Nivel_3"] = e[o].PL_Nivel_3;
				n["PL_Nivel_4"] = e[o].PL_Nivel_4;
				n["PL_Nivel_5"] = e[o].PL_Nivel_5;
				n["Brasil_PL1"] = e[o].Brasil_PL1;
				n["Brasil_PL2"] = e[o].Brasil_PL2;
				n["Brasil_PL3"] = e[o].Brasil_PL3;
				n["Brasil_PL4"] = e[o].Brasil_PL4;
				n["Brasil_PL5"] = e[o].Brasil_PL5;
				n["Brasil_PL6"] = e[o].Brasil_PL6;
				n["Brasil_PL7"] = e[o].Brasil_PL7;
				n["Brasil_PL8"] = e[o].Brasil_PL8;
				n["Brasil_PL9"] = e[o].Brasil_PL9;
				n["Brasil_PL10"] = e[o].Brasil_PL10;
				e[o] = n
			}
			return e
		},
		fnReplaceGDA: function(e) {
			for (var o = 0; o < e.length; o++) {
				var n = {};
				n["GrupoArticulo"] = e[o].GrupoDeArticulo;
				n["Grupo"] = e[o].GrupoDeArticuloDesc;
				n["GrupoDesc"] = e[o].Grupo;
				n["UOMbase"] = e[o].UOMbase;
				n["GrupoArt_N1"] = e[o].GrupoArt_N1;
				n["GrupoArt_N2"] = e[o].GrupoArt_N2;
				e[o] = n
			}
			return e
		},
		fnReplaceCeCo: function(e) {
			for (var o = 0; o < e.length; o++) {
				var n = {};
				n["Ceco"] = e[o].CeCo;
				n["CecoDesc"] = e[o].CeCoName;
				n["CecoGrupo"] = e[o].GrupoDeCeCo;
				n["CECO_N1"] = e[o].CECO_N1;
                n["CECO_N2"] = e[o].CECO_N2;
                n["CECO_N3"] = e[o].CECO_N3;
                n["CECO_N4"] = e[o].CECO_N4;
                n["CECO_N5"] = e[o].CECO_N5;
                n["CECO_N6"] = e[o].CECO_N6;
                n["CECO_N7"] = e[o].CECO_N7;
                n["CECO_N8"] = e[o].CECO_N8;
                n["CECO_N9"] = e[o].CECO_N9;
                n["CECO_N10"] = e[o].CECO_N10;
				e[o] = n
			}
			return e
		},
		fnReplaceCeBe: function(e) {
			for (var o in e) {
				var n = {};
				n["CebeN1"] = e[o].CeBeN1;
				n["CebeN1Desc"] = e[o].CeBeN1Desc;
				n["CebeN2"] = e[o].CeBeN2;
				n["CebeN2Desc"] = e[o].CeBeN2Desc;
				n["Cebe"] = e[o].CeBe;
				n["CebeDesc"] = e[o].CeBeDesc;
				e[o] = n
			}
			return e
		}
	}
});