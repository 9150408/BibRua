window.onload = function() {

    let txtName = document.getElementById("txtName")
    let btnClica = document.getElementById("btnClica")
    let txtResult = document.getElementById("txtResult")
    let txtNumber = document.getElementById("txtNumber")
    let pResult = document.getElementById("pResult")

    btnClica.addEventListener("click", function() {

        let name = txtName.value
        let number = txtNumber.value
        if (number == "") {
            number = 5
        }
        // txtResult.value = concat(name, number)
        concat(name, number)




    })


    function concat(x, z) {


        let resultado = ""


        for (var i = 0; i < z; i++) {
            resultado += x

        }

        pResult.innerHTML = resultado

    }

}