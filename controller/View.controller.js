sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"raizen/cgral/utils/Logica",
	"raizen/cgral/utils/jszip",
	"raizen/cgral/utils/xlsx",
	"raizen/cgral/services/Service",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(e, a, t, o, r, s, c, MessageBox, MessageToast) {
	"use strict";
	var l;
	return e.extend("raizen.cgral.controller.View", {
		onInit: function() {
			this.localModel = new sap.ui.model.json.JSONModel;
			this.getView().setModel(this.localModel, "localModel");
			l = new sap.m.BusyDialog({
				text: "Cargando datos..."
			})
		},
		fileReader1: function(e) {
			var a = this;
			var o = {};
			var r = {};
			var s = {};
			var c = {};
			var l = {};
			var n = {};
			var i = {};
			var u = new FileReader;
			u.onload = function(e) {
				var r = e.target.result;
				var s = XLSX.read(r, {
					type: "binary"
				});
				s.SheetNames.forEach(function(e) {
					switch (e) {
						case s.SheetNames[0]:
							o = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						case s.SheetNames[1]:
							l = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						case s.SheetNames[2]:
							n = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						case s.SheetNames[3]:
							i = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						case s.SheetNames[4]:
							C = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						case s.SheetNames[5]:
							S = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						case s.SheetNames[6]:
							p = XLSX.utils.sheet_to_row_object_array(s.Sheets[e]);
							break;
						default:
					}
				});
				if (o) {
					var c = t.fnReplaceCeBe(o);
					var l = t.fnReplaceCeCo(l);
					var n = t.fnReplaceCuentaBS(n);
					var i = t.fnReplaceCuentaPL(i);
					var C = t.fnReplaceGDA(C);
					var S = t.fnReplaceMapeoBL(S);
					var p = t.fnReplaceMapPL(p);
					a.localModel.setData({
						CEBESet: o,
						CECOSet: l,
						BSSet: n,
						PLSet: i,
						GDASet: C,
						MapeoBSSet: S,
						MapeoPLSet: p
					});
					a.localModel.refresh(true)
				}
				u.onerror = function(e) {
					console.log(e)
				}
			};
			u.readAsBinaryString(e)
		},
		onGuardar: function() {
			var e = this;
			var a = !!this.getView().$().closest(".sapUiSizeCompact").length;
			const t = e.localModel.oData.CEBESet;
			const o = e.localModel.oData.CECOSet;
			const r = e.localModel.oData.BSSet;
			const n = e.localModel.oData.PLSet;
			const i = e.localModel.oData.GDASet;
			const u = e.localModel.oData.MapeoBSSet;
			const C = e.localModel.oData.MapeoPLSet;
			var oselected1 = this.byId("idbox1").getSelected();
			var oselected2 = this.byId("idbox2").getSelected();
			var oselected3 = this.byId("idbox3").getSelected();
			if (!u) {
				sap.m.MessageBox.alert("Debe seleccionar un archivo para guardar, presione Subir Archivo");
			}
			else {
			if ((!oselected1) && (!oselected2) && (!oselected3)) {
				sap.m.MessageBox.alert("Seleccione al menos una opción para guardar");
			} else {
				sap.m.MessageBox.warning("Confirma que desea cargar la información? ", {
					actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
					emphasizedAction: sap.m.MessageBox.Action.OK,
					onClose: function(sAction) {
						if (sAction === sap.m.MessageBox.Action.OK) {
							l.open();
							var varc = '';
							if (oselected1) {
								if (oselected2) {
									if (oselected3) {
										 varc = "3";
									} else {
										 varc = "2";
									}
								}
								else if (oselected3) {
										 varc = "7";
									} 
								else {
									 varc = "1";
								}
							} 
							
							else if (oselected2) {
									if (oselected3) {
										 varc = "5";
									} else {
										 varc = "4";
									}
							}		
							else if (oselected3) {
										      varc = "6";
							}
							s.postData({
								Value: varc,
								CEBESet: t.map(e => {
									const {
										CebeN1: a,
										CebeN1Desc: t,
										CebeN2: o,
										CebeN2Desc: r,
										Cebe: s,
										CebeDesc: c
									} = e;
									return {
										CebeN1: a,
										CebeN1Desc: t,
										CebeN2: o,
										CebeN2Desc: r,
										Cebe: s,
										CebeDesc: c
									}
								}),

								CECOSet: o.map(e => {
									const {
										Ceco: a,
										CecoDesc: t,
										CecoGrupo: o,
										CECO_N1: r,
										CECO_N2: s,
										CECO_N3: c,
										CECO_N4: l,
										CECO_N5: n,
										CECO_N6: i,
										CECO_N7: u,
										CECO_N8: C,
										CECO_N9: S,
										CECO_N10: p
									} = e;
									return {
										Ceco: a,
										CecoDesc: t,
										Grupo: o,
										CECO_N1: r,
										CECO_N2: s,
										CECO_N3: c,
										CECO_N4: l,
										CECO_N5: n,
										CECO_N6: i,
										CECO_N7: u,
										CECO_N8: C,
										CECO_N9: S,
										CECO_N10: p
									}
								}),
								BSSet: r.map(e => {
									const {
										Cuenta: a,
										Grupo: t,
										GrupoDesc: o,
										CuentaBSN1: r,
										CuentaBSN2: s,
										CuentaBSN3: c,
										CuentaBSN4: l,
										CuentaBSN5: n,
										CuentaBSN6: i,
										CuentaBSN7: u,
										CuentaBSN8: C,
										CuentaBSN9: S,
										CuentaBSN10: p
									} = e;
									return {
										Cuenta: a,
										Grupo: t,
										GrupoDesc: o,
										CuentaBSN1: r,
										CuentaBSN2: s,
										CuentaBSN3: c,
										CuentaBSN4: l,
										CuentaBSN5: n,
										CuentaBSN6: i,
										CuentaBSN7: u,
										CuentaBSN8: C,
										CuentaBSN9: S,
										CuentaBSN10: p
									}
								}),
								PLSet: n.map(e => {
									const {
										Cuenta: a,
										Grupo: t,
										GrupoDesc: o,
										CuentaPLN1: r,
										CuentaPLN2: s,
										CuentaPLN3: c,
										CuentaPLN4: l,
										CuentaPLN5: n,
										CuentaPLN6: i,
										CuentaPLN7: u,
										CuentaPLN8: C,
										CuentaPLN9: S,
										CuentaPLN10: p,
										Opex_MF1: L,
										Opex_MF2: M
									} = e;
									return {
										Cuenta: a,
										Grupo: t,
										GrupoDesc: o,
										CuentaPLN1: r,
										CuentaPLN2: s,
										CuentaPLN3: c,
										CuentaPLN4: l,
										CuentaPLN5: n,
										CuentaPLN6: i,
										CuentaPLN7: u,
										CuentaPLN8: C,
										CuentaPLN9: S,
										CuentaPLN10: p,
										Opex_MF1: L,
										Opex_MF2: M
									}
								}),
								GDASet: i.map(e => {
									const {
										GrupoArticulo: a,
										GrupoDesc: t,
										Grupo: o,
										UOMbase: r,
										GrupoArt_N1: s,
										GrupoArt_N2: c
									} = e;
									return {
										GrupoArticulo: a,
										GrupoDesc: t,
										Grupo: o,
										UOMbase: r,
										GrupoArt_N1: s,
										GrupoArt_N2: c
									}
								}),
								//			}
								//			if (oselected2){
								MapeoBSSet: u.map(e => {
									const {
										Tipo: a,
										Sociedad: t,
										SociedadParceiro: o,
										GrupoCC: r,
										LITemplate: s,
										RZMI1: c,
										RZMI2: l,
										RZMI3: n,
										RZMI4: i,
										RZMI5_LITemplate: u,
										RZMI6_Presentacion: C,
										BS_Nivel_1: S,
										BS_Nivel_2: p,
										BS_Nivel_3: L,
										BS_Nivel_4: M,
										BS_Nivel_5: _,
										Brasil_BS1: A,
										Brasil_BS2: B,
										Brasil_BS3: D,
										Brasil_BS4: E,
										Brasil_BS5: F,
										Brasil_BS6: G,
										Brasil_BS7: H,
										Brasil_BS8: I,
										Brasil_BS9: J,
										Brasil_BS10: K
										
									} = e;
									return {
										Tipo: a,
										Sociedad: t,
										SociedadParceiro: o,
										GrupoCC: r,
										LITemplate: s,
										RZMI1: c,
										RZMI2: l,
										RZMI3: n,
										RZMI4: i,
										RZMI5_LITemplate: u,
										RZMI6_Presentacion: C,
										BS_Nivel_1: S,
										BS_Nivel_2: p,
										BS_Nivel_3: L,
										BS_Nivel_4: M,
										BS_Nivel_5: _,
										Brasil_BS1: A,
										Brasil_BS2: B,
										Brasil_BS3: D,
										Brasil_BS4: E,
										Brasil_BS5: F,
										Brasil_BS6: G,
										Brasil_BS7: H,
										Brasil_BS8: I,
										Brasil_BS9: J,
										Brasil_BS10: K,
										
										
									}
								}),
								//			}
								//			if (oselected3){
								MapeoPLSet: C.map(e => {
									const {
										Tipo: a,
										GrupoCeco: t,
										GrupoCC: o,
										GrupoArticulo: r,
										CeBe: s,
										Centro: c,
										Material: l,
										CLmovimientoStock: n,
										ClaseDocumento: i,
										Condicion: u,
										LITemplate: C,
										LIAdicional: S,
										PLMI1: p,
										PLMI2: L,
										PLMI3: M,
										PLMI4: _,
										PLMI5: d,
										PLMI6_LITemplate: P,
										PLMI6_LIAdicional: I,
										PL_EBITDA: m,
										PL_Nivel_1: N,
										PL_Nivel_2: h,
										PL_Otros: D,
										PL_Nivel_3: T,
										PL_Nivel_4: H,
										PL_Nivel_5: O,
										Brasil_PL1: A,
										Brasil_PL2: B,
										Brasil_PL3: Z,
										Brasil_PL4: E,
										Brasil_PL5: F,
										Brasil_PL6: G,
										Brasil_PL7: Y,
										Brasil_PL8: X                ,
										Brasil_PL9: J,
										Brasil_PL10: K,
									} = e;
									return {
										Tipo: a,
										GrupoCeco: t,
										GrupoCC: o,
										GrupoArticulo: r,
										CeBe: s,
										Centro: c,
										Material: l,
										CLmovimientoStock: n,
										ClaseDocumento: i,
										Condicion: u,
										LITemplate: C,
										LIAdicional: S,
										PLMI1: p,
										PLMI2: L,
										PLMI3: M,
										PLMI4: _,
										PLMI5: d,
										PLMI6_LITemplate: P,
										PLMI6_LIAdicional: I,
										PL_EBITDA: m,
										PL_Nivel_1: N,
										PL_Nivel_2: h,
										PL_Otros: D,
										PL_Nivel_3: T,
										PL_Nivel_4: H,
										PL_Nivel_5: O,
										Brasil_PL1: A,
										Brasil_PL2: B,
										Brasil_PL3: Z,
										Brasil_PL4: E,
										Brasil_PL5: F,
										Brasil_PL6: G,
										Brasil_PL7: Y,
										Brasil_PL8: X,
										Brasil_PL9: J,
										Brasil_PL10: K,
									}
								})

								//			}
							}).then(t => {
								c.success("Se actualizaron las tablas ", {
									styleClass: a ? "sapUiSizeCompact" : ""
								});
								e.localModel.setData({
									CEBESet: {},
									CECOSet: {},
									BSSet: {},
									PLSet: {},
									GDASet: {},
									MapeoBSSet: {},
									MapeoPLSet: {}
								});
								e.localModel.refresh(true);
								l.close()
							}).catch(e => {
								c.error("Erro: " + e.message, {
									styleClass: a ? "sapUiSizeCompact" : ""
								});
								l.close()
							});

						}
					}
				});

			}
				
			}

		},
		onUploadFile: function(e) {
			this.fileReader1(e.getParameter("files") && e.getParameter("files")[0])
		}
	})
});