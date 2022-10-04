//Made by Itaborala
var qubits
if (jsarguments.length>1) {
	qubits = jsarguments[1];
	}
else {
	qubits = 1;
	}

p = this.patcher;
pp = this.patcher.parentpatcher;

inlets = 1;
outlets = 1;

function update(qb) {

	var old_qb = qubits;

	if (qb) {

		qubits = qb;
	}

	var Inlets = new Array(2*qubits);
	var osc_router = new Array(qubits);

	//p.apply(killjoin);
	p.remove(p.getnamed("qubitjoin"));
	p.remove(p.getnamed("zlslice"));
	p.script("newdefault", "qubitjoin", 286, 194, "join", 2*qubits+1);
	var Join = p.getnamed("qubitjoin");
	p.script("newdefault", "zlslice", 286, 222, "zl", "slice", 1);
	var slice = p.getnamed("zlslice");

	p.remove(p.getnamed("bang_measure"));
	var b_meas = p.newdefault(260, 155, "button");
	b_meas.message("varname", "bang_measure");

	p.connect(b_meas, 0, Join, 0);



	for (k=0;k<2*qubits;k++) {
		p.remove(p.getnamed("in"+k));
		Inlets[k] = p.newdefault(k*50 + 300, 104, "inlet", k);
		Inlets[k].message("varname", "in"+k);
		p.connect(Inlets[k], 0, Join, k+1);




	}


	if (old_qb > qubits) {
		for (k=2*qubits;k<2*old_qb;k++) {
			p.remove(p.getnamed("in"+k));
		}
		for (l=qubits;l<old_qb;l++) {
			pp.remove(pp.getnamed("unpack"+l));
			pp.remove(pp.getnamed("az"+l));
			pp.remove(pp.getnamed("ph"+l));
		}

	}


	var qc_msg = new Array();

	p.remove(p.getnamed("msg"));

	var qc = p.newdefault(286, 260, "message");
	qc.message("varname", "msg");
	qc.message("size", 230, 10);

	qc_msg.push(["och.mq", "QuantumCircuit", "children", qubits, qubits]);



	for (k=0;k<qubits;k++) {
		var l = 2*k+1;
		var m = 2*k+2;
		qc_msg.push(["och.mq", "children", "ry", "$"+l, k]);
		qc_msg.push(["och.mq", "children", "rz", "$"+m, k]);
		qc_msg.push(["och.mq", "children", "m", k, k]);

		osc_router[k] = "/q1synth"+k;
	}

	pp.remove(pp.getnamed("osc_parser"));
	pp.script("newdefault", "osc_parser", 154, 160, "route", osc_router);
	var osc_r = pp.getnamed("osc_parser");
	pp.script("sendbox", "osc_parser", "size", qubits*145, 22);
	pp.connect(pp.getnamed("OSC_Regexp"), 0, osc_r, 0);

	var Coord = new Array(qubits);
	var Nums = new Array(2*qubits);
	var Mulaz = new Array(qubits);
	var Mulph = new Array(qubits);

	for (k=0;k<qubits;k++) {
		pp.remove(pp.getnamed("unpack"+k));
		pp.script("newdefault", "unpack"+k, k*168 + 154, 200, "unjoin", 2);
		Coord[k] = pp.getnamed("unpack"+k);
		pp.remove(pp.getnamed("mulaz"+k));
		Mulaz[k] = pp.script("newdefault", "mulaz"+k, k*168+154, 240, "*", 3.14159265359)
		pp.script("sendbox", "mulaz"+k, "size", 67, 22)
		Mulaz[k]= pp.getnamed("mulaz"+k)
		pp.remove(pp.getnamed("az"+k));
		Nums[2*k] = pp.newdefault(k*168+154, 280, "number")
		Nums[2*k].message("varname", "az"+k);
		Nums[2*k].message("format", 6);
		Nums[2*k].message("minimum", 0);
		Nums[2*k].message("maximum", 3.14159265359);
		pp.remove(pp.getnamed("mulph"+k));
		Mulph[k] = pp.script("newdefault", "mulph"+k, k*168+238, 240, "*", 6.28318530718)
		pp.script("sendbox", "mulph"+k, "size", 67, 22)
		Mulph[k]= pp.getnamed("mulph"+k)
		pp.remove(pp.getnamed("ph"+k));
		Nums[2*k+1] = pp.newdefault(k*168+238, 280, "number")
		Nums[2*k+1].message("varname", "ph"+k);
		Nums[2*k+1].message("format", 6);
		Nums[2*k+1].message("minimum", 0);
		Nums[2*k+1].message("maximum", 6.28318530718);

		pp.connect(osc_r, k, Coord[k], 0);
		pp.connect(Coord[k], 0, Mulaz[k], 0);
		pp.connect(Coord[k], 1, Mulph[k], 0);
		pp.connect(Mulaz[k], 0, Nums[2*k], 0);
		pp.connect(Mulph[k], 0, Nums[2*k+1], 0);
		pp.connect(Nums[2*k], 0, p.box, 2*k+1);
		pp.connect(Nums[2*k+1], 0, p.box, 2*k+2);
	}

	qc_msg.push(["och.mq", "Simulator", "sim", "children"]);


	qc_msg.push(["och.mq", "sim", "get_statevector"])

	for (k=0;k<qc_msg.length;k++){
		qc.message("append", ";", qc_msg[k]);
	}


	p.connect(Join, 0, slice, 0);
	p.connect(slice, 1, qc, 0);
	p.connect(p.getnamed("gate"), 0, b_meas, 0);

}

function killjoin(obj){
	if (obj.maxclass == "join") {
		p.remove(obj);
	}
	else if (obj.maxclass == "zl" && obj.rect[0] > 200) {
		p.remove(obj);
	}


}
