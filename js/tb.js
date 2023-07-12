/**
 * khối 1: inputs
 *      nhập num1 num 2 num3 num4 num5
 * khối 2: 
 *   tb= (so1 + so2 + so3 + so4 + so5)/5
 * 
 * Khối 3: tb 
 */
function tinhTb() {
    var so1 = document.getElementById("num1").value;
    var so2 = document.getElementById("num2").value;
    var so3 = document.getElementById("num3").value;
    var so4 = document.getElementById("num4").value;
    var so5 = document.getElementById("num5").value;
    
    

    var tb = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5; 
    document.getElementById("txtResult2").innerHTML = "Trung bình 5 số là: " + tb;
    
}
document.getElementById("btnTb").onclick = tinhTb;