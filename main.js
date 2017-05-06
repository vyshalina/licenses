var request = new XMLHttpRequest();
request.open('GET', 'license.json');
request.onreadystatechange = function(e) {
    if (this.readyState = 4) {
        if (this.status == 200) {
            var cart = JSON.parse(this.responseText);
            
            //add list of number licenses from JSON
            var html = "";
			var obj = cart.sumLicense;
			for(var key in obj) {
			    html += "<option value=" + obj[key]  + ">" +obj[key] + "</option>"
			}
			document.licenses.sum.innerHTML = html;

			//add value for name="lic" from JSON
			document.getElementById('lic1').value = cart.lic1;
			document.getElementById('lic2').value = cart.lic2;
			document.getElementById('lic3').value = cart.lic3;
        }
        else {
            'Network error'
        }
    }
}
function licenseSum () {
	//sum price
	var a = document.licenses.lic.value;
	var b = document.licenses.sum.value;

	var x = a*b;

	//Output the result
	document.getElementById('result').innerHTML = '$' + x + "<sup>US</sup>";

    //add number for allotted license
	if (document.getElementById('lic1').checked==true) {document.getElementById('plan').innerHTML = '#1';} else {' '}
	if (document.getElementById('lic2').checked==true) {document.getElementById('plan').innerHTML = '#2';} else {' '}
	if (document.getElementById('lic3').checked==true) {document.getElementById('plan').innerHTML = '#3';} else {' '}

	//add class for checked 'lic'
	var check = document.getElementsByName('lic');
    for (var i = 0; i < check.length; i++) {
        if (check[i].type == "radio" && check[i].checked) {
            check[i].parentElement.classList.add("active");
        }
        else {check[i].parentElement.classList.remove("active");}
    }
}
request.send(null);

