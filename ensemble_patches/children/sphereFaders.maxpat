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
		"rect" : [ 67.0, 342.0, 928.0, 686.0 ],
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
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-67",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 92.133286645015119, 123.09095080693578, 76.0, 22.0 ],
					"text" : "route 1 2 3 4"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 91.90827440967189, 96.733312805493824, 103.0, 22.0 ],
					"text" : "join 3 @triggers 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 79.133286645015119, 156.09095080693578, 32.0, 22.0 ],
					"text" : "gate"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "int", "int" ],
					"patching_rect" : [ 91.90827440967189, 69.048313167726519, 40.0, 22.0 ],
					"text" : "ctlin"
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-441",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 276.674989230930805, 430.066741744676619, 87.0, 28.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 226.138076381669407, 105.128752465590196, 47.0, 28.0 ],
					"text" : "λ",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-444",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 96.941599088410612, 430.066741744676619, 58.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-445",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 36.375006981194019, 430.066741744676619, 55.0, 22.0 ],
					"text" : "dialCC 3"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"elementcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"id" : "obj-446",
					"knobcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"knobshape" : 1,
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 36.375006981194019, 400.133403976757791, 412.0, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 41.569038190834704, 105.128752465590196, 414.329751428748978, 29.037914534409765 ]
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-256",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 276.674989230930805, 356.066741744676619, 87.0, 28.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 226.138076381669407, 72.128752465590196, 47.0, 28.0 ],
					"text" : "Φ",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-255",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 276.674989230930805, 281.666740814844161, 87.0, 28.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 226.138076381669407, 39.499985730195249, 47.0, 28.0 ],
					"text" : "θ",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-247",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 96.941599088410612, 356.066741744676619, 58.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-244",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 96.941599088410612, 287.666740814844161, 58.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-219",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 36.375006981194019, 356.066741744676619, 55.0, 22.0 ],
					"text" : "dialCC 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-218",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 36.375006981194019, 287.666740814844161, 55.0, 22.0 ],
					"text" : "dialCC 1"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"elementcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"id" : "obj-20",
					"knobcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"knobshape" : 1,
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 36.375006981194019, 326.133403976757791, 412.0, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 41.569038190834704, 72.128752465590196, 414.329751428748978, 29.037914534409765 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"elementcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"id" : "obj-4",
					"knobcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"knobshape" : 1,
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 36.174989230930805, 256.133403976757791, 412.0, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 41.569038190834704, 39.499985730195249, 414.138076381669407, 29.037914534409708 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-64",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 559.0, 409.000037550925867, 33.0, 22.0 ],
					"text" : "front"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 559.0, 378.133403976757791, 66.0, 22.0 ],
					"text" : "route open"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-49",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 517.0, 84.233312805493824, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-50",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 517.0, 51.233312805493824, 86.0, 22.0 ],
					"text" : "r preset_mode"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-51",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 517.0, 174.999962449074133, 29.5, 22.0 ],
					"text" : "+ 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-52",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "int" ],
					"patching_rect" : [ 517.0, 141.0, 29.5, 22.0 ],
					"text" : "t b i"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 649.319003482659809, 206.0, 25.0, 22.0 ],
					"text" : "iter"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-54",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 632.319003482659809, 242.633369644482741, 42.0, 22.0 ],
					"text" : "gate 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 502.5, 292.133369644482741, 121.0, 22.0 ],
					"text" : "script sendtoback $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-56",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 637.270787759373661, 292.133369644482741, 118.0, 22.0 ],
					"text" : "script bringtofront $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-57",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 585.319003482659809, 167.0, 89.0, 22.0 ],
					"text" : "route attributes"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-58",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 599.319003482659809, 91.0, 75.0, 22.0 ],
					"text" : "getattributes"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-59",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 559.0, 342.266739288965482, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 11.934730999999999,
					"id" : "obj-60",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 502.5, 446.633369644482741, 67.0, 22.0 ],
					"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
					"text" : "thispatcher"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-38",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 20.770787759373775, 528.999996781349182, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 91.90827440967189, 11.0, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 91.90827440967189, 39.233312805493824, 56.0, 22.0 ],
					"text" : "v midiin1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-217",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 16.770787759373775, 69.048313167726519, 61.0, 22.0 ],
					"text" : "r ctrll_tggl"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-257",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 155.050006662805856, 39.233312805493824, 60.0, 22.0 ],
					"text" : "r indevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 618.319003482659809, 126.233312805493824, 56.0, 22.0 ],
					"restore" : 					{
						"CCinput[1]" : [ "1" ],
						"CCinput[2]" : [ "2" ],
						"CCinput[3]" : [ "3" ]
					}
,
					"text" : "autopattr",
					"varname" : "u951001353"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 79.133286645015119, 213.866681615511652, 115.416720017790738, 22.0 ],
					"text" : "route 1 2 3"
				}

			}
, 			{
				"box" : 				{
					"align" : 1,
					"arrow" : 0,
					"bgcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bgfillcolor_color1" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
					"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
					"bgfillcolor_proportion" : 0.5,
					"bgfillcolor_type" : "color",
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 11.0,
					"id" : "obj-48",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 104.784300211593319, 184.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 129.166671435038381, 43.518942997400188, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[1]"
				}

			}
, 			{
				"box" : 				{
					"align" : 1,
					"arrow" : 0,
					"bgcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bgfillcolor_color1" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
					"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
					"bgfillcolor_proportion" : 0.5,
					"bgfillcolor_type" : "color",
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 11.0,
					"id" : "obj-77",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 140.387506503611803, 184.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 129.166671435038381, 76.147709732795136, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[2]"
				}

			}
, 			{
				"box" : 				{
					"align" : 1,
					"arrow" : 0,
					"bgcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bgfillcolor_color1" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
					"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
					"bgfillcolor_proportion" : 0.5,
					"bgfillcolor_type" : "color",
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 11.0,
					"id" : "obj-76",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 170.550006662805856, 184.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 129.166671435038381, 109.147709732795136, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[3]"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-219", 0 ],
					"midpoints" : [ 45.875006981194019, 349.466749588647872, 45.875006981194019, 349.466749588647872 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-217", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 45.875006981194019, 312.0, 21.0, 312.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-218", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 45.875006981194019, 381.0, 21.0, 381.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-219", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"midpoints" : [ 120.772193317612022, 243.0, 21.0, 243.0, 21.0, 321.0, 45.875006981194019, 321.0 ],
					"source" : [ "obj-23", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"midpoints" : [ 88.633286645015119, 243.0, 45.674989230930805, 243.0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-446", 0 ],
					"midpoints" : [ 152.911099990208925, 243.0, 21.0, 243.0, 21.0, 396.0, 45.875006981194019, 396.0 ],
					"source" : [ "obj-23", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-218", 1 ],
					"midpoints" : [ 106.441599088410612, 310.466749588647872, 92.40420147155703, 310.466749588647872, 92.40420147155703, 283.466749588647872, 81.875006981194019, 283.466749588647872 ],
					"source" : [ "obj-244", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-219", 1 ],
					"midpoints" : [ 106.441599088410612, 379.466749588647872, 92.40420147155703, 379.466749588647872, 92.40420147155703, 352.466749588647872, 81.875006981194019, 352.466749588647872 ],
					"source" : [ "obj-247", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-257", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-57", 0 ],
					"source" : [ "obj-3", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-218", 0 ],
					"midpoints" : [ 45.674989230930805, 277.466749588647872, 45.875006981194019, 277.466749588647872 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-445", 1 ],
					"midpoints" : [ 106.441599088410612, 453.466749588647872, 92.40420147155703, 453.466749588647872, 92.40420147155703, 426.466749588647872, 81.875006981194019, 426.466749588647872 ],
					"source" : [ "obj-444", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 45.875006981194019, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-445", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-445", 0 ],
					"midpoints" : [ 45.875006981194019, 423.466749588647872, 45.875006981194019, 423.466749588647872 ],
					"source" : [ "obj-446", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 1 ],
					"source" : [ "obj-48", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"midpoints" : [ 526.5, 109.0, 526.5, 109.0 ],
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 0 ],
					"midpoints" : [ 101.40827440967189, 120.733312805493824, 101.633286645015119, 120.733312805493824 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"midpoints" : [ 526.5, 76.0, 526.5, 76.0 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 0 ],
					"midpoints" : [ 526.5, 229.0, 641.819003482659809, 229.0 ],
					"source" : [ "obj-51", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-51", 0 ],
					"midpoints" : [ 537.0, 166.0, 526.5, 166.0 ],
					"source" : [ "obj-52", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"midpoints" : [ 526.5, 166.0, 571.0, 166.0, 571.0, 85.0, 608.819003482659809, 85.0 ],
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 1 ],
					"midpoints" : [ 658.819003482659809, 235.0, 664.819003482659809, 235.0 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"midpoints" : [ 641.819003482659809, 277.0, 512.0, 277.0 ],
					"source" : [ "obj-54", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"midpoints" : [ 664.819003482659809, 277.0, 646.770787759373661, 277.0 ],
					"source" : [ "obj-54", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 512.0, 317.0, 512.0, 317.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 646.770787759373661, 326.0, 512.0, 326.0 ],
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"midpoints" : [ 594.819003482659809, 202.0, 658.819003482659809, 202.0 ],
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"midpoints" : [ 568.5, 369.0, 568.5, 369.0 ],
					"source" : [ "obj-59", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 615.5, 441.0, 512.0, 441.0 ],
					"source" : [ "obj-62", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 0 ],
					"midpoints" : [ 568.5, 402.0, 568.5, 402.0 ],
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 568.5, 432.0, 512.0, 432.0 ],
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 1 ],
					"source" : [ "obj-67", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 1 ],
					"source" : [ "obj-67", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 3 ],
					"source" : [ "obj-76", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 2 ],
					"source" : [ "obj-77", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 122.40827440967189, 93.733312805493824, 101.40827440967189, 93.733312805493824 ],
					"source" : [ "obj-9", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"midpoints" : [ 111.90827440967189, 93.733312805493824, 143.40827440967189, 93.733312805493824 ],
					"source" : [ "obj-9", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 2 ],
					"midpoints" : [ 101.40827440967189, 93.733312805493824, 185.40827440967189, 93.733312805493824 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ]
	}

}
