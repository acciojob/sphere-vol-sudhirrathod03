let btn = document.getElementById("submit")
let radius = document.getElementById("radius")
let volume = document.getElementById("volume")
let myForm = document.getElementById("MyForm")


myForm.addEventListener("submit", (e)=>{
	e.preventDefault();

	volume_sphere()
})
const pi = 3.14;

function volume_sphere() {	
	if(radius.value === ""){
	volume.value = ""
	return;
}
	
let radiusVal = Number(radius.value);
	
if(radiusVal < 0){
	volume.value = "NaN"
}
else{
		let calculatedVolume = (4/3) * pi * radiusVal ** 3
		volume.value = calculatedVolume.toFixed(4)
	}

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
