bil1=120  
bil2=240;
var a, b, c = bil1*bil2, d;
for(i = 1; i  <= c; i++){
a = i%bil1;
b = i%bil2;
if (a == 0 && b == 0 ) {
	hasil= i;
	break;
}
}
document.write(' KPK adalah  ' +  hasil ) // KPK nya
document.write('<br>')
bil1 = 120;
bil2 = 240;
function fpb (bil1, bil2) {
	var hasil = 0;
	for(var i = 1; i < bil2; i++){
		if(bil1%i === 0 &&
			bil2%i === 0) {
			hasil = i;
		}
}
return hasil;
}
document.write(' FPB adalah ' +  fpb(120, 240))
