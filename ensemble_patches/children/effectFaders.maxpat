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
		"rect" : [ 534.0, 188.0, 928.0, 581.0 ],
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
					"id" : "obj-64",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 636.0, 431.000037550925867, 33.0, 22.0 ],
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
					"patching_rect" : [ 636.0, 400.133403976757791, 66.0, 22.0 ],
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
					"patching_rect" : [ 594.0, 106.233312805493824, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-50",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 594.0, 73.233312805493824, 86.0, 22.0 ],
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
					"patching_rect" : [ 594.0, 196.999962449074133, 29.5, 22.0 ],
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
					"patching_rect" : [ 594.0, 163.0, 29.5, 22.0 ],
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
					"patching_rect" : [ 726.319003482659809, 228.0, 25.0, 22.0 ],
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
					"patching_rect" : [ 709.319003482659809, 264.633369644482741, 42.0, 22.0 ],
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
					"patching_rect" : [ 579.5, 314.133369644482741, 121.0, 22.0 ],
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
					"patching_rect" : [ 714.270787759373661, 314.133369644482741, 118.0, 22.0 ],
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
					"patching_rect" : [ 662.319003482659809, 189.0, 89.0, 22.0 ],
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
					"patching_rect" : [ 676.319003482659809, 113.0, 75.0, 22.0 ],
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
					"patching_rect" : [ 636.0, 364.266739288965482, 25.0, 25.0 ]
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
					"patching_rect" : [ 579.5, 468.633369644482741, 67.0, 22.0 ],
					"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
					"text" : "thispatcher"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-8",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 484.698214899748393, 410.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 579.160412237668879, 164.006233686581425, 50.0, 21.0 ],
					"text" : "locut",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-11",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 404.710714422166177, 410.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 491.144922898408367, 164.006233686581425, 67.0, 21.0 ],
					"text" : "hicut",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-12",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 327.123219970613548, 410.633369644482741, 37.0, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 419.460412237668947, 164.006233686581425, 49.0, 21.0 ],
					"text" : "pan",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-13",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 482.469002659122168, 258.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 236.774568067694133, 163.323961757568725, 58.0, 21.0 ],
					"text" : "locut",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-15",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 400.832514474565471, 265.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 157.274568067694133, 164.006233686581425, 55.0, 21.0 ],
					"text" : "hicut",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-19",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 318.856500589599079, 265.633369644482741, 37.0, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 81.139587762330962, 164.006233686581425, 49.0, 21.0 ],
					"text" : "pan",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 460.09822092577798, 452.133366425831923, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 437.698214899748393, 479.133366425831923, 61.0, 22.0 ],
					"text" : "dialCC 37"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-22",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 442.698214899748393, 408.133366425831923, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 568.0, 138.345821448912375, 72.320824475337986, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-24",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 380.110720448195764, 452.133366425831923, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-25",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 357.710714422166177, 479.133366425831923, 61.0, 22.0 ],
					"text" : "dialCC 36"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-26",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 362.710714422166177, 408.133366425831923, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 488.484510660739375, 138.345821448912375, 72.320824475337943, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 300.123219970613548, 452.133366425831923, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 277.723213944583961, 479.133366425831923, 61.0, 22.0 ],
					"text" : "dialCC 35"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-30",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 282.723213944583961, 408.133366425831923, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 407.799999999999955, 138.345821448912375, 72.320824475337986, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-31",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 457.869008685151755, 300.133369644482741, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-32",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 440.469002659122168, 328.133369644482741, 61.0, 22.0 ],
					"text" : "dialCC 20"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-33",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 440.469002659122168, 256.133369644482741, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 230.61415583002514, 138.345821448912375, 72.320824475337986, 70.956280617312757 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-34",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 377.881508207569539, 300.133369644482741, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 360.481502181539952, 328.133369644482741, 61.0, 22.0 ],
					"text" : "dialCC 19"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-36",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 360.481502181539952, 256.133369644482741, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 149.61415583002514, 138.345821448912375, 72.320824475337986, 70.956280617312757 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 297.894007729987322, 300.133369644482741, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 280.494001703957736, 328.133369644482741, 61.0, 22.0 ],
					"text" : "dialCC 18"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-40",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 280.494001703957736, 256.133369644482741, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 69.479175524661969, 138.345821448912375, 72.320824475337986, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-18",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 241.975000955164433, 410.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 579.160412237668879, 83.006233686581425, 50.0, 21.0 ],
					"text" : "crush",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-17",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 161.987500477582216, 410.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 491.144922898408367, 83.006233686581425, 67.0, 21.0 ],
					"text" : "delay",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-16",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 84.400006026029587, 410.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 419.460412237668947, 83.006233686581425, 49.0, 21.0 ],
					"text" : "reverb",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-7",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 239.745788714538207, 258.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 236.774568067694133, 82.323961757568725, 58.0, 21.0 ],
					"text" : "crush",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-6",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 158.10930052998151, 265.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 157.274568067694133, 83.006233686581425, 55.0, 21.0 ],
					"text" : "delay",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"id" : "obj-5",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 76.133286645015119, 265.633369644482741, 37.0, 35.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 81.139587762330962, 83.006233686581425, 49.0, 21.0 ],
					"text" : "reverb",
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1
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
					"patching_rect" : [ 130.620787122597335, 11.0, 58.0, 22.0 ],
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
					"patching_rect" : [ 130.620787122597335, 39.233312805493824, 56.0, 22.0 ],
					"text" : "v midiin1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-289",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 130.620787122597335, 102.733312805493824, 103.0, 22.0 ],
					"text" : "join 2 @triggers 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-216",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 76.133286645015119, 121.0, 32.0, 22.0 ],
					"text" : "gate"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-217",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 16.770787759373775, 73.233312805493824, 61.0, 22.0 ],
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
					"patching_rect" : [ 257.770787759373775, 39.233312805493824, 60.0, 22.0 ],
					"text" : "r indevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-259",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "int", "int" ],
					"patching_rect" : [ 130.620787122597335, 69.999962449074133, 40.0, 22.0 ],
					"text" : "ctlin"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 695.319003482659809, 148.233312805493824, 56.0, 22.0 ],
					"restore" : 					{
						"CCinput[10]" : [ "34" ],
						"CCinput[11]" : [ "33" ],
						"CCinput[12]" : [ "32" ],
						"CCinput[1]" : [ "15" ],
						"CCinput[2]" : [ "16" ],
						"CCinput[3]" : [ "17" ],
						"CCinput[4]" : [ "18" ],
						"CCinput[5]" : [ "19" ],
						"CCinput[6]" : [ "20" ],
						"CCinput[7]" : [ "37" ],
						"CCinput[8]" : [ "36" ],
						"CCinput[9]" : [ "35" ]
					}
,
					"text" : "autopattr",
					"varname" : "u951001353"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-417",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 217.375006981194019, 452.133366425831923, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-418",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 194.975000955164433, 479.133366425831923, 61.0, 22.0 ],
					"text" : "dialCC 34"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-419",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 199.975000955164433, 408.133366425831923, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 568.0, 57.345821448912375, 72.320824475337986, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-420",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 137.387506503611803, 452.133366425831923, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-421",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 114.987500477582216, 479.133366425831923, 61.0, 22.0 ],
					"text" : "dialCC 33"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-422",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 119.987500477582216, 408.133366425831923, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 488.484510660739375, 57.345821448912375, 72.320824475337943, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-423",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 57.400006026029587, 452.133366425831923, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-424",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 35.0, 479.133366425831923, 61.0, 22.0 ],
					"text" : "dialCC 32"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-425",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 40.0, 408.133366425831923, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 407.799999999999955, 57.345821448912375, 72.320824475337986, 72.3208244753381 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-360",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 215.145794740567794, 300.133369644482741, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-361",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 197.745788714538207, 328.133369644482741, 61.0, 22.0 ],
					"text" : "dialCC 17"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-362",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 197.745788714538207, 256.133369644482741, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 230.61415583002514, 57.345821448912375, 72.320824475337986, 70.956280617312757 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-357",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 135.158294262985578, 300.133369644482741, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-358",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 117.758288236955991, 328.133369644482741, 61.0, 22.0 ],
					"text" : "dialCC 16"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-359",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 117.758288236955991, 256.133369644482741, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 149.61415583002514, 57.345821448912375, 72.320824475337986, 70.956280617312757 ],
					"thickness" : 79.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "newobj",
					"numinlets" : 13,
					"numoutlets" : 13,
					"outlettype" : [ "", "", "", "", "", "", "", "", "", "", "", "", "" ],
					"patching_rect" : [ 76.133286645015119, 174.866681615511652, 386.812162798938459, 22.0 ],
					"text" : "route 15 16 17 18 19 20 32 33 34 35 36 37"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"items" : [ "CC", 0, ",", "CC", 1, ",", "CC", 2, ",", "CC", 3, ",", "CC", 4, ",", "CC", 5, ",", "CC", 6, ",", "CC", 7, ",", "CC", 8, ",", "CC", 9, ",", "CC", 10, ",", "CC", 11, ",", "CC", 12, ",", "CC", 13, ",", "CC", 14, ",", "CC", 15, ",", "CC", 16, ",", "CC", 17, ",", "CC", 18, ",", "CC", 19, ",", "CC", 20, ",", "CC", 21, ",", "CC", 22, ",", "CC", 23, ",", "CC", 24, ",", "CC", 25, ",", "CC", 26, ",", "CC", 27, ",", "CC", 28, ",", "CC", 29, ",", "CC", 30, ",", "CC", 31, ",", "CC", 32, ",", "CC", 33, ",", "CC", 34, ",", "CC", 35, ",", "CC", 36, ",", "CC", 37, ",", "CC", 38, ",", "CC", 39, ",", "CC", 40, ",", "CC", 41, ",", "CC", 42, ",", "CC", 43, ",", "CC", 44, ",", "CC", 45, ",", "CC", 46, ",", "CC", 47, ",", "CC", 48, ",", "CC", 49, ",", "CC", 50 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 55.170793785403362, 300.133369644482741, 64.0, 22.0 ],
					"pattrmode" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 37.770787759373775, 328.133369644482741, 61.0, 22.0 ],
					"text" : "dialCC 15"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"degrees" : 268,
					"id" : "obj-14",
					"maxclass" : "dial",
					"needlecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 37.770787759373775, 256.133369644482741, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 69.479175524661969, 57.345821448912375, 72.320824475337986, 72.3208244753381 ],
					"thickness" : 79.0
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
					"id" : "obj-44",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 353.98892039579647, 141.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 589.660412237668879, 106.006233686581425, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[10]"
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
					"id" : "obj-45",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 323.826420236602416, 141.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 510.144922898408367, 106.006233686581425, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[11]"
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
					"id" : "obj-46",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 288.223213944583904, 141.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 429.460412237668947, 106.006233686581425, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[12]"
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
					"patching_rect" : [ 101.784300211593319, 145.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 91.139587762330962, 106.006233686581425, 29.0, 21.0 ],
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
					"patching_rect" : [ 137.387506503611803, 145.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 171.274568067694133, 105.006233686581425, 29.0, 21.0 ],
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
					"patching_rect" : [ 167.550006662805856, 145.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 252.274568067694133, 105.006233686581425, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[3]"
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
					"id" : "obj-85",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 197.712506821999881, 145.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 91.139587762330962, 187.006233686581425, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[4]"
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
					"id" : "obj-83",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 227.875006981193991, 145.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 171.274568067694133, 186.006233686581425, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[5]"
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
					"id" : "obj-81",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 258.037507140388129, 145.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 252.037507140388129, 186.0, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[6]"
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
					"id" : "obj-41",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 444.476420873378743, 141.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 589.660412237668879, 187.0, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[7]"
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
					"id" : "obj-42",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 414.313920714184633, 141.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 510.313920714184633, 187.0, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[8]"
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
					"id" : "obj-43",
					"items" : [ 1, ",", 2, ",", 3, ",", 4, ",", 5, ",", 6, ",", 7, ",", 8, ",", 9, ",", 10, ",", 11, ",", 12, ",", 13, ",", 14, ",", 15, ",", 16, ",", 17, ",", 18, ",", 19, ",", 20, ",", 21, ",", 22, ",", 23, ",", 24, ",", 25, ",", 26, ",", 27, ",", 28, ",", 29, ",", 30, ",", 31, ",", 32, ",", 33, ",", 34, ",", 35, ",", 36, ",", 37, ",", 38, ",", 39, ",", 40, ",", 41, ",", 42, ",", 43, ",", 44, ",", 45, ",", 46, ",", 47, ",", 48, ",", 49, ",", 50, ",", 51, ",", 52, ",", 53, ",", 54, ",", 55, ",", 56, ",", 57, ",", 58, ",", 59, ",", 60, ",", 61, ",", 62, ",", 63, ",", 64, ",", 65, ",", 66, ",", 67, ",", 68, ",", 69, ",", 70, ",", 71, ",", 72, ",", 73, ",", 74, ",", 75, ",", 76, ",", 77, ",", 78, ",", 79, ",", 80, ",", 81, ",", 82, ",", 83, ",", 84, ",", 85, ",", 86, ",", 87, ",", 88, ",", 89, ",", 90, ",", 91, ",", 92, ",", 93, ",", 94, ",", 95, ",", 96, ",", 97, ",", 98, ",", 99, ",", 100, ",", 101, ",", 102, ",", 103, ",", 104, ",", 105, ",", 106, ",", 107, ",", 108, ",", 109, ",", 110, ",", 111, ",", 112, ",", 113, ",", 114, ",", 115, ",", 116, ",", 117, ",", 118, ",", 119, ",", 120, ",", 121, ",", 122, ",", 123, ",", 124, ",", 125, ",", 126, ",", 127 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 384.151420554990523, 141.0, 29.0, 21.0 ],
					"pattrmode" : 1,
					"presentation" : 1,
					"presentation_rect" : [ 429.460412237668947, 187.0, 29.0, 21.0 ],
					"textcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"textjustification" : 1,
					"varname" : "CCinput[9]"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-259", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 47.270787759373775, 393.0, 21.0, 393.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"midpoints" : [ 47.270787759373775, 296.400056838988917, 47.270787759373775, 296.400056838988917 ],
					"source" : [ "obj-14", 0 ]
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
					"destination" : [ "obj-21", 1 ],
					"midpoints" : [ 469.59822092577798, 475.80003923177685, 489.198214899748393, 475.80003923177685 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 447.198214899748393, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"source" : [ "obj-216", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-216", 0 ],
					"midpoints" : [ 26.270787759373775, 105.000004649162292, 82.745805383970378, 105.000004649162292, 82.745805383970378, 87.000004649162292, 85.633286645015119, 87.000004649162292 ],
					"source" : [ "obj-217", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"midpoints" : [ 452.198214899748393, 448.400053620338099, 447.198214899748393, 448.400053620338099 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 85.633286645015119, 198.0, 47.270787759373775, 198.0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 0 ],
					"midpoints" : [ 116.284300211593319, 252.0, 127.258288236955991, 252.0 ],
					"source" : [ "obj-23", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-362", 0 ],
					"midpoints" : [ 146.935313778171519, 243.0, 207.245788714538207, 243.0 ],
					"source" : [ "obj-23", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 1 ],
					"midpoints" : [ 389.610720448195764, 475.80003923177685, 409.210714422166177, 475.80003923177685 ],
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 367.210714422166177, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-259", 0 ],
					"source" : [ "obj-257", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-289", 0 ],
					"midpoints" : [ 150.620787122597335, 94.733312805493824, 140.120787122597335, 94.733312805493824 ],
					"source" : [ "obj-259", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-289", 1 ],
					"midpoints" : [ 140.120787122597335, 94.733312805493824, 224.120787122597335, 94.733312805493824 ],
					"source" : [ "obj-259", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"midpoints" : [ 372.210714422166177, 448.400053620338099, 367.210714422166177, 448.400053620338099 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 1 ],
					"midpoints" : [ 309.623219970613548, 475.80003923177685, 329.223213944583961, 475.80003923177685 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-216", 1 ],
					"source" : [ "obj-289", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 287.223213944583961, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-29", 0 ]
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
					"destination" : [ "obj-29", 0 ],
					"midpoints" : [ 292.223213944583961, 448.400053620338099, 287.223213944583961, 448.400053620338099 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 1 ],
					"midpoints" : [ 467.369008685151755, 323.800042450427668, 491.969002659122168, 323.800042450427668 ],
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 449.969002659122168, 393.0, 21.0, 393.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"midpoints" : [ 449.969002659122168, 296.400056838988917, 449.969002659122168, 296.400056838988917 ],
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 1 ],
					"midpoints" : [ 387.381508207569539, 323.800042450427668, 411.981502181539952, 323.800042450427668 ],
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 369.981502181539952, 393.0, 21.0, 393.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-358", 1 ],
					"midpoints" : [ 144.658294262985578, 323.800042450427668, 169.258288236955991, 323.800042450427668 ],
					"source" : [ "obj-357", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 127.258288236955991, 393.0, 21.0, 393.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-358", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-358", 0 ],
					"midpoints" : [ 127.258288236955991, 296.400056838988917, 127.258288236955991, 296.400056838988917 ],
					"source" : [ "obj-359", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"midpoints" : [ 369.981502181539952, 296.400056838988917, 369.981502181539952, 296.400056838988917 ],
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-361", 1 ],
					"midpoints" : [ 224.645794740567794, 323.800042450427668, 249.245788714538207, 323.800042450427668 ],
					"source" : [ "obj-360", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 207.245788714538207, 393.0, 21.0, 393.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-361", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-361", 0 ],
					"midpoints" : [ 207.245788714538207, 296.400056838988917, 207.245788714538207, 296.400056838988917 ],
					"source" : [ "obj-362", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 1 ],
					"midpoints" : [ 307.394007729987322, 323.800042450427668, 331.994001703957736, 323.800042450427668 ],
					"source" : [ "obj-37", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 289.994001703957736, 393.0, 21.0, 393.0, 21.0, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 289.994001703957736, 296.400056838988917, 289.994001703957736, 296.400056838988917 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 12 ],
					"source" : [ "obj-41", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-418", 1 ],
					"midpoints" : [ 226.875006981194019, 475.80003923177685, 246.475000955164433, 475.80003923177685 ],
					"source" : [ "obj-417", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 204.475000955164433, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-418", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-418", 0 ],
					"midpoints" : [ 209.475000955164433, 448.400053620338099, 204.475000955164433, 448.400053620338099 ],
					"source" : [ "obj-419", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 11 ],
					"source" : [ "obj-42", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-421", 1 ],
					"midpoints" : [ 146.887506503611803, 475.80003923177685, 166.487500477582216, 475.80003923177685 ],
					"source" : [ "obj-420", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 124.487500477582216, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-421", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-421", 0 ],
					"midpoints" : [ 129.487500477582216, 448.400053620338099, 124.487500477582216, 448.400053620338099 ],
					"source" : [ "obj-422", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-424", 1 ],
					"midpoints" : [ 66.900006026029587, 475.80003923177685, 86.5, 475.80003923177685 ],
					"source" : [ "obj-423", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"midpoints" : [ 44.5, 513.0, 30.270787759373775, 513.0 ],
					"source" : [ "obj-424", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-424", 0 ],
					"midpoints" : [ 49.5, 448.400053620338099, 44.5, 448.400053620338099 ],
					"source" : [ "obj-425", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 10 ],
					"source" : [ "obj-43", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 9 ],
					"source" : [ "obj-44", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 8 ],
					"source" : [ "obj-45", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 7 ],
					"source" : [ "obj-46", 1 ]
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
					"midpoints" : [ 603.5, 131.0, 603.5, 131.0 ],
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"midpoints" : [ 603.5, 98.0, 603.5, 98.0 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 0 ],
					"midpoints" : [ 603.5, 251.0, 718.819003482659809, 251.0 ],
					"source" : [ "obj-51", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-51", 0 ],
					"midpoints" : [ 614.0, 188.0, 603.5, 188.0 ],
					"source" : [ "obj-52", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"midpoints" : [ 603.5, 188.0, 648.0, 188.0, 648.0, 107.0, 685.819003482659809, 107.0 ],
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 1 ],
					"midpoints" : [ 735.819003482659809, 257.0, 741.819003482659809, 257.0 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"midpoints" : [ 718.819003482659809, 299.0, 589.0, 299.0 ],
					"source" : [ "obj-54", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"midpoints" : [ 741.819003482659809, 299.0, 723.770787759373661, 299.0 ],
					"source" : [ "obj-54", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 589.0, 339.0, 589.0, 339.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 723.770787759373661, 348.0, 589.0, 348.0 ],
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"midpoints" : [ 671.819003482659809, 224.0, 735.819003482659809, 224.0 ],
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
					"midpoints" : [ 645.5, 391.0, 645.5, 391.0 ],
					"source" : [ "obj-59", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 692.5, 463.0, 589.0, 463.0 ],
					"source" : [ "obj-62", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 0 ],
					"midpoints" : [ 645.5, 424.0, 645.5, 424.0 ],
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"midpoints" : [ 645.5, 454.0, 589.0, 454.0 ],
					"source" : [ "obj-64", 0 ]
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
					"destination" : [ "obj-23", 6 ],
					"source" : [ "obj-81", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 5 ],
					"source" : [ "obj-83", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 4 ],
					"source" : [ "obj-85", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 64.670793785403362, 323.800042450427668, 89.270787759373775, 323.800042450427668 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ]
	}

}
