var span = document.getElementById("container2")
var carregar = document.getElementById("carregar")
var sec = document.getElementById("stand")
sec.style.display = "none"
span.style.display = "none"


function second(){
    if (sec.style.display == "none") {
        sec.style.display = "flex"
    }
}

function ala() {
    if (span.style.display == "none") {
        span.style.display = "flex"
        carregar.style.display = "flex"
        setTimeout(second,3000)
    }
}
