/**
 * + khối 1: inputs
 * soNgayLam
 * + khối 2: 
 * luong = soNgayLam * 100000
 * + khối 3: 
 * luong
 */

function calcSalary() {
    var soNgayLam = document.getElementById("soNgayLam").value;
    
    var luong = soNgayLam * 100000 ;
    document.getElementById("txtResult1").innerHTML = "Tổng lương: " + luong.toLocaleString();
    
}
document.getElementById("btnSalary").onclick = calcSalary;