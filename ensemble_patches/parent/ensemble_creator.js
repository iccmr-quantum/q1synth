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
	// ================== THIS PATCHER ===================
	// (x,y) inputs for each child
	var Inlets = new Array(2*qubits);
	// ==== Update 'fixed' objects ====
	// -- This patcher --

	// [join n]
	p.remove(p.getnamed("qubitjoin"));
	// Non-usual objects like 'join' dont work properly with js dynamic patching
	// when using p.newdefault() and p.message().
	// Workaround is to use [thispatcher] object script syntax
	p.script("newdefault", "qubitjoin", 286, 194, "join", 2*qubits+1);
	var Join = p.getnamed("qubitjoin");
	// [zl slice]
	p.remove(p.getnamed("zlslice"));
	p.script("newdefault", "zlslice", 286, 222, "zl", "slice", 1);
	var slice = p.getnamed("zlslice");
	// [bang]
	p.remove(p.getnamed("bang_refresh_circuit"));
	// Bangs work fine with js
	var b_circ = p.newdefault(260, 155, "button");
	b_circ.message("varname", "bang_refresh_circuit");

	// ==== Update 'dynamic' objects ====
	for (k=0;k<2*qubits;k++) {
		// [inlet]
		p.remove(p.getnamed("in"+k));
		Inlets[k] = p.newdefault(k*50 + 300, 104, "inlet", k);
		Inlets[k].message("varname", "in"+k);
		p.connect(Inlets[k], 0, Join, k+1);
	}

	// ==== Generate QAC Toolkit Pseudo-QASM code template ====
	var qc_msg = new Array(); // Qasm Code message array
	var osc_paths = new Array(qubits); // OSC parser arguments at parent patch
	qc_msg.push(["och.mq", "QuantumCircuit", "children", qubits, qubits]);

	for (k=0;k<qubits;k++) { // <-'U3-like' gate, assuming states begin at 0
		var l = 2*k+1;
		var m = 2*k+2;
		qc_msg.push(["och.mq", "children", "ry", "$"+l, k]);
		qc_msg.push(["och.mq", "children", "rz", "$"+m, k]);
		qc_msg.push(["och.mq", "children", "m", k, k]);

		osc_paths[k] = "/q1synth"+k; // OSC Parser paths
	}
	qc_msg.push(["och.mq", "Simulator", "sim", "children"]);
	qc_msg.push(["och.mq", "sim", "get_statevector"])

	// [message] - Update quantum circuit template
	p.remove(p.getnamed("msg"));
	var qc = p.newdefault(286, 260, "message");
	qc.message("varname", "msg");
	qc.message("size", 230, 10);
	for (k=0;k<qc_msg.length;k++){
		qc.message("append", ";", qc_msg[k]);
	}

	// Connect objects
	p.connect(p.getnamed("gate"), 0, b_circ, 0);
	p.connect(b_circ, 0, Join, 0);
	p.connect(Join, 0, slice, 0);
	p.connect(slice, 1, qc, 0);

	// ================ PARENT PATCHER ==================
	// [route /q1synth0 ...]
	pp.remove(pp.getnamed("osc_parser"));
	// Again, using [thispatcher] script syntax to interact with [route]
	pp.script("newdefault", "osc_parser", 154, 160, "route", osc_paths);
	var osc_r = pp.getnamed("osc_parser");
	pp.script("sendbox", "osc_parser", "size", qubits*145, 22);
	pp.connect(pp.getnamed("OSC_Regexp"), 0, osc_r, 0);

	// -- Dynamic objects --
	var Coord = new Array(qubits);
	var Nums = new Array(2*qubits);
	var Mulaz = new Array(qubits);
	var Mulph = new Array(qubits);

	for (k=0;k<qubits;k++) {
		// [unjoin 2]
		pp.remove(pp.getnamed("unpack"+k));
		pp.script("newdefault", "unpack"+k, k*168 + 154, 200, "unjoin", 2);
		Coord[k] = pp.getnamed("unpack"+k);
		// [* pi]
		pp.remove(pp.getnamed("mulaz"+k));
		Mulaz[k] = pp.script("newdefault", "mulaz"+k, k*168+154, 240, "*", 3.14159265359)
		pp.script("sendbox", "mulaz"+k, "size", 67, 22)
		Mulaz[k]= pp.getnamed("mulaz"+k)
		// Equivalent to \theta parameter on Q1Synth
		pp.remove(pp.getnamed("az"+k));
		Nums[2*k] = pp.newdefault(k*168+154, 280, "number")
		Nums[2*k].message("varname", "az"+k);
		Nums[2*k].message("format", 6);
		Nums[2*k].message("minimum", 0);
		Nums[2*k].message("maximum", 3.14159265359);
		// [* 2*pi]
		pp.remove(pp.getnamed("mulph"+k));
		Mulph[k] = pp.script("newdefault", "mulph"+k, k*168+238, 240, "*", 6.28318530718)
		pp.script("sendbox", "mulph"+k, "size", 67, 22)
		Mulph[k]= pp.getnamed("mulph"+k)
		// Equivalent to \phi parameter on Q1Synth
		pp.remove(pp.getnamed("ph"+k));
		Nums[2*k+1] = pp.newdefault(k*168+238, 280, "number")
		Nums[2*k+1].message("varname", "ph"+k);
		Nums[2*k+1].message("format", 6);
		Nums[2*k+1].message("minimum", 0);
		Nums[2*k+1].message("maximum", 6.28318530718);
		// Connect everything
		pp.connect(osc_r, k, Coord[k], 0);
		pp.connect(Coord[k], 0, Mulaz[k], 0);
		pp.connect(Coord[k], 1, Mulph[k], 0);
		pp.connect(Mulaz[k], 0, Nums[2*k], 0);
		pp.connect(Mulph[k], 0, Nums[2*k+1], 0);
		pp.connect(Nums[2*k], 0, p.box, 2*k+1);
		pp.connect(Nums[2*k+1], 0, p.box, 2*k+2);
	}

	// ================ OSC_SEND SUBPATCHER ==================
	var pp_osc = pp.getnamed("OSC_SEND").subpatcher();

	var UDPsend = new Array(qubits);
	var osc_inlet = pp_osc.getnamed("osc_send_inlet")
	for (k=0;k<qubits;k++) {
		pp_osc.remove(pp_osc.getnamed('udpsend'+k));
		pp_osc.script("newdefault", "udpsend"+k, 50, 90+k*30, "udpsend", "11.1.2."+(k+2), 57122);
		UDPsend[k] = pp_osc.getnamed('udpsend'+k)
		pp_osc.connect(osc_inlet, 0, UDPsend[k], 0)
	}
	pp.connect(p.box, 2, pp_osc.box, 0)

	// Remove excess objects if downsizing qubits
	if (old_qb > qubits) {
		for (k=2*qubits;k<2*old_qb;k++) {
			p.remove(p.getnamed("in"+k));
		}
		for (l=qubits;l<old_qb;l++) {
			pp.remove(pp.getnamed("unpack"+l));
			pp.remove(pp.getnamed("az"+l));
			pp.remove(pp.getnamed("ph"+l));
			pp.remove(pp.getnamed("mulaz"+l));
			pp.remove(pp.getnamed("mulph"+l))
		}

	}

}

// If nothing else works, delete objects with this.
// This function is not being used anymore.
// Still is a good example of alternative ways of reaching
// objects in Max by class
function killjoin(obj){
	if (obj.maxclass == "join") {
		p.remove(obj);
	}
	else if (obj.maxclass == "zl" && obj.rect[0] > 200) {
		p.remove(obj);
	}


}
