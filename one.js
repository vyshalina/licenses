var jsonString = '                          \
{											\
    "lic1": 13,								\
    "lic2": 22,								\
    "lic3": 34,								\
  "sumLicense": [							\
    1,										\
    2,										\
    3,										\
    4,										\
    5,										\
    6,										\
    7,										\
    8,										\
    9,										\
    10 										\
  ]											\
}                                           \
';
var cart = JSON.parse (jsonString);

var html = "";
var obj = cart.sumLicense;
for(var key in obj) {
    html += "<option value=" + obj[key]  + ">" +obj[key] + "</option>"
}
document.licenses.sum.innerHTML = html;
document.getElementById('lic1').value = cart.lic1;
document.getElementById('lic2').value = cart.lic2;
document.getElementById('lic3').value = cart.lic3;

function licenseSum () {
	var a = document.licenses.lic.value;
	var b = document.licenses.sum.value;

	var x = a*b;
	document.getElementById('result').innerHTML = '$' + x + "<sup>US</sup>";

	if (document.getElementById('lic1').checked==true) {document.getElementById('plan').innerHTML = '#1';} else {' '}
	if (document.getElementById('lic2').checked==true) {document.getElementById('plan').innerHTML = '#2';} else {' '}
	if (document.getElementById('lic3').checked==true) {document.getElementById('plan').innerHTML = '#3';} else {' '}
}