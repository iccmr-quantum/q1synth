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
		"rect" : [ 997.0, 176.0, 643.0, 644.0 ],
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
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 58.0, 300.0, 141.0, 22.0 ],
					"text" : "substitute /counts counts"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-2060",
					"index" : 4,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 136.75, 555.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2041",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 126.0, 379.0, 55.0, 22.0 ],
					"text" : "del 1000"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2040",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 186.75, 338.0, 50.0, 36.0 ],
					"text" : "\"00 523 11 5\""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2035",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 58.0, 338.0, 123.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "q1synth_oscmsg.js",
						"parameter_enable" : 0
					}
,
					"text" : "js q1synth_oscmsg.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2032",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 87.75, 155.0, 29.5, 22.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.368627450980392, 0.113725490196078, 0.462745098039216, 1.0 ],
					"id" : "obj-35",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 146.0, 255.0, 117.0, 22.0 ],
					"text" : "osc_qasm @shots 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2029",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 173.0, 120.0, 22.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1973",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 209.0, 120.0, 32.0, 22.0 ],
					"text" : "gate",
					"varname" : "gate"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1972",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "int" ],
					"patching_rect" : [ 33.75, 155.0, 32.0, 22.0 ],
					"text" : "t b 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1933",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 98.0, 194.0, 83.0, 22.0 ],
					"text" : "sim get_qasm"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1929",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 33.75, 120.0, 131.0, 22.0 ],
					"text" : "route Measure Refresh"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-703",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 175.75, 454.0, 56.0, 22.0 ],
					"text" : "zl.delace"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-9",
					"index" : 3,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 104.75, 555.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 70.75, 496.0, 161.0, 36.0 ],
					"text" : "vexpr sqrt(pow($f1\\,2) + pow($f2\\,2))"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-6",
					"index" : 2,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 70.75, 555.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 36.75, 454.0, 122.0, 22.0 ],
					"text" : "prepend statevector"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 36.75, 416.0, 71.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 34.0, 255.0, 98.0, 22.0 ],
					"text" : "route statevector"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.631372549019608, 0.109803921568627, 0.109803921568627, 1.0 ],
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 34.0, 225.0, 195.0, 22.0 ],
					"text" : "och.microqiskit @console_output 0"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1282",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 36.75, 555.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1017",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 300.5, 25.0, 29.5, 22.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-709",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 332.25, 25.0, 29.5, 22.0 ],
					"text" : "2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-707",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 396.75, 25.0, 29.5, 22.0 ],
					"text" : "5"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-705",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 365.25, 25.0, 29.5, 22.0 ],
					"text" : "3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-644",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 191.0, 25.0, 93.0, 22.0 ],
					"text" : "prepend update"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-643",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 6,
					"outlettype" : [ "signal", "bang", "int", "float", "", "list" ],
					"patching_rect" : [ 33.75, 57.0, 71.5, 22.0 ],
					"text" : "typeroute~",
					"varname" : "typeroute"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-642",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 33.75, 21.0, 30.0, 30.0 ],
					"varname" : "in0[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-495",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 134.0, 25.0, 45.0, 22.0 ],
					"text" : "update"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-56",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 33.75, 194.0, 55.0, 22.0 ],
					"text" : "r och.mq"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-606",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 134.0, 77.0, 150.0, 20.0 ],
					"text" : "By Itaborala @ QuTune"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 134.0, 57.0, 150.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "ensemble_creator.js",
						"parameter_enable" : 0
					}
,
					"text" : "js ensemble_creator.js 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39956",
					"maxclass" : "newobj",
					"numinlets" : 7,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 286.0, 194.0, 100.0, 22.0 ],
					"text" : "join 7",
					"varname" : "qubitjoin"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39957",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 286.0, 222.0, 100.0, 22.0 ],
					"text" : "zl slice 1",
					"varname" : "zlslice"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39959",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 260.0, 155.0, 24.0, 24.0 ],
					"varname" : "bang_measure"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-39961",
					"index" : 2,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 300.0, 104.0, 30.0, 30.0 ],
					"varname" : "in0"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-39963",
					"index" : 3,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 350.0, 104.0, 30.0, 30.0 ],
					"varname" : "in1"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-39965",
					"index" : 4,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 400.0, 104.0, 30.0, 30.0 ],
					"varname" : "in2"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-39967",
					"index" : 5,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 450.0, 104.0, 30.0, 30.0 ],
					"varname" : "in3"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-39969",
					"index" : 6,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 500.0, 104.0, 30.0, 30.0 ],
					"varname" : "in4"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-39971",
					"index" : 7,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 550.0, 104.0, 30.0, 30.0 ],
					"varname" : "in5"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39973",
					"linecount" : 13,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 286.0, 260.0, 230.0, 188.0 ],
					"text" : ";\r\noch.mq QuantumCircuit children 3 3;\r\noch.mq children ry $1 0;\r\noch.mq children rz $2 0;\r\noch.mq children m 0 0;\r\noch.mq children ry $3 1;\r\noch.mq children rz $4 1;\r\noch.mq children m 1 1;\r\noch.mq children ry $5 2;\r\noch.mq children rz $6 2;\r\noch.mq children m 2 2;\r\noch.mq Simulator sim children;\r\noch.mq sim get_statevector",
					"varname" : "msg"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-644", 0 ],
					"midpoints" : [ 310.0, 50.0, 292.5, 50.0, 292.5, 21.0, 200.5, 21.0 ],
					"source" : [ "obj-1017", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1972", 0 ],
					"midpoints" : [ 43.25, 144.0, 43.25, 144.0 ],
					"source" : [ "obj-1929", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2032", 0 ],
					"midpoints" : [ 99.25, 144.0, 97.25, 144.0 ],
					"source" : [ "obj-1929", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 107.5, 219.0, 43.5, 219.0 ],
					"source" : [ "obj-1933", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1933", 0 ],
					"midpoints" : [ 43.25, 189.0, 107.5, 189.0 ],
					"source" : [ "obj-1972", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2029", 0 ],
					"midpoints" : [ 56.25, 186.0, 174.0, 186.0, 174.0, 114.0, 182.5, 114.0 ],
					"source" : [ "obj-1972", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39959", 0 ],
					"source" : [ "obj-1973", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"midpoints" : [ 43.5, 279.0, 46.25, 279.0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"midpoints" : [ 122.5, 279.0, 139.0, 279.0, 139.0, 252.0, 155.5, 252.0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1973", 0 ],
					"midpoints" : [ 182.5, 144.0, 183.0, 144.0, 183.0, 114.0, 218.5, 114.0 ],
					"source" : [ "obj-2029", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2029", 0 ],
					"midpoints" : [ 97.25, 177.0, 174.0, 177.0, 174.0, 114.0, 182.5, 114.0 ],
					"source" : [ "obj-2032", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2040", 1 ],
					"midpoints" : [ 171.5, 363.0, 182.75, 363.0, 182.75, 333.0, 227.25, 333.0 ],
					"order" : 0,
					"source" : [ "obj-2035", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2041", 0 ],
					"midpoints" : [ 171.5, 369.0, 135.5, 369.0 ],
					"order" : 2,
					"source" : [ "obj-2035", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2060", 0 ],
					"midpoints" : [ 171.5, 375.0, 242.75, 375.0, 242.75, 549.0, 146.25, 549.0 ],
					"order" : 1,
					"source" : [ "obj-2035", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"midpoints" : [ 67.5, 402.0, 23.75, 402.0, 23.75, 540.0, 114.25, 540.0 ],
					"source" : [ "obj-2035", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2032", 0 ],
					"midpoints" : [ 135.5, 406.0, 18.0, 406.0, 18.0, 150.0, 97.25, 150.0 ],
					"source" : [ "obj-2041", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"order" : 1,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-703", 0 ],
					"midpoints" : [ 46.25, 447.0, 185.25, 447.0 ],
					"order" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39957", 0 ],
					"source" : [ "obj-39956", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39973", 0 ],
					"source" : [ "obj-39957", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 0 ],
					"source" : [ "obj-39959", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 1 ],
					"source" : [ "obj-39961", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 2 ],
					"source" : [ "obj-39963", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 3 ],
					"source" : [ "obj-39965", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 4 ],
					"source" : [ "obj-39967", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 5 ],
					"source" : [ "obj-39969", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39956", 6 ],
					"source" : [ "obj-39971", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1282", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 143.5, 48.0, 143.5, 48.0 ],
					"source" : [ "obj-495", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-643", 0 ],
					"source" : [ "obj-642", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1929", 0 ],
					"midpoints" : [ 85.25, 105.0, 43.25, 105.0 ],
					"source" : [ "obj-643", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1973", 1 ],
					"midpoints" : [ 53.75, 105.0, 231.5, 105.0 ],
					"source" : [ "obj-643", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-644", 0 ],
					"midpoints" : [ 64.25, 90.0, 120.0, 90.0, 120.0, 21.0, 200.5, 21.0 ],
					"source" : [ "obj-643", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 200.5, 51.0, 143.5, 51.0 ],
					"source" : [ "obj-644", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 1 ],
					"source" : [ "obj-703", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"midpoints" : [ 185.25, 484.0, 80.75, 484.0, 80.75, 490.0, 80.25, 490.0 ],
					"source" : [ "obj-703", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-644", 0 ],
					"midpoints" : [ 374.75, 50.0, 292.5, 50.0, 292.5, 21.0, 200.5, 21.0 ],
					"source" : [ "obj-705", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-644", 0 ],
					"midpoints" : [ 406.25, 50.0, 292.5, 50.0, 292.5, 20.0, 200.5, 20.0 ],
					"source" : [ "obj-707", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-644", 0 ],
					"midpoints" : [ 341.75, 50.0, 292.5, 50.0, 292.5, 21.0, 200.5, 21.0 ],
					"source" : [ "obj-709", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2035", 0 ],
					"midpoints" : [ 189.5, 330.0, 67.5, 330.0 ],
					"source" : [ "obj-8", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2035", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
 ]
	}

}
