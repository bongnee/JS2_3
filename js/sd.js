/**
 * khối 1: Inputs
 * cd, cr
 * khối 2: 
 * s = cd * cr
 * d = (cd + cr)*2
 * khối 3: outputs
 * s d 
 */

function calcSD() {
    var cd = document.getElementById("chieuDai").value;
    var cr = document.getElementById("chieuRong").value;

    var s = Number(cd) * Number(cr);
    var d = (Number(cd) + Number(cr))*2;
    document.getElementById("txtResult4").innerHTML= "Diện tích:" + s + "<br> Chu vi: " + d;

}

document.getElementById("btnSD").onclick = calcSD;