/**
 * khối 1: inputs:
 *    nhập usd
 * khối 2: 
 *  vnd = usd * 23500
 * khối 3: outputs
 *  vnd
 */

function calcMoney() {
    var usd = document.getElementById("usd").value;

    var vnd = usd * 23500;
    document.getElementById("txtResult3").innerHTML = vnd.toLocaleString() + "VND"
    
}
document.getElementById("btnMoney").onclick = calcMoney;