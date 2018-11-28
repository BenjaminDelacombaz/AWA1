	AmCharts.makeChart("chartdiv",
				{
					"type": "pie",
					"balloonText": "",
					"innerRadius": "50%",
					"labelRadius": 40,
					"pullOutRadius": "0%",
					"startRadius": "100%",
					"baseColor": "",
        "colors": [
						"#aa2626",
						"#cf2c26",
						"#938976",
						"#cc974a",
						"#c1a47e",
						"#cec7bc"
					],
        "colorsGris": [
						"#3f3f3f",
						"#5e5e5e",
						"#969696",
						"#bcbcbc",
						"#e2e2e2",
						"#f7f7f7"
					],
        "colorsOld": [
						"#cf2c26",
						"#f49d1e",
						"#cc974a",
						"#c1a47e",
						"#73bf41",
						"#938976",
						"#4699af",
						"#04D215",
						"#0D8ECF",
						"#0D52D1",
						"#2A0CD0",
						"#8A0CCF",
						"#CD0D74",
						"#754DEB",
						"#DDDDDD",
						"#999999",
						"#333333",
						"#000000",
						"#57032A",
						"#CA9726",
						"#990000",
						"#4B0C25"
					],
					"hoverAlpha": 0.85,
					"labelsEnabled": false,
					"outlineThickness": 0,
					"pullOutOnlyOne": true,
					"startDuration": 0,
					"titleField": "category",
					"valueField": "column-1",
					"visibleInLegendField": "column-1",
					"autoResize": true,
					"fontSize": 15,
					"percentPrecision": 0,
					"svgIcons": false,
					"tapToActivate": false,
					"allLabels": [],
					"balloon": {
						"adjustBorderColor": false,
						"disableMouseEvents": false,
						"fixedPosition": false
					},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle",
						"position": "right",
						"rollOverGraphAlpha": 0,
						"switchable": false,
						"switchType": "v",
						"valueText": "[[value]]%",
						"valueWidth": 48
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Branches générales",
							"column-1": "25"
						},
						{
							"category": "Modules",
							"column-1": "33"
						},
						{
							"category": "Projets",
							"column-1": "13"
						},
						{
							"category": "Stage",
							"column-1": "12"
						},
						{
							"category": "Diplôme",
							"column-1": "9"
						},
						{
							"category": "Travail autonome",
							"column-1": "8"
						}
					]
				}
			);