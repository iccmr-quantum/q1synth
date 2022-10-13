//Made by Itaborala
inlets = 1;
outlets = 2;

function counts(meas) {

	post(meas.length-2);
	for (i=0;i<meas.length-2;i++) {

		if (meas[i] != "0" && meas[i] != "1") {
			post("Counts Parsing ERROR!\n");
		}

		outlet(0, "/q1synth/"+i+"/meas", parseInt(meas[i]));

	}
	outlet(1, meas.slice(0, -2));

}

function info() {}//dummy function
