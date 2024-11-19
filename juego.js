function validarNumeros(e) {
    e.preventDefault()
    const jugador1 = document.getElementById("jugador1").value
    const jugador2 = document.getElementById("jugador2").value
    const alertSuccess = document.getElementById("alertSuccess")
    const alertDanger = document.getElementById("alertDanger")

    if(jugador1 === jugador2) {
        alertSuccess.classList.remove("d-none")
    }else {
        alertDanger.classList.remove("d-none")
    }
    console.log(jugador1)
}