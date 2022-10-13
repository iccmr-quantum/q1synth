{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 3,
			"revision" : 2,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 83.0, 181.0, 1107.0, 733.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 3,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-499",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 2,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 619.0, 340.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 38.0, 30.0, 30.0 ],
									"varname" : "osc_send_inlet"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-75",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 90.0, 137.0, 22.0 ],
									"text" : "udpsend 11.1.2.2 57122",
									"varname" : "udpsend0"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-76",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 120.0, 137.0, 22.0 ],
									"text" : "udpsend 11.1.2.3 57122",
									"varname" : "udpsend1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-77",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 150.0, 137.0, 22.0 ],
									"text" : "udpsend 11.1.2.4 57122",
									"varname" : "udpsend2"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-75", 0 ],
									"order" : 2,
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-76", 0 ],
									"order" : 1,
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"order" : 0,
									"source" : [ "obj-4", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 406.0, 363.0, 77.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p OSC_send",
					"varname" : "OSC_SEND"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-362",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 746.0, 635.0, 67.0, 22.0 ],
					"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
					"text" : "thispatcher"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Consolas",
					"id" : "obj-12",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 852.0, 363.0, 49.0, 21.0 ],
					"text" : "debug"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 827.20001232624054, 545.600008130073547, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 832.24999988079071, 508.000007569789886, 41.0, 22.0 ],
					"text" : "sel 13"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 4,
					"outlettype" : [ "int", "int", "int", "int" ],
					"patching_rect" : [ 832.24999988079071, 468.0, 50.5, 22.0 ],
					"text" : "key"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 935.0, 406.0, 137.0, 22.0 ],
					"text" : "udpsend 11.1.2.4 57122"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 935.0, 382.0, 137.0, 22.0 ],
					"text" : "udpsend 11.1.2.3 57122"
				}

			}
, 			{
				"box" : 				{
					"autofit" : 1,
					"forceaspect" : 1,
					"id" : "obj-308",
					"maxclass" : "fpic",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "jit_matrix" ],
					"patching_rect" : [ 815.5, 107.0, 100.0, 71.764705882352942 ],
					"pic" : "C:/Users/QuTune/Desktop/qutune_logo.png"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 16.0,
					"id" : "obj-305",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 596.999984443187714, 120.882352941176464, 211.0, 44.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 88.0, 647.000000000000114, 211.0, 44.0 ],
					"text" : "QuTune \niccmr-quantum.github.io",
					"textcolor" : [ 0.462745098039216, 0.666666666666667, 0.674509803921569, 1.0 ],
					"textjustification" : 2
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 16.0,
					"id" : "obj-306",
					"linecount" : 6,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 687.999984443187714, 190.0, 255.0, 119.0 ],
					"text" : "Q1Synth Ensemble Parent\nCombining multiple Q1Synths \ninto a multi-qubit circuit\nusing OSC protocol.\n\n(09-2022)",
					"textcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 301.0, 363.0, 71.0, 22.0 ],
					"text" : "print oscout"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-48096",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 704.0, 363.0, 142.0, 22.0 ],
					"text" : "udpsend localhost 57123",
					"varname" : "udpsendlocal"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-48094",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 265.0, 63.5, 84.0, 22.0 ],
					"text" : "print oscdump"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"fontsize" : 24.0,
					"id" : "obj-48093",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 31.5, 86.0, 100.03515625, 35.59765625 ],
					"presentation" : 1,
					"presentation_rect" : [ 738.625007629394531, 673.402343750000114, 109.374992370605469, 35.59765625 ],
					"text" : "Refresh",
					"textoncolor" : [ 0.462745098039216, 0.666666666666667, 0.674509803921569, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"fontlink" : 1,
					"fontsize" : 24.0,
					"id" : "obj-48092",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 31.5, 46.0, 109.374992370605469, 35.59765625 ],
					"presentation" : 1,
					"presentation_rect" : [ 738.625007629394531, 629.000000000000114, 109.374992370605469, 35.59765625 ],
					"text" : "Measure",
					"textoncolor" : [ 0.462745098039216, 0.666666666666667, 0.674509803921569, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 154.0, 107.0, 280.0, 22.0 ],
					"text" : "regexp /q1synth/(\\\\d+)/xyz @substitute /q1synth%1",
					"varname" : "OSC_Regexp"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Consolas",
					"fontsize" : 48.0,
					"id" : "obj-29",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 382.5, 26.5, 533.0, 63.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 292.5, 27.5, 533.0, 63.0 ],
					"text" : "Q1 Synth Ensemble",
					"textcolor" : [ 0.227450980392157, 0.52156862745098, 0.537254901960784, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1133",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 614.0, 363.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1131",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"patching_rect" : [ 574.0, 363.0, 31.0, 22.0 ],
					"text" : "t s b"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1130",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 643.5, 363.0, 41.0, 22.0 ],
					"text" : "set $1"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"bordercolor" : [ 0.188235294117647, 0.188235294117647, 0.188235294117647, 1.0 ],
					"fontsize" : 64.0,
					"id" : "obj-1128",
					"maxclass" : "textedit",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 614.0, 468.0, 162.0, 80.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 854.0, 629.000000000000114, 162.0, 80.0 ],
					"rounded" : 0.0,
					"text" : "011",
					"textcolor" : [ 0.227450980392157, 0.52156862745098, 0.537254901960784, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1109",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 935.0, 358.0, 137.0, 22.0 ],
					"text" : "udpsend 11.1.2.2 57122"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-422",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 20.0, 374.0, 29.5, 22.0 ],
					"text" : "4"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 24.5, 324.0, 29.5, 22.0 ],
					"text" : "3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 154.0, 63.5, 104.0, 22.0 ],
					"text" : "udpreceive 57120",
					"varname" : "OSC_Receive"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 90.5, 363.0, 127.0, 22.0 ],
					"text" : "loadmess darkmode 1"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"id" : "obj-30",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 70.0, 165.0, 22.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 653.625007629394531, 629.000000000000114, 80.0, 80.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 70.0, 280.0, 63.0, 22.0 ],
					"text" : "metro 150"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 102.0, 165.0, 22.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.149019607843137, 0.129411764705882, 0.16078431372549, 1.0 ],
					"id" : "obj-6",
					"maxclass" : "multislider",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 365.0, 440.0, 225.0, 283.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 568.0, 130.0, 446.0, 473.0 ],
					"setminmax" : [ -0.100000001490116, 1.100000023841858 ],
					"setstyle" : 1,
					"size" : 8
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "tags", 1 ], [ "int_tags", 0 ], [ "darkmode", 1 ], [ "scale", 0.666 ] ],
					"filename" : "och.qsphere",
					"id" : "obj-5",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 70.0, 440.0, 283.0, 283.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 84.0, 130.0, 471.0, 473.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 7,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 70.0, 324.0, 523.0, 22.0 ],
					"text" : "Ensemble_Circuit"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.850980392156863, 0.850980392156863, 0.850980392156863, 1.0 ],
					"id" : "obj-37",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 363.0, 438.0, 229.0, 287.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 566.0, 128.0, 450.0, 477.0 ],
					"proportion" : 0.5,
					"rounded" : 3
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.850980392156863, 0.850980392156863, 0.850980392156863, 1.0 ],
					"id" : "obj-39",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 68.0, 438.0, 288.0, 288.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 82.0, 128.0, 476.0, 478.0 ],
					"proportion" : 0.5,
					"rounded" : 3
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1035",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 154.0, 160.0, 435.0, 22.0 ],
					"text" : "route /q1synth0 /q1synth1 /q1synth2",
					"varname" : "osc_parser"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1036",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 154.0, 200.0, 100.0, 22.0 ],
					"text" : "unjoin 2",
					"varname" : "unpack0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1037",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 154.0, 240.0, 67.0, 22.0 ],
					"text" : "* 3.141593",
					"varname" : "mulaz0"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-1039",
					"maxclass" : "flonum",
					"maximum" : 3.14159265359,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 154.0, 280.0, 50.0, 22.0 ],
					"varname" : "az0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1040",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 238.0, 240.0, 67.0, 22.0 ],
					"text" : "* 6.283185",
					"varname" : "mulph0"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-1042",
					"maxclass" : "flonum",
					"maximum" : 6.28318530718,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 238.0, 280.0, 50.0, 22.0 ],
					"varname" : "ph0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1043",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 322.0, 200.0, 100.0, 22.0 ],
					"text" : "unjoin 2",
					"varname" : "unpack1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1044",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 322.0, 240.0, 67.0, 22.0 ],
					"text" : "* 3.141593",
					"varname" : "mulaz1"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-1046",
					"maxclass" : "flonum",
					"maximum" : 3.14159265359,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 322.0, 280.0, 50.0, 22.0 ],
					"varname" : "az1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1047",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 406.0, 240.0, 67.0, 22.0 ],
					"text" : "* 6.283185",
					"varname" : "mulph1"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-1049",
					"maxclass" : "flonum",
					"maximum" : 6.28318530718,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 406.0, 280.0, 50.0, 22.0 ],
					"varname" : "ph1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1050",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 490.0, 200.0, 100.0, 22.0 ],
					"text" : "unjoin 2",
					"varname" : "unpack2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1051",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 490.0, 240.0, 67.0, 22.0 ],
					"text" : "* 3.141593",
					"varname" : "mulaz2"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-1053",
					"maxclass" : "flonum",
					"maximum" : 3.14159265359,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 490.0, 280.0, 50.0, 22.0 ],
					"varname" : "az2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1054",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 574.0, 240.0, 67.0, 22.0 ],
					"text" : "* 6.283185",
					"varname" : "mulph2"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-1056",
					"maxclass" : "flonum",
					"maximum" : 6.28318530718,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 574.0, 280.0, 50.0, 22.0 ],
					"varname" : "ph2"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"order" : 1,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48094", 0 ],
					"midpoints" : [ 163.5, 87.0, 150.0, 87.0, 150.0, 48.0, 274.5, 48.0 ],
					"order" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1036", 0 ],
					"source" : [ "obj-1035", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1043", 0 ],
					"source" : [ "obj-1035", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1050", 0 ],
					"source" : [ "obj-1035", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1037", 0 ],
					"source" : [ "obj-1036", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1040", 0 ],
					"source" : [ "obj-1036", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1039", 0 ],
					"source" : [ "obj-1037", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"source" : [ "obj-1039", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1042", 0 ],
					"source" : [ "obj-1040", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 2 ],
					"source" : [ "obj-1042", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1044", 0 ],
					"source" : [ "obj-1043", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1047", 0 ],
					"source" : [ "obj-1043", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1046", 0 ],
					"source" : [ "obj-1044", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 3 ],
					"source" : [ "obj-1046", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1049", 0 ],
					"source" : [ "obj-1047", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 4 ],
					"source" : [ "obj-1049", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1051", 0 ],
					"source" : [ "obj-1050", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1054", 0 ],
					"source" : [ "obj-1050", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1053", 0 ],
					"source" : [ "obj-1051", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 5 ],
					"source" : [ "obj-1053", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1056", 0 ],
					"source" : [ "obj-1054", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 6 ],
					"source" : [ "obj-1056", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1128", 0 ],
					"midpoints" : [ 653.0, 388.0, 623.5, 388.0 ],
					"source" : [ "obj-1130", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1130", 0 ],
					"midpoints" : [ 583.5, 388.0, 609.0, 388.0, 609.0, 352.0, 653.0, 352.0 ],
					"source" : [ "obj-1131", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1133", 0 ],
					"midpoints" : [ 595.5, 388.0, 609.0, 388.0, 609.0, 358.0, 623.5, 358.0 ],
					"source" : [ "obj-1131", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48092", 0 ],
					"midpoints" : [ 836.70001232624054, 570.0, 786.0, 570.0, 786.0, 396.0, 684.0, 396.0, 684.0, 321.0, 651.0, 321.0, 651.0, 174.0, 591.0, 174.0, 591.0, 147.0, 18.0, 147.0, 18.0, 42.0, 41.0, 42.0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 100.0, 388.0, 79.5, 388.0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1035", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1131", 0 ],
					"source" : [ "obj-3", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"midpoints" : [ 415.5, 356.0, 310.5, 356.0 ],
					"order" : 2,
					"source" : [ "obj-3", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48096", 0 ],
					"order" : 0,
					"source" : [ "obj-3", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-499", 0 ],
					"order" : 1,
					"source" : [ "obj-3", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"midpoints" : [ 247.5, 379.0, 374.5, 379.0 ],
					"source" : [ "obj-3", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-422", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-48092", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-48093", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "Ensemble_Circuit.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/parent",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "ensemble_creator.js",
				"bootpath" : "~/q1synth/ensemble_patches/parent",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "och.microqiskit.mxe64",
				"type" : "mx64"
			}
, 			{
				"name" : "och.qsphere.js",
				"bootpath" : "D:/Users/1540 LITE/Documents/Max 8/Packages/The-QAC-Toolkit/jsui",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "osc_qasm.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/parent",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "q1synth_oscmsg.js",
				"bootpath" : "~/q1synth/ensemble_patches/parent",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"default_bgcolor" : [ 0.231372549019608, 0.258823529411765, 0.250980392156863, 1.0 ],
		"color" : [ 0.227450980392157, 0.52156862745098, 0.537254901960784, 1.0 ],
		"accentcolor" : [ 0.796078431372549, 0.796078431372549, 0.796078431372549, 1.0 ],
		"bgcolor" : [ 0.149019607843137, 0.129411764705882, 0.16078431372549, 1.0 ],
		"editing_bgcolor" : [ 0.443137254901961, 0.43921568627451, 0.43921568627451, 1.0 ],
		"bgfillcolor_type" : "gradient",
		"bgfillcolor_color1" : [ 0.270588235294118, 0.368627450980392, 0.368627450980392, 1.0 ],
		"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
		"bgfillcolor_color" : [ 0.270588235294118, 0.368627450980392, 0.368627450980392, 1.0 ]
	}

}
