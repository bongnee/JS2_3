/**
 * khối 1: inputs
 *   nhập số ab 
 * khối 2 
 *   int so_hang_dv = ab % 10 
 *   int so_hang_chuc = ab / 10
 *   tong = so_hang_dv + so_hang_chuc
 * 
 * khối 3: output 
 *    tong
 */

function calcTong() {
    var so = document.getElementById("soAB").value;
    

    var tong = (so % 10) + (so / 10);
    
    document.getElementById("txtResult5").innerHTML = "Tổng 2 ký số: " + tong;
}

document.getElementById("btnTong").onclick = calcTong;