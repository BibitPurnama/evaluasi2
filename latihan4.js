var jualMobil = {
	Nama: "Tompel",
	Merek: "Avansa",
	Tahun: 2017,
 hasil:function(){
     document.write(`BU , saya ${this.Nama}, jual mobil ${this.Merek} , tahun ${this.Tahun} ,bekas`)
 }
}
console.log(jualMobil.hasil()); 