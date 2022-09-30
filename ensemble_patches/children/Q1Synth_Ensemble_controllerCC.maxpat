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
		"rect" : [ -1.0, 50.0, 1506.0, 701.0 ],
		"bglocked" : 1,
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
					"angle" : 270.0,
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"bordercolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"id" : "obj-30",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 403.154080871492624, 1014.333349426587574, 46.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1273.000000000000455, 414.783318837483762, 127.0, 87.0 ],
					"proportion" : 0.5
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-26",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 82.319003482659809, 874.233312805493824, 103.0, 36.0 ],
					"text" : "store[1] store[2] store[3] store[4]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 43.0, 874.233312805493824, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-50",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 841.233312805493824, 86.0, 22.0 ],
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
					"patching_rect" : [ 43.0, 939.999962449074133, 29.5, 22.0 ],
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
					"patching_rect" : [ 43.0, 908.133323570092671, 29.5, 22.0 ],
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
					"patching_rect" : [ 99.319003482659809, 934.699979782104947, 25.0, 22.0 ],
					"text" : "iter"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 143.319003482659809, 934.699979782104947, 42.0, 22.0 ],
					"text" : "gate 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 25.5, 984.000000000000227, 121.0, 22.0 ],
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
					"patching_rect" : [ 160.270787759373661, 984.000000000000227, 118.0, 22.0 ],
					"text" : "script bringtofront $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 11.934730999999999,
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 25.5, 1024.500000000000227, 67.0, 22.0 ],
					"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
					"text" : "thispatcher"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 692.0, 915.133323570092671, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 692.0, 945.0, 189.0, 22.0 ],
					"text" : "pattrstorage q1synthMIDImapping"
				}

			}
, 			{
				"box" : 				{
					"active1" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"bgcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"bubblesize" : 40,
					"emptycolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"id" : "obj-5",
					"maxclass" : "preset",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "preset", "int", "preset", "int", "" ],
					"patching_rect" : [ 886.0, 933.333349426587574, 93.0, 95.0 ],
					"pattrstorage" : "q1synthMIDImapping",
					"presentation" : 1,
					"presentation_rect" : [ 1290.500000000000455, 308.13956748162434, 92.0, 92.0 ],
					"stored1" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-103",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 538.912494769940736, 473.399979352951277, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-99",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 225.733303656180738, 473.399979352951277, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-96",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 987.799926131963844, 270.533328493436102, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-94",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "playstopBangs.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 961.170730902503237, 306.266636947791199, 128.0, 128.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 590.904095236212243, 472.853114779027123, 495.0, 128.0 ],
					"varname" : "playstopBangs",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-93",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 191.200000107288361, 186.166652063528886, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-91",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "presetBangs.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 191.200000107288361, 216.866661826769587, 436.101314808995994, 250.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 25.0, 439.066629926364044, 473.101314808995994, 256.0 ],
					"varname" : "presetBangs",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-89",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 334.0, 702.0, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-87",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "sphereFaders.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 334.0, 732.166658202807184, 491.0, 169.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 11.0, 312.38956748162434, 491.0, 169.0 ],
					"varname" : "sphereFaders",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-86",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1007.783280899127362, 506.266633848349557, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-83",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "adsrFaders.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -48.0, -48.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 875.154085669666756, 531.266633848349557, 300.033290465672849, 108.599992156028748 ],
					"presentation" : 1,
					"presentation_rect" : [ 526.666671435038211, 575.56665106835726, 628.666671435038438, 99.733343954428506 ],
					"varname" : "adsrFaders",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-81",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 644.703245465594364, 256.199969470501287, 35.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 256.0, 65.366667966047885, 88.0, 22.0 ],
					"text" : "s preset_mode"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"bgoncolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-2",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 256.0, 5.666658202807184, 194.13671875, 29.076171875 ],
					"presentation" : 1,
					"presentation_rect" : [ 1236.500000000000455, 246.049990236759299, 194.13671875, 29.076171875 ],
					"text" : "Edit Input Mapping",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"texton" : "Edit Input Mapping",
					"textoncolor" : [ 0.850980392156863, 0.290196078431373, 0.470588235294118, 1.0 ],
					"usebgoncolor" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-57",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1342.513790937583963, 428.066629926364044, 85.0, 20.0 ],
					"text" : "CC 3 'Phase'"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-58",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1297.013790937583963, 478.066629926364044, 37.0, 22.0 ],
					"text" : "join 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-60",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1342.513790937583963, 465.066629926364044, 70.0, 22.0 ],
					"text" : "loadmess 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-63",
					"maxclass" : "dial",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1297.013790937583963, 432.066629926364044, 40.0, 40.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 16.0,
					"id" : "obj-54",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1345.013790937583963, 392.166620651881317, 22.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 251.138076381669407, 288.533318837483762, 17.0, 25.0 ],
					"text" : "λ",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"degrees" : 360,
					"id" : "obj-55",
					"maxclass" : "dial",
					"mode" : 1,
					"needlecolor" : [ 1.0, 0.0, 0.0, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1297.013790937583963, 384.666620651881317, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 222.138076381669407, 263.533318837483762, 75.0, 75.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-35",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "effectFaders.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -43.0, -40.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 538.912494769940736, 505.066629926364044, 315.000000000000057, 177.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 533.0, 312.38956748162434, 669.0, 184.0 ],
					"varname" : "effectFaders",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"bgfillcolor_color1" : [ 0.16078431372549, 0.16078431372549, 0.16078431372549, 1.0 ],
					"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
					"bgfillcolor_proportion" : 0.5,
					"bgfillcolor_type" : "gradient",
					"fontsize" : 20.0,
					"id" : "obj-25",
					"items" : [ "fm", ",", "granular", ",", "subtractive" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 776.929029783051647, 201.200007021427155, 100.0, 31.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1260.500000000000227, 196.999996185302848, 146.0, 31.0 ],
					"textcolor" : [ 0.290196078431373, 0.850980392156863, 0.670588235294118, 1.0 ],
					"varname" : "instrumentType"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-34",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "noteFaders.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -56.0, -24.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 225.733303656180738, 505.066629926364044, 285.32500031838822, 160.999999999999886 ],
					"presentation" : 1,
					"presentation_rect" : [ 546.249994610746626, 59.733311971028797, 627.0, 132.0 ],
					"varname" : "noteFaders",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-32",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 4,
					"outlettype" : [ "bang", "bang", "bang", "" ],
					"patching_rect" : [ 683.770787759373889, 210.200007021427155, 54.0, 22.0 ],
					"text" : "sel 0 1 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-24",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 881.125765485600823, 251.200007021427155, 79.0, 22.0 ],
					"text" : "offset -32 -18"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 785.948276622487356, 251.200007021427155, 86.0, 22.0 ],
					"text" : "offset -32 -178"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 690.770787759373889, 251.200007021427155, 86.0, 22.0 ],
					"text" : "offset -32 -337"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1102.0, 138.0, 53.0, 22.0 ],
					"text" : "v midin1"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-28",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "instrumentFaders.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ -32.0, -337.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 644.703245465594364, 307.533328493436102, 227.66755930494503, 127.333349426587233 ],
					"presentation" : 1,
					"presentation_rect" : [ 562.249994610746626, 183.622899891538395, 581.057142964431023, 149.766667590085945 ],
					"varname" : "instrumentFaders",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 30.0,
					"id" : "obj-468",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1036.124993018805753, 723.100003600120544, 385.0, 77.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 574.5, 28.333327194055073, 546.0, 42.0 ],
					"text" : "Q1Synth Ensemble MIDI Controller",
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
					"id" : "obj-463",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1105.050003066658974, 858.533311625321858, 123.899993866682053, 49.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 904.666671435038324, 572.38956748162434, 207.0, 28.0 ],
					"text" : "Mod/Filter Envelope",
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
					"id" : "obj-462",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1090.050003066658974, 843.533311625321858, 123.899993866682053, 49.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 597.166671435038324, 572.38956748162434, 150.0, 28.0 ],
					"text" : "Main Envelope",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-435",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 403.154080871492624, 945.000000000000227, 70.0, 22.0 ],
					"text" : "loadmess 1"
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontface" : 0,
					"fontname" : "Consolas",
					"fontsize" : 100.0,
					"id" : "obj-433",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1280.677488863113467, 836.033311625321744, 79.0, 124.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 816.0, 368.999996185302848, 63.0, 124.0 ],
					"text" : "|",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontface" : 0,
					"fontname" : "Consolas",
					"fontsize" : 100.0,
					"id" : "obj-434",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1280.677488863113467, 836.033311625321744, 79.0, 124.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 816.0, 268.999996185302848, 63.0, 124.0 ],
					"text" : "|",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontface" : 0,
					"fontname" : "Consolas",
					"fontsize" : 100.0,
					"id" : "obj-432",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1280.677488863113467, 836.033311625321744, 79.0, 124.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 816.0, 168.999996185302848, 63.0, 124.0 ],
					"text" : "|",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontface" : 0,
					"fontname" : "Consolas",
					"fontsize" : 100.0,
					"id" : "obj-431",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1280.677488863113467, 836.033311625321744, 79.0, 124.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 816.0, 68.999996185302848, 63.0, 124.0 ],
					"text" : "|",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-352",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 617.154080871492624, 945.000000000000227, 56.0, 22.0 ],
					"restore" : 					{
						"instrumentType" : [ 0 ]
					}
,
					"text" : "autopattr",
					"varname" : "u516006445"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-348",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 521.920690728972204, 945.000000000000227, 89.0, 22.0 ],
					"text" : "storagewindow"
				}

			}
, 			{
				"box" : 				{
					"autorestore" : "q1synthMIDImapping.json",
					"id" : "obj-318",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 403.154080871492624, 984.000000000000227, 270.0, 22.0 ],
					"saved_object_attributes" : 					{
						"client_rect" : [ 7, 64, 361, 192 ],
						"parameter_enable" : 0,
						"parameter_mappable" : 0,
						"storage_rect" : [ 583, 70, 1034, 593 ]
					}
,
					"text" : "pattrstorage q1synthMIDImapping @savemode 2",
					"varname" : "q1synthMIDImapping"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-289",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 474.270787759373604, 131.400004923343317, 103.0, 22.0 ],
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
					"patching_rect" : [ 460.574994929134903, 168.366655687491175, 32.0, 22.0 ],
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
					"patching_rect" : [ 409.495799994717061, 95.666654566923626, 61.0, 22.0 ],
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
					"patching_rect" : [ 474.270787759373604, 66.900004923343317, 60.0, 22.0 ],
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
					"patching_rect" : [ 474.270787759373604, 95.666654566923626, 40.0, 22.0 ],
					"text" : "ctlin"
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 48.0,
					"id" : "obj-309",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1372.901240940959724, 198.333312710126165, 44.0, 63.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 332.638076381669407, 210.033318837483762, 97.0, 63.0 ],
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
					"fontsize" : 48.0,
					"id" : "obj-310",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1206.401240940959724, 198.333312710126165, 54.0, 63.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 210.033318837483762, 96.0, 63.0 ],
					"text" : "θ",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
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
					"patching_rect" : [ 886.0, 671.835292412954232, 211.0, 44.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 1224.0, 623.472903199143389, 211.0, 44.0 ],
					"text" : " \niccmr-quantum.github.io",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"textjustification" : 2
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Consolas",
					"fontsize" : 16.0,
					"id" : "obj-306",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1173.572497174498039, 643.835292412954459, 247.552495844307714, 63.0 ],
					"text" : "Q1Synth Ensemble Controller\nControlling Q1Synth via Max\n(09-2022)",
					"textcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-302",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 299.099993973970413, 131.366667966047885, 61.0, 22.0 ],
					"text" : "r ctrll_tggl"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-301",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 177.099993973970413, 84.89997863769554, 63.0, 22.0 ],
					"text" : "s ctrll_tggl"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-300",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 177.099993973970413, 5.666658202807184, 70.0, 22.0 ],
					"text" : "loadmess 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-299",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 352.200000107288361, 168.366655687491175, 32.0, 22.0 ],
					"text" : "gate"
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-297",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 172.045803061376034, 111.0, 123.899993866682053, 49.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 408.249994610746626, 86.999996185302848, 120.0, 49.0 ],
					"text" : "Toggle Controller",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-298",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 177.099993973970413, 48.833337148030637, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 350.249994610746683, 93.499996185302848, 42.5, 42.5 ]
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-296",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1314.451244007618698, 91.866661826769587, 123.899993866682053, 28.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 408.249994610746626, 47.833327194055073, 120.0, 28.0 ],
					"text" : "Toggle Ring",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-295",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 638.233236153920529, 104.166658202807184, 110.0, 22.0 ],
					"text" : "set \"Sensel Morph\""
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Consolas",
					"id" : "obj-292",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 978.799926131963844, 91.39997863769554, 114.000000000000114, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 146.0, 113.666652063528886, 85.0, 21.0 ],
					"text" : "ring device",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-293",
					"items" : [ "Microsoft GS Wavetable Synth", ",", "loopMIDI Port 1", ",", "loopMIDI Port 2" ],
					"labelclick" : 1,
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 872.299926131963844, 88.39997863769554, 100.0, 23.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 42.0, 110.666652063528886, 100.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-291",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 854.799926131963844, 130.666645924250474, 73.0, 22.0 ],
					"text" : "s ringdevice"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Consolas",
					"id" : "obj-8",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 695.233236153920529, 15.666658202807184, 116.0, 21.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 257.0, 45.333327194055073, 61.0, 35.0 ],
					"text" : "refresh devices",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-278",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 599.666628609101053, 72.999991536140527, 63.0, 22.0 ],
					"text" : "set Neova"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-279",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 662.666628609101053, 13.666658202807184, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 227.0, 49.333327194055073, 27.0, 27.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-281",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 673.233236153920529, 72.999991536140527, 126.0, 22.0 ],
					"text" : "set \"IAC Driver Bus 1\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-282",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "bang", "bang", "bang", "bang" ],
					"patching_rect" : [ 599.666628609101053, 42.666658202807184, 52.0, 22.0 ],
					"text" : "t b b b b"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Consolas",
					"id" : "obj-128",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 978.799926131963844, 58.066645304362169, 114.000000000000114, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 146.0, 80.833327194055073, 74.0, 21.0 ],
					"text" : "out device",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Consolas",
					"id" : "obj-126",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 978.799926131963844, 21.066645304362169, 120.000000000000114, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 146.0, 49.333327194055073, 77.0, 21.0 ],
					"text" : "in device",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-283",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 929.799926131963844, 130.666645924250474, 62.0, 22.0 ],
					"text" : "s indevice"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-284",
					"items" : [ "Microsoft GS Wavetable Synth", ",", "loopMIDI Port 1", ",", "loopMIDI Port 2" ],
					"labelclick" : 1,
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 872.299926131963844, 21.066645304362169, 100.0, 23.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 42.0, 47.833327194055073, 100.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-285",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 995.96662629644095, 130.666645924250474, 69.0, 22.0 ],
					"text" : "s outdevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-286",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 599.666628609101053, 13.666658202807184, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-287",
					"items" : [ "Microsoft GS Wavetable Synth", ",", "loopMIDI Port 1", ",", "loopMIDI Port 2" ],
					"labelclick" : 1,
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 872.299926131963844, 55.066645304362169, 100.0, 23.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 42.0, 77.833327194055073, 100.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-288",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 713.299926131963844, 43.999991536140556, 55.0, 23.0 ],
					"text" : "midiinfo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1320.901240940959724, 57.199995160102617, 70.0, 22.0 ],
					"text" : "loadmess 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-260",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1286.901240940959724, 91.866661826769587, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 350.249994610746683, 43.833327194055073, 42.5, 42.5 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1176.901240940959724, 134.199995160102617, 32.0, 22.0 ],
					"text" : "gate"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-261",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1372.901240940959724, 270.533328493436102, 85.0, 34.0 ],
					"text" : "CC 2 'Azimuth'"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"degrees" : 360,
					"id" : "obj-262",
					"maxclass" : "dial",
					"mode" : 1,
					"needlecolor" : [ 1.0, 0.0, 0.0, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1153.401240940959724, 209.866661826769587, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 27.0, 132.533318837483762, 218.0, 218.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"degrees" : 360,
					"id" : "obj-263",
					"maxclass" : "dial",
					"mode" : 1,
					"needlecolor" : [ 1.0, 0.0, 0.0, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"outlinecolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1320.401240940959724, 216.866661826769587, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 272.138076381669407, 132.533318837483762, 218.0, 218.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-264",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1198.901240940959724, 270.533328493436102, 85.0, 34.0 ],
					"text" : "CC 1 'Inclination'"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-265",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1175.901240940959724, 91.866661826769587, 93.0, 22.0 ],
					"text" : "join @triggers 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-266",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 1175.901240940959724, 166.199995160102617, 66.0, 22.0 ],
					"text" : "route 1 2 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-267",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1167.401240940959724, 374.333312710126165, 67.0, 22.0 ],
					"text" : "r outdevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-268",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 1240.401240940959724, 374.333312710126165, 51.0, 22.0 ],
					"text" : "unjoin 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-269",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 0,
					"patching_rect" : [ 1240.401240940959724, 406.333312710126165, 40.0, 22.0 ],
					"text" : "ctlout"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-270",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1153.401240940959724, 320.533328493436102, 37.0, 22.0 ],
					"text" : "join 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-271",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1198.901240940959724, 307.533328493436102, 70.0, 22.0 ],
					"text" : "loadmess 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-272",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1327.401240940959724, 320.533328493436102, 37.0, 22.0 ],
					"text" : "join 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-273",
					"maxclass" : "dial",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1153.401240940959724, 274.533328493436102, 40.0, 40.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-274",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1372.901240940959724, 307.533328493436102, 70.0, 22.0 ],
					"text" : "loadmess 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-275",
					"maxclass" : "dial",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1327.401240940959724, 274.533328493436102, 40.0, 40.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-276",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1200.401240940959724, 15.666658202807184, 71.0, 22.0 ],
					"text" : "r ringdevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-277",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "int", "int" ],
					"patching_rect" : [ 1200.401240940959724, 40.199995160102617, 40.0, 22.0 ],
					"text" : "ctlin"
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-101",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1082.26660765210795, 999.000000000000227, 97.0, 49.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 882.166671435038211, 524.056238916662551, 105.0, 28.0 ],
					"text" : "Randomize",
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
					"id" : "obj-100",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1082.26660765210795, 969.000000000000227, 96.766609857479807, 28.0 ],
					"text" : "Measure",
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
					"id" : "obj-98",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1082.26660765210795, 916.166658202807184, 78.0, 49.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 697.963547297402897, 524.056238916662551, 101.0, 28.0 ],
					"text" : "Play/Stop",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-136",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 365.200000107288361, 131.366667966047885, 41.0, 22.0 ],
					"text" : "join 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-144",
					"linecount" : 23,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 9.0, 474.533333485325443, 150.0, 324.0 ],
					"text" : "Q1Synth CC Reference\n\nCC  28  tick attack\nCC  29  tick delay\nCC  30  tick sustain\nCC  31  tick release\nCC  32  filter/mod attack\nCC  33  filter/mod decay\nCC  34  filter/mod sustain\nCC  35  filter/mod release\n\nCC 36 Preset 0\nCC 37 Preset 1\nCC 38 Preset 2\nCC 39 Preset 3\nCC 40 Preset 4\nCC 41 Preset 5\nCC 42 Preset 6\nCC 43 Preset 7\n\nCC  44  Play\nCC  45  Measure\nCC  46  Randomize"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-143",
					"linecount" : 33,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 9.0, 13.666658202807184, 150.0, 462.0 ],
					"text" : "Q1Synth CC Reference\n\nCC 1  'Inclination'\nCC 2  'Azimuth'\nCC 3  'Lambda'\n\nLEFT\nCC 4  |0> freq\nCC 5  |0> gain\nCC 6  |0> octave\nCC 7  |+> custom param 0\nCC 8  |+> custom param 1\nCC 9  |+> custom param 2\nCC 10  0° reverb\nCC 11  0° delay\nCC 12  0° crush\nCC 13  0° pan\nCC 14  0° hicut\nCC 15  0° locut\n\nRIGHT\nCC 16  |1> freq\nCC 17  |1> gain\nCC 18  |1> octave\nCC 19 |-> custom param 0\nCC 20 |-> custom param 1\nCC 21 |-> custom param 2\nCC 22  ±180° reverb\nCC 23  ±180° delay\nCC 24  ±180° crush\nCC 25  ±180° pan\nCC 26  ±180° hicut\nCC 27  ±180° locut"
				}

			}
, 			{
				"box" : 				{
					"bubblepoint" : 1.0,
					"bubbletextmargin" : 3,
					"fontname" : "Consolas",
					"fontsize" : 18.0,
					"id" : "obj-4",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1075.050003066658974, 828.533311625321858, 123.899993866682053, 28.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 184.233913905209192, 460.900004208087694, 137.0, 28.0 ],
					"text" : "Presets 1-8",
					"textcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ],
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-65",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 365.200000107288361, 65.366667966047885, 60.0, 22.0 ],
					"text" : "r indevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "int", "int" ],
					"patching_rect" : [ 365.200000107288361, 95.700001299381228, 41.0, 22.0 ],
					"text" : "notein"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-49",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 185.900026381015778, 783.0, 67.0, 22.0 ],
					"text" : "r outdevice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "int" ],
					"patching_rect" : [ 225.733303656180738, 859.835292412954232, 59.0, 22.0 ],
					"text" : "unpack i i"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-22",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 0,
					"patching_rect" : [ 231.200013190507889, 908.133323570092671, 40.0, 22.0 ],
					"text" : "ctlout"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-351",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 334.0, 925.999962449074133, 45.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1288.784510660740125, 432.650004208087694, 45.0, 22.0 ],
					"text" : "store 1",
					"varname" : "store[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 338.0, 957.333349426587574, 45.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1337.500000000000682, 432.650004208087694, 45.0, 22.0 ],
					"text" : "store 2",
					"varname" : "store[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 338.0, 991.333349426587574, 45.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1288.784510660740125, 468.650004208087694, 45.0, 22.0 ],
					"text" : "store 3",
					"varname" : "store[3]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 338.0, 1025.333349426587574, 45.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1337.500000000000682, 468.650004208087694, 45.0, 22.0 ],
					"text" : "store 4",
					"varname" : "store[4]"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.231372549019608, 0.231372549019608, 0.231372549019608, 1.0 ],
					"id" : "obj-258",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 886.0, 723.100003600120544, 60.0, 187.13330920537328 ],
					"presentation" : 1,
					"presentation_rect" : [ 11.0, 19.033318837483762, 1478.0, 670.133348162516199 ],
					"proportion" : 0.5
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-266", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"source" : [ "obj-103", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-260", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-299", 1 ],
					"source" : [ "obj-136", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-318", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-318", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-318", 0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"midpoints" : [ 52.5, 898.999999999999886, 52.5, 898.999999999999886 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"midpoints" : [ 152.819003482659809, 969.0, 35.0, 969.0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"midpoints" : [ 175.819003482659809, 969.0, 169.770787759373661, 969.0 ],
					"source" : [ "obj-18", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"midpoints" : [ 35.0, 1008.0, 35.0, 1008.0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-216", 0 ],
					"midpoints" : [ 418.995799994717061, 162.700009763240701, 470.074994929134903, 162.700009763240701 ],
					"source" : [ "obj-217", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-259", 0 ],
					"midpoints" : [ 483.770787759373604, 90.700009763240701, 483.770787759373604, 90.700009763240701 ],
					"source" : [ "obj-257", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-289", 0 ],
					"midpoints" : [ 494.270787759373604, 117.700009763240701, 483.770787759373604, 117.700009763240701 ],
					"source" : [ "obj-259", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-289", 1 ],
					"midpoints" : [ 483.770787759373604, 117.700009763240701, 567.770787759373661, 117.700009763240701 ],
					"source" : [ "obj-259", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 1296.401240940959724, 128.199995160102844, 1186.401240940959724, 128.199995160102844 ],
					"source" : [ "obj-260", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-273", 0 ],
					"source" : [ "obj-262", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-275", 0 ],
					"source" : [ "obj-263", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"midpoints" : [ 1185.401240940959724, 128.199995160102844, 1199.401240940959724, 128.199995160102844 ],
					"source" : [ "obj-265", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-262", 0 ],
					"midpoints" : [ 1185.401240940959724, 191.199995160102844, 1162.901240940959724, 191.199995160102844 ],
					"source" : [ "obj-266", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-263", 0 ],
					"midpoints" : [ 1201.067907607626466, 203.199995160102844, 1329.901240940959724, 203.199995160102844 ],
					"source" : [ "obj-266", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"source" : [ "obj-266", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-269", 0 ],
					"midpoints" : [ 1176.901240940959724, 400.833312710126165, 1249.901240940959724, 400.833312710126165 ],
					"source" : [ "obj-267", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-269", 1 ],
					"midpoints" : [ 1265.901240940959724, 400.833312710126165, 1260.401240940959724, 400.833312710126165 ],
					"source" : [ "obj-268", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-269", 0 ],
					"source" : [ "obj-268", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-268", 0 ],
					"midpoints" : [ 1162.901240940959724, 378.199995160102844, 1249.901240940959724, 378.199995160102844 ],
					"source" : [ "obj-270", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-270", 1 ],
					"source" : [ "obj-271", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-268", 0 ],
					"midpoints" : [ 1336.901240940959724, 378.199995160102844, 1249.901240940959724, 378.199995160102844 ],
					"source" : [ "obj-272", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-270", 0 ],
					"source" : [ "obj-273", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-272", 1 ],
					"source" : [ "obj-274", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-272", 0 ],
					"source" : [ "obj-275", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-277", 0 ],
					"source" : [ "obj-276", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-265", 0 ],
					"midpoints" : [ 1220.401240940959724, 83.199995160102844, 1185.401240940959724, 83.199995160102844 ],
					"source" : [ "obj-277", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-265", 1 ],
					"midpoints" : [ 1209.901240940959724, 69.199995160102844, 1259.401240940959724, 69.199995160102844 ],
					"source" : [ "obj-277", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-284", 0 ],
					"midpoints" : [ 609.166628609101053, 138.0, 840.966628501812693, 138.0, 840.966628501812693, 15.0, 881.799926131963844, 15.0 ],
					"source" : [ "obj-278", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-288", 0 ],
					"midpoints" : [ 672.166628609101053, 39.0, 722.799926131963844, 39.0 ],
					"source" : [ "obj-279", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 654.203245465594364, 492.0, 573.0, 492.0, 573.0, 495.0, 522.0, 495.0, 522.0, 687.0, 264.0, 687.0, 264.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-287", 0 ],
					"midpoints" : [ 682.733236153920529, 96.0, 858.966628501812693, 96.0, 858.966628501812693, 51.0, 881.799926131963844, 51.0 ],
					"source" : [ "obj-281", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-278", 0 ],
					"midpoints" : [ 631.166628609101053, 66.0, 609.166628609101053, 66.0 ],
					"source" : [ "obj-282", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-281", 0 ],
					"midpoints" : [ 620.166628609101053, 66.0, 682.733236153920529, 66.0 ],
					"source" : [ "obj-282", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-288", 0 ],
					"midpoints" : [ 642.166628609101053, 66.0, 660.966628501812693, 66.0, 660.966628501812693, 48.0, 708.966628501812693, 48.0, 708.966628501812693, 39.0, 722.799926131963844, 39.0 ],
					"source" : [ "obj-282", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-295", 0 ],
					"midpoints" : [ 609.166628609101053, 66.0, 594.966628501812693, 66.0, 594.966628501812693, 96.0, 647.733236153920529, 96.0 ],
					"source" : [ "obj-282", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-283", 0 ],
					"midpoints" : [ 922.299926131963844, 51.0, 972.966628501812693, 51.0, 972.966628501812693, 123.0, 939.299926131963844, 123.0 ],
					"order" : 1,
					"source" : [ "obj-284", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"midpoints" : [ 922.299926131963844, 45.0, 975.0, 45.0, 975.0, 6.0, 1111.5, 6.0 ],
					"order" : 0,
					"source" : [ "obj-284", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-282", 0 ],
					"source" : [ "obj-286", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-285", 0 ],
					"midpoints" : [ 922.299926131963844, 81.0, 972.966628501812693, 81.0, 972.966628501812693, 123.0, 1005.46662629644095, 123.0 ],
					"source" : [ "obj-287", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-284", 0 ],
					"midpoints" : [ 722.799926131963844, 69.0, 777.966628501812693, 69.0, 777.966628501812693, 48.0, 858.966628501812693, 48.0, 858.966628501812693, 15.0, 881.799926131963844, 15.0 ],
					"order" : 2,
					"source" : [ "obj-288", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-287", 0 ],
					"midpoints" : [ 722.799926131963844, 69.0, 777.966628501812693, 69.0, 777.966628501812693, 51.0, 881.799926131963844, 51.0 ],
					"order" : 1,
					"source" : [ "obj-288", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-293", 0 ],
					"midpoints" : [ 722.799926131963844, 69.0, 858.966628501812693, 69.0, 858.966628501812693, 84.0, 881.799926131963844, 84.0 ],
					"order" : 0,
					"source" : [ "obj-288", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-216", 1 ],
					"midpoints" : [ 483.770787759373604, 153.700009763240701, 483.074994929134903, 153.700009763240701 ],
					"source" : [ "obj-289", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"midpoints" : [ 922.299926131963844, 114.0, 864.966628501812693, 114.0, 864.966628501812693, 126.0, 864.299926131963844, 126.0 ],
					"source" : [ "obj-293", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-293", 0 ],
					"midpoints" : [ 647.733236153920529, 138.0, 840.966628501812693, 138.0, 840.966628501812693, 84.0, 881.799926131963844, 84.0 ],
					"source" : [ "obj-295", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-301", 0 ],
					"source" : [ "obj-298", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"midpoints" : [ 186.599993973970413, 30.0, 265.5, 30.0 ],
					"order" : 0,
					"source" : [ "obj-300", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-298", 0 ],
					"order" : 1,
					"source" : [ "obj-300", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-299", 0 ],
					"midpoints" : [ 308.599993973970413, 163.700009763240701, 361.700000107288361, 163.700009763240701 ],
					"source" : [ "obj-302", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-32", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"source" : [ "obj-32", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 235.233303656180738, 768.0, 264.0, 768.0, 264.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-318", 0 ],
					"source" : [ "obj-348", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 548.412494769940736, 684.0, 264.0, 684.0, 264.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-318", 0 ],
					"source" : [ "obj-351", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"midpoints" : [ 626.654080871492624, 969.0, 612.0, 969.0, 612.0, 912.0, 870.0, 912.0, 870.0, 444.0, 882.0, 444.0, 882.0, 285.0, 876.0, 285.0, 876.0, 186.0, 786.429029783051647, 186.0 ],
					"source" : [ "obj-352", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 1 ],
					"midpoints" : [ 275.233303656180738, 894.0, 251.200013190507889, 894.0 ],
					"source" : [ "obj-39", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"midpoints" : [ 235.233303656180738, 894.0, 240.700013190507889, 894.0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-318", 0 ],
					"source" : [ "obj-435", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"midpoints" : [ 195.400026381015778, 894.0, 240.700013190507889, 894.0 ],
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"midpoints" : [ 52.5, 865.999999999999886, 52.5, 865.999999999999886 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"midpoints" : [ 52.5, 968.999999999999886, 152.819003482659809, 968.999999999999886 ],
					"source" : [ "obj-51", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-26", 0 ],
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-51", 0 ],
					"midpoints" : [ 63.0, 955.999999999999886, 52.5, 955.999999999999886 ],
					"source" : [ "obj-52", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 1 ],
					"midpoints" : [ 108.819003482659809, 963.699979782104947, 175.819003482659809, 963.699979782104947 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"midpoints" : [ 169.770787759373661, 1020.0, 35.0, 1020.0 ],
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-268", 0 ],
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 1 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-66", 0 ],
					"midpoints" : [ 374.700000107288361, 88.700009763240701, 374.700000107288361, 88.700009763240701 ],
					"source" : [ "obj-65", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-136", 1 ],
					"midpoints" : [ 385.700000107288361, 124.700009763240701, 396.700000107288361, 124.700009763240701 ],
					"source" : [ "obj-66", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-136", 0 ],
					"midpoints" : [ 374.700000107288361, 118.700009763240701, 374.700000107288361, 118.700009763240701 ],
					"source" : [ "obj-66", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 884.654085669666756, 693.0, 381.0, 693.0, 381.0, 687.0, 264.0, 687.0, 264.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-83", 0 ],
					"source" : [ "obj-86", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 343.5, 903.0, 294.0, 903.0, 294.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-87", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 0 ],
					"source" : [ "obj-89", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 200.700000107288361, 768.0, 171.0, 768.0, 171.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-91", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-91", 0 ],
					"source" : [ "obj-93", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"midpoints" : [ 970.670730902503237, 492.0, 573.0, 492.0, 573.0, 495.0, 522.0, 495.0, 522.0, 687.0, 264.0, 687.0, 264.0, 846.0, 235.233303656180738, 846.0 ],
					"source" : [ "obj-94", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-94", 0 ],
					"source" : [ "obj-96", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 0 ],
					"source" : [ "obj-99", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "adsrFaders.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "dialCC.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "effectFaders.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "instrumentFaders.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "noteFaders.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "notebangCC.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "noteonCC.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "playstopBangs.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "presetBangs.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "q1synthMIDImapping.json",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "sphereFaders.maxpat",
				"bootpath" : "~/q1synth/ensemble_patches/children",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"bgcolor" : [ 0.815686274509804, 0.815686274509804, 0.815686274509804, 1.0 ]
	}

}
