function scrollProgram(){
document.getElementById("program").scrollIntoView({
behavior:"smooth"
});
}

document.getElementById("formDaftar").addEventListener("submit",function(e){

e.preventDefault();

let nama = document.getElementById("nama").value;
let email = document.getElementById("email").value;
let program = document.getElementById("programSelect").value;

if(nama === "" || email === "" || program === ""){
alert("Harap isi semua data terlebih dahulu!");
return;
}

alert("Pendaftaran berhasil! Kami akan menghubungi anda.");

});