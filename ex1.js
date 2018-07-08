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

        console.log("multa: " + getMulta())


    })


    function concat(x, z) {


        let resultado = ""


        for (var i = 0; i < z; i++) {
            resultado += x

        }

        pResult.innerHTML = resultado

    }

}


function getMulta() {
    let multa;
    // let diference = 0;
    // let dataMulta = dataEntrega;
    let date = new Date();

    let date_dia = date.getDate()
    let date_mes = date.getMonth() + 1
    let date_ano = date.getFullYear()

    let dataActual = date_mes + "/" + date_dia + "/" + date_ano;

    // diference = dataActual - dataMulta;

    var date1 = new Date("7/2/2018");
    var date2 = new Date(dataActual);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    multa = diffDays * 1; //valor em euros (um euro de multa por cada dia)

    return diffDays;

}


// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// //DEVOLUÇÕES DE LIVROS
// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// let btnNavDevolucao = document.getElementById("btnNavDevolucao")
// let btnDevolver = document.getElementById("btnDevolver")

// btnNavDevolucao.addEventListener("click", function() {
//     //alert("cliquei")

//     cards.innerHTML = ""

//     //vai buscar todos as listas inseridas na localstorage
//     lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

//     //vai buscar todos as requisições inseridas na localstorage
//     requisicoes = JSON.parse(localStorage.getItem("requisicoes"))
//     requisicoes.sort()


//     let tableReq = "";
//     let tableListaLivros = "";
//     let tituloLivro = ""
//     let modalFooter = ""

//     cards.innerHTML = ''
//     tableReq = `<!--Tabela que carrega todos os pedidos de um utilizador  -->
//         <div id="tableMeusPedidos">
//              <table class="table">
//             <thead class="table-light">
//                 <tr>
//                     <th scope="col">Nº</th>
//                     <th scope="col">Data de requisição</th>
//                     <th scope="col">Livros requisitados</th>
//                     <th scope="col">Entregue em:</th>
//                     <th scope="col">Multa:</th>
//                     <th scope="col">Estado</th>
//                     <th scope="col">Ação</th>
//                 </tr>
//             </thead>
//             <tbody>`

//     //variável que vai receber o id da lista para colocar no id do link "consultar listas"
//     let idLinkLista;
//     let viewButtonDev = ""

//     for (var i = 0; i < requisicoes.length; i++) {

//         for (var k = 0; k < lista_Livros.length; k++) {
//             if (requisicoes[i]._listaId == lista_Livros[k]._id) {
//                 idLinkLista = lista_Livros[k]._id
//             }

//             if (requisicoes[i]._estadoReq == "Activa") {
//                 viewButtonDev = '<input id="btnDevolver" type="submit" class="btn btn-success btn-xs" data-toggle="modal" data-target="#consultarListaModal" value="Devolver" />'
//             }

//         }


//         tableReq += `<tr class="table-light">
//                     <th scope="row">` + requisicoes[i]._id + `</th>
//                     <td>` + requisicoes[i]._data_req + `</td>
//                     <td><a id= "` + idLinkLista + `" href="#" class="linkConsultarLista">Consultar lista</a></td>
//                     <td>` + requisicoes[i]._data_lim + `</td>
//                     <td>Sem multa</td>
//                     <td>Activa</td>
//                     <td>` + viewButtonDev + `</td>
//                 </tr>`

//     }

//     tableReq += `</tbody>
//                      </table></div>`

//     cards.innerHTML = tableReq

//     //cria listener para todos os links "consultar listas"
//     for (var j = 0; j < linkConsultarLista.length; j++) {

//         let idLink = linkConsultarLista[j].getAttribute("id")
//         console.log("getAttribute id: " + idLink)

//         //abre a modal com a lista de livros de uma determinada requisição
//         linkConsultarLista[j].addEventListener("click", function() {
//             console.log("cliquei consultar")

//             //vai buscar todos as listas inseridas na localstorage
//             lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

//             //vai buscar todos os livros inseridos na localstorage
//             let getLivros = JSON.parse(localStorage.getItem("storageFiles"))

//             //abre a modal consultarListaModal
//             $('#consultarListaModal').modal('show')

//             tableListaLivros = `<!--Tabela que carrega todos os livros de uma lista  -->
//                                 <div id="tableListaLivros">
//                                     <table class="table">
//                                     <tbody>`

//             console.log("lista_Livros.length: " + lista_Livros.length)

//             //compara o id do link, com o id da lista de livros
//             //para ir buscar o título do livro e apresentá-lo na tabela

//             for (var i = 0; i < lista_Livros.length; i++) {
//                 console.log("lista_Livros[i]._id: " + lista_Livros[i]._id)
//                 if (idLink == lista_Livros[i]._id) {
//                     for (var k = 0; k < lista_Livros[i]._livroId.length; k++) {
//                         console.log("lista_Livros[i]._livroId[k]: " + lista_Livros[i]._livroId[k].LivroId)

//                         for (var r = 0; r < getLivros.length; r++) {
//                             if (lista_Livros[i]._livroId[k].LivroId == getLivros[r]._id) {
//                                 tituloLivro = getLivros[r]._titulo
//                             }
//                         }

//                         tableListaLivros += `<tr class="table-light">
//                                                     <th scope="row">Titulo: ` + tituloLivro + `                                            
//                                                     <td>
//                                                     <input id="comentario" type="submit" class="btn btn-success btn-xs" value="Comentar" />
//                                                     <input id="pontuacao" type="submit" class="btn btn-success btn-xs" value="Pontuar" />
//                                                     </td>
//                                                     </th>
//                                                     </tr>`

//                     }
//                 }

//             }

//             tableListaLivros += `</tbody>
//                      </table></div>`

//             modalFooter = `<div">
//                               <button type="button" class="btn btn-success btn-xs" data-dismiss="modal">Efetuar devolução</button>
//                               </div>`

//             //coloca a tabela e o footer na modal
//             divListaLivros.innerHTML = tableListaLivros
//             divFooterListaLivros.innerHTML = modalFooter
//         })

//     }

//     //esvazia os arrays
//     lista_Livros = []
//     requisicoes = []
//     tituloLivro = ""
// })

// //ação quando se pretende devolver livros de uma determinada requisição
// // for (var i = 0; i < btnDevolver.length; i++) {

// //     btnDevolver.addEventListener("click", function() {
// //         //abre a modal consultarListaModal
// //         $('#consultarListaModal').modal('show')
// //     })

// // }


// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// //FIM DEVOLUÇÕES DE LIVROS
// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// btnMeusPedidos.addEventListener("click", function() {

//     //vai buscar todos as listas inseridas na localstorage
//     lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

//     //vai buscar todos as requisições inseridas na localstorage
//     requisicoes = JSON.parse(localStorage.getItem("requisicoes"))

//     //vai buscar todos os livros inseridos na localstorage
//     let getLivros = JSON.parse(localStorage.getItem("storageFiles"))


//     // let tableReq = "";
//     // let tableListaLivros = "";
//     // let tituloLivro = ""
//     // let modalFooter = ""

//     cards.innerHTML = ''
//     tableReq = `<!--Tabela que carrega todos os pedidos de um utilizador  -->
//         <div id="tableMeusPedidos">
//              <table class="table">
//             <thead class="table-light">
//                 <tr>
//                     <th scope="col">Nº</th>
//                     <th scope="col">Data de requisição</th>
//                     <th scope="col">Livro requisitado</th>
//                     <th scope="col">Data limite:</th>
//                     <th scope="col">Devolvido em:</th>
//                     <th scope="col"></th>
//                 </tr>
//             </thead>
//             <tbody>`

//     //variável que vai receber o id da lista para colocar no id do link "consultar listas"
//     let idLinkLista;
//     let viewButtonDev = ""
//     let idLivroVBD = ""

//     for (var i = 0; i < requisicoes.length; i++) {

//         for (var k = 0; k < lista_Livros.length; k++) {
//             if (requisicoes[i]._listaId == lista_Livros[k]._id) {
//                 idLinkLista = lista_Livros[k]._id
//                 console.log("idLinkLista: " + idLinkLista)

//                 for (var r = 0; r < getLivros.length; r++) {
//                     console.log("getLivros[r]._id: " + getLivros[r]._id)

//                     if (lista_Livros[idLinkLista - 1]._livroId == getLivros[r]._id) {
//                         tituloLivro = getLivros[r]._titulo
//                             // idLivroVBD = getLivros[r]._id
//                         idLivroVBD = lista_Livros[idLinkLista - 1]._livroId
//                         console.log("tituloLivro: " + tituloLivro)
//                         console.log("idLivroVBD: " + idLivroVBD)
//                     }
//                 }
//                 if (requisicoes[i]._estadoReq == "Activa") {
//                     viewButtonDev = '<input id="' + idLivroVBD + '" type="submit" class="btn btn-success btn-xs btnDevolver" value="Devolver" />'
//                 }
//             }



//         }


//         tableReq += `<tr class="table-light">
//                     <th scope="row">` + requisicoes[i]._id + `</th>
//                     <td>` + requisicoes[i]._data_req + `</td>
//                     <td>` + tituloLivro + `</td>
//                     <td>` + requisicoes[i]._data_lim + `</td>
//                     <td>-</td>
//                     <td>` + viewButtonDev + `</td>
//                 </tr>`

//     }

//     tableReq += `</tbody>
//                      </table></div>`

//     //Insere botão para fazer devolução de livros
//     modalFooter = `<div">
//                         <button type="button" id="btnEfetuarDev" class="btn btn-success btn-xs btnEfetuarDev" data-dismiss="modal">Efetuar devolução</button>
//                         </div>`

//     cards.innerHTML = tableReq
//     divFooterDevolverLivro.innerHTML = modalFooter

//     //let btnDevolver = document.getElementsByClassName("btnDevolver")
//     let btnEfetuarDev = document.getElementsByClassName("btnEfetuarDev")

//     //DEVOLVER LIVRO
//     //ação quando se pretende devolver livros de uma determinada requisição
//     for (let i = 0; i < btnDevolver.length; i++) {

//         btnDevolver[i].addEventListener("click", function() {
//             //vai buscar o id de cada botão correspondente ao id do livro
//             //cardAtribute = btnDevolver[i].getAttribute("id")
//             console.log("id do botão devolver: " + cardAtribute)

//             //abre a modal devolverLivro
//             $('#devolverLivro').modal('show')



//             //vai buscar todos os livros inseridos na localstorage
//             let getLivros = JSON.parse(localStorage.getItem("storageFiles"))
//             let strTitulo = ""
//             for (var i = 0; i < getLivros.length; i++) {
//                 if (cardAtribute = getLivros[i]._id) {
//                     strTitulo = getLivros[i]._titulo
//                 }

//             }

//             divDevolverLivro.innerHTML = strTitulo;

//             // for (var k = 0; k < getLivros.length; k++) {
//             //     if (cardAtribute == getLivros[k]._id) {
//             //         getLivros[k]._disponibilidade = true
//             //     }

//             // }
//             // localStorage.setItem("storageFiles", JSON.stringify(getLivros));
//             //cardAtribute = "";
//         })

//     } //fim ciclo for

//     //FINALIZAR DEVOLUÇÃO
//     //ação quando se pretende devolver livros de uma determinada requisição
//     for (let i = 0; i < btnEfetuarDev.length; i++) {

//         btnEfetuarDev[i].addEventListener("click", function() {
//             //vai buscar o id de cada botão correspondente ao id do livro
//             //cardAtribute = btnDevolver[i].getAttribute("id")
//             console.log("id do botão btnEfetuarDev: " + cardAtribute)

//             for (var k = 0; k < getLivros.length; k++) {
//                 if (cardAtribute == getLivros[k]._id) {
//                     getLivros[k]._disponibilidade = true;
//                 }

//             }
//             localStorage.setItem("storageFiles", JSON.stringify(getLivros));
//             cardAtribute = "";
//         })

//     } //fim ciclo for


//     //esvazia os arrays
//     lista_Livros = []
//     requisicoes = []
//     tituloLivro = ""

// })