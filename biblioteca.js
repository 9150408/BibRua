//criar um array users
let users = [];
let userId = 0;

//variável que verifica se o utilizador está com login efetuado
let userConected;

//XXXXXXXXXXXXXXXXXX
//Classe user
//XXXXXXXXXXXXXXXXXx

class User {
    //construtor de users
    constructor(nome, morada, email, password, telefone, nif, tipo, cod_postal) {
        this._id = User.getLastId() + 1 //fazer função para obter o último id
        this.nome = nome;
        this.morada = morada;
        this.email = email;
        this.password = password;
        this.telefone = telefone;
        this.nif = nif;
        this.tipo = tipo;
        this.cod_postal = cod_postal

    }

    //propriedade id
    get id() {
        return this._id;
    }

    //propriedade Nome
    get nome() {
        return this._nome;
    }
    set nome(newNome) {
            this._nome = newNome;
        }
        //propriedade Morada
    get morada() {
        return this._morada;
    }
    set morada(newMorada) {
            this._morada = newMorada;
        }
        //propriedade Email
    get email() {
        return this._email;
    }
    set email(newEmail) {
            this._email = newEmail;
        }
        //propriedade Password
    get password() {
        return this._password;
    }
    set password(newPassword) {
            this._password = newPassword;
        }
        //propriedade Telefone
    get telefone() {
        return this._telefone;
    }
    set telefone(newTelefone) {
            this._telefone = newTelefone;
        }
        //propriedade Nif
    get nif() {
        return this._nif;
    }
    set nif(newNif) {
            this._nif = newNif;
        }
        //propriedade Tipo
    get tipo() {
        return this._tipo;
    }
    set tipo(newTipo) {
            this._tipo = newTipo;
        }
        //propriedade id_cod_postal
    get cod_postal() {
        return this._cod_postal;
    }
    set cod_postal(newCodPostal) {
        this._cod_postal = newCodPostal;
    }

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (users.length > 0) {
            lastId = users[users.length - 1]._id;
        }
        return lastId;
    }

}
///////////////////////////
//Fim class User
///////////////////////////



//XXXXXXXXXXXXXXXXXXXXXXX
//Classe Livro
//XXXXXXXXXXXXXXXXXXXXXXX

//criar um array livros
let livros = [];
let livroId = 0;

class Livro {
    //construtor de livros
    constructor(titulo, capa, descricao, autor, dataLancamento, genero, tags, editora, numPaginas, estado, nomeDoador, disponibilidade, dataDoacao, codBiblioteca) {
            this._id = Livro.getLastId() + 1 //fazer função para obter o último id
            this.titulo = titulo;
            this.capa = capa;
            this.descricao = descricao;
            this.autor = autor;
            this.dataLancamento = dataLancamento;
            this.tags = tags;
            this.editora = editora;
            this.numPaginas = numPaginas;
            this.estado = estado;
            this.nomeDoador = nomeDoador;
            this.disponibilidade = disponibilidade;
            this.dataDoacao = dataDoacao;
            this.codBiblioteca = codBiblioteca;
        }
        //propriedade id
    get id() {
        return this._id;
    }

    //propriedade Titulo
    get titulo() {
        return this._titulo;
    }
    set titulo(newTitulo) {
            this._titulo = newTitulo;
        }
        //propriedade Capa
    get capa() {
        return this._capa;
    }
    set capa(newCapa) {
            this._capa = newCapa;
        }
        //propriedade Descrição
    get descricao() {
        return this._descricao;
    }
    set descricao(newDescricao) {
            this._descricao = newDescricao;
        }
        //propriedade Autor
    get autor() {
        return this._autor;
    }
    set autor(newAutor) {
            this._autor = newAutor;
        }
        //propriedade Data de lançamento
    get dataLancamento() {
        return this._dataLancamento;
    }
    set dataLancamento(newDataLancamento) {
            this._dataLancamento = newDataLancamento;
        }
        //propriedade Tags
    get tags() {
        return this._tags;
    }
    set tags(newTags) {
            this._tags = newTags;
        }
        //propriedade Editora
    get editora() {
        return this._editora;
    }
    set editora(newEditora) {
            this._editora = newEditora;
        }
        //propriedade Número de páginas
    get numPaginas() {
        return this._numPaginas;
    }
    set numPaginas(newNumPaginas) {
            this._numPaginas = newNumPaginas;
        }
        //propriedade estado
    get estado() {
        return this._estado;
    }
    set estado(newNumEstado) {
            this._estado = newNumEstado;
        }
        //propriedade Nome do doador do livro
    get nomeDoador() {
        return this._nomeDoador;
    }
    set nomeDoador(newNomeDoador) {
            this._nomeDoador = newNomeDoador;
        }
        //propriedade Disponibilidade
    get disponibilidade() {
        return this._disponibilidade;
    }
    set disponibilidade(newDisponibilidade) {
            this._disponibilidade = newDisponibilidade;
        }
        //propriedade Data de Doação
    get dataDoacao() {
        return this._dataDoacao;
    }
    set dataDoacao(newDataDoacao) {
            this._dataDoacao = newDataDoacao;
        }
        //propriedade Código da biblioteca
    get codBiblioteca() {
        return this._codBiblioteca;
    }
    set codBiblioteca(newCodBiblioteca) {
        this._codBiblioteca = newCodBiblioteca;
    }


    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (livros.length > 0) {
            lastId = livros[livros.length - 1]._id;
        }
        return lastId;
    }
}

///////////////////////////
//Fim da classe Livro
///////////////////////////



//XXXXXXXXXXXXXXXXXXXXXXX
//Classe Biblioteca
//XXXXXXXXXXXXXXXXXXXXXXX

let bibliotecas = [];
let bibliotecaId = 0;

class Biblioteca {
    //construtor de bibliotecas
    constructor(localizacao) {
        this._id = Biblioteca.getLastId() + 1
        this.localizacao = localizacao

    }

    //propriedade localização
    get localizacao() {
        return this._localizacao;
    }
    set localizacao(newLocalizacao) {
        this._localizacao = newLocalizacao;
    }


    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (bibliotecas.length > 0) {
            lastId = bibliotecas[bibliotecas.length - 1]._id;
        }
        return lastId;
    }

}

///////////////////////////
//Fim da classe Biblioteca
///////////////////////////



//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Requisição
//XXXXXXXXXXXXXXXXXXXXXXXXX
let requisicoes = [];
let requisicoesId = 0;

class Requisicoes {
    //construtor de Editoras
    constructor(userId, listaId, estadoReq, dataEntrega, multa) { //vai buscar às outras classes
            this._id = Requisicoes.getLastId() + 1
            this.userId = userId
            this.listaId = listaId
            this.estadoReq = estadoReq
            this._data_req = Requisicoes.getDataActual();
            this._data_lim = Requisicoes.getDataLimite();
            this.dataEntrega = dataEntrega
            this.multa = multa;
        }
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        //criar gets e sets das propriedades do construtor
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooo

    //propriedade userId
    get userId() {
        return this._userId;
    }
    set userId(newUserId) {
        this._userId = newUserId;
    }

    //propriedade livroId
    get listaId() {
        return this._listaId;
    }
    set listaId(newListaId) {
        this._listaId = newListaId;
    }

    //propriedade estadoReq
    get estadoReq() {
        return this._estadoReq;
    }
    set estadoReq(newEstadoReq) {
        this._estadoReq = newEstadoReq;
    }

    //propriedade dataEntrega
    get dataEntrega() {
        return this._dataEntrega;
    }
    set dataEntrega(newDataEntrega) {
        this._dataEntrega = newDataEntrega;
    }

    //propriedade multa
    get multa() {
        return this._multa;
    }
    set multa(newMulta) {
        this._multa = newMulta;
    }

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (requisicoes.length > 0) {
            lastId = requisicoes[requisicoes.length - 1]._id;
        }
        return lastId;
    }

    //função que obtem a data actual
    static getDataActual() {
        let date = new Date();

        let date_dia = date.getDate()
        let date_mes = date.getMonth() + 1
        let date_ano = date.getFullYear()

        let data_req = date_dia + "/" + date_mes + "/" + date_ano

        return data_req;

    }

    //função que obtem a data limite a partir da data actual
    static getDataLimite() {

        let data_lim = new Date();
        data_lim.setDate(data_lim.getDate() + 10); // Adiciona 10 dias

        let date_dia = data_lim.getDate()
        let date_mes = data_lim.getMonth() + 1
        let date_ano = data_lim.getFullYear()

        data_lim = date_dia + "/" + date_mes + "/" + date_ano

        return data_lim;

    }

    // static getMulta(dataEntrega) {
    //     let multa;
    //     let diference = 0;
    //     let dataEntrega = dataEntrega;
    //     let date = new Date();

    //     let date_dia = date.getDate()
    //     let date_mes = date.getMonth() + 1
    //     let date_ano = date.getFullYear()

    //     let dataActual = date_dia + "/" + date_mes + "/" + date_ano;

    //     diference = dataActual - dataEntrega;

    //     return diference;

    // }

}

///////////////////////////
//Fim da classe Requisição
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Reservas
//XXXXXXXXXXXXXXXXXXXXXXXXX
let reservas = [];
let reservasId = 0;

class Reservas {
    //construtor de reservas
    constructor(userId, livroId) { //vai buscar às outras classes
            this._id = Reservas.getLastId() + 1
            this.userId = userId
            this.livroId = livroId
            this._data_res = Reservas.getDataActual();
        }
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        //criar gets e sets das propriedades do construtor
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooo

    //propriedade userId
    get userId() {
        return this._userId;
    }
    set userId(newUserId) {
        this._userId = newUserId;
    }

    //propriedade livroId
    get livroId() {
        return this._livroId;
    }
    set livroId(newLivroId) {
        this._livroId = newLivroId;
    }


    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (reservas.length > 0) {
            lastId = reservas[reservas.length - 1]._id;
        }
        return lastId;
    }

    //função que obtem a data actual
    static getDataActual() {
        let date = new Date();

        let date_dia = date.getDate()
        let date_mes = date.getMonth() + 1
        let date_ano = date.getFullYear()

        let data_res = date_dia + "/" + date_mes + "/" + date_ano

        return data_res;

    }

}

///////////////////////////
//Fim da classe Reservas
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Devoluções
//XXXXXXXXXXXXXXXXXXXXXXXXX
let devolucoes = [];
let devolucoesId = 0;

class Devolucoes {
    //construtor de Editoras
    constructor(userId, Id_req, data_devolucao, multa) { //vai buscar às outras classes
            this._id = Devolucoes.getLastId() + 1
            this.userId = userId
            this.Id_req = Id_req
            this.data_devolucao = data_devolucao
            this.multa = multa
        }
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        //criar gets e sets das propriedades do construtor
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooo

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (devolucoes.length > 0) {
            lastId = devolucoes[devolucoes.length - 1]._id;
        }
        return lastId;
    }
}

///////////////////////////
//Fim da classe Devoluções
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Cod_Postal
//XXXXXXXXXXXXXXXXXXXXXXXXX
///////////////////////////
//Fim da classe Cod_Postal
///////////////////////////

//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Género
//XXXXXXXXXXXXXXXXXXXXXXXXX

let generos = [];
let generosId = 0;

class Generos {
    //construtor de Editoras
    constructor(nome_genero) {
        this._id = Generos.getLastId() + 1
        this.nome_genero = nome_genero
    }


    //propriedade nome_tema
    get nome_genero() {
        return this._nome_genero;
    }
    set nome_genero(newNome_genero) {
        this._nome_genero = newNome_genero;
    }

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (generos.length > 0) {
            lastId = generos[generos.length - 1]._id;
        }
        return lastId;
    }
}
///////////////////////////
//Fim da classe Género
///////////////////////////

//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Editora
//XXXXXXXXXXXXXXXXXXXXXXXXX
let editoras = [];
let editorasId = 0;

class Editoras {
    //construtor de Editoras
    constructor(nome_editora) {
        this._id = Editoras.getLastId() + 1
        this.nome_editora = nome_editora
    }


    //propriedade nome_tema
    get nome_editora() {
        return this._nome_editora;
    }
    set nome_editora(newNome_editora) {
        this._nome_editora = newNome_editora;
    }

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (editoras.length > 0) {
            lastId = editoras[editoras.length - 1]._id;
        }
        return lastId;
    }
}


///////////////////////////
//Fim da classe Editora
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXX
//classe Tema
//XXXXXXXXXXXXXXXXXXXXXXXXX
let temas = [];
let temasId = 0;

class Temas {
    //construtor de temas
    constructor(nome_tema) {
        this._id = Temas.getLastId() + 1
        this.nome_tema = nome_tema
    }


    //propriedade nome_tema
    get nome_tema() {
        return this._nome_tema;
    }
    set nome_tema(newNome_tema) {
        this._nome_tema = newNome_tema;
    }

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (temas.length > 0) {
            lastId = temas[temas.length - 1]._id;
        }
        return lastId;
    }
}

//////////////////////////////
//Fim da classe Tema
/////////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXXXX
//classe Lista_Livros
//XXXXXXXXXXXXXXXXXXXXXXXXXXX
let lista_Livros = [];
let lista_LivrosId = 0;

class Lista_Livros {
    //construtor de listas de livros
    constructor(livroId, estadoLista) { //o estado pode ser pendente ou finalizada
        this._id = Lista_Livros.getLastId() + 1
        this.livroId = livroId
        this.estadoLista = estadoLista
    }


    //propriedade quantidade
    get livroId() {
        return this._livroId;
    }
    set livroId(newLivroId) {
        this._livroId = newLivroId;
    }

    //propriedade quantidade
    get estadoLista() {
        return this._estadoLista;
    }
    set estadoLista(newEstadoLista) {
        this._estadoLista = newEstadoLista;
    }

    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (lista_Livros.length > 0) {
            lastId = lista_Livros[lista_Livros.length - 1]._id;
        }
        return lastId;
    }
}

///////////////////////////
//Fim da classe Lista_Livros
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXXXX
//classe Exemplares
//XXXXXXXXXXXXXXXXXXXXXXXXXXX
let exemplares = [];
let exemplaresId = 0;

class Exemplares {
    //construtor de listas de livros
    constructor() {
        this._id = Exemplares.getLastId() + 1

    }


    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (exemplares.length > 0) {
            lastId = exemplares[exemplares.length - 1]._id;
        }
        return lastId;
    }
}

///////////////////////////
//Fim da classe Exemplares
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXXXX
//classe Comentários
//XXXXXXXXXXXXXXXXXXXXXXXXXXX
let comentarios = [];
let comentariosId = 0;

class Comentarios {
    //construtor de listas de livros
    constructor(userId, livroId, comentario) {
        this._id = Comentarios.getLastId() + 1
        this.userId = userId
        this.livroId = livroId
        this.comentario = comentario
    }

    //propriedade userId
    get userId() {
        return this._userId;
    }
    set userId(newUserId) {
        this._userId = newUserId;
    }

    //propriedade livroId
    get livroId() {
        return this._livroId;
    }
    set livroId(newLivroId) {
        this._livroId = newLivroId;
    }

    //propriedade comentario
    get comentario() {
        return this._comentario;
    }
    set comentario(newComentario) {
        this._comentario = newComentario;
    }


    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (comentarios.length > 0) {
            lastId = comentarios[comentarios.length - 1]._id;
        }
        return lastId;
    }
}

///////////////////////////
//Fim da classe Comentários
///////////////////////////


//XXXXXXXXXXXXXXXXXXXXXXXXXXX
//classe Pontuacao
//XXXXXXXXXXXXXXXXXXXXXXXXXXX
let pontuacao = [];
let pontuacaoId = 0;

class Pontuacao {
    //construtor de listas de livros
    constructor(userId, livroId, pontos) {
        this._id = Pontuacao.getLastId() + 1
        this.userId = userId
        this.livroId = livroId
        this.pontos = pontos
    }

    //propriedade userId
    get userId() {
        return this._userId;
    }
    set userId(newUserId) {
        this._userId = newUserId;
    }

    //propriedade livroId
    get livroId() {
        return this._livroId;
    }
    set livroId(newLivroId) {
        this._livroId = newLivroId;
    }

    //propriedade pontos
    get pontos() {
        return this._pontos;
    }
    set pontos(newPontos) {
        this._pontos = newPontos;
    }


    //função que obtem o último id de um array e retorna ao construtor
    static getLastId() {
        let lastId = 0;
        if (pontuacao.length > 0) {
            lastId = pontuacao[pontuacao.length - 1]._id;
        }
        return lastId;
    }
}

///////////////////////////
//Fim da classe Pontuacao
///////////////////////////


window.onload = function() {
    let cards = document.getElementById("cards")

    //carrega todos os livros
    renderCards()

    // Referências para elementos HTML
    //Navbar
    let navLogin = document.getElementById("navLogin")
    let navLogout = document.getElementById("navLogout")
    let navUser = document.getElementById("navUser")
        //let navRegister = document.getElementById("navRegister")
    let navMeusPedidos = document.getElementById("navMeusPedidos")
    let navCatalogo = document.getElementById("navCatalogo")
    let navSobre = document.getElementById("navSobre")
    let navBibliotecas = document.getElementById("navBibliotecas")
    let navUserRegister = document.getElementById("navUserRegister")
    let navBackOffice = document.getElementById("navBackOffice")
    let navDevolucao = document.getElementById("navDevolucao")
    let formUserType = document.getElementById("formUserType")

    navLogout.style.display = 'none'
        //navInserirLivros.style.display = 'none'
    formUserType.style.display = 'none'
    navMeusPedidos.style.display = 'none'
    navBibliotecas.style.display = 'block'
    navSobre.style.display = 'block'
        //navRegister.style.display = 'none'
    navUserRegister.style.display = 'block'
    navBackOffice.style.display = 'none'
    navDevolucao.style.display = 'none'


    //modais
    let loginModal = document.getElementById("loginModal")
    let registoModal = document.getElementById("registoModal")

    //inputs da modal registo de utilizador
    let inputNome = document.getElementById("inputName")
    let inputMorada = document.getElementById("inputMorada")
    let inputPassword1 = document.getElementById("inputPassword1")
    let inputPassword2 = document.getElementById("inputPassword2")
    let inputTelefone = document.getElementById("inputTelefone")
    let inputNif = document.getElementById("inputNif")
    let inputCod_postal = document.getElementById("inputCod_Postal")
    let frmRegister = document.getElementById("frmRegister")
    let inputEmail = document.getElementById("inputEmail")
    let inputUserType = document.getElementById("inputUserType")
    let inputPassword = "";


    //botões login e registo
    let btnEntrar = document.getElementById("btnEntrar")
    let btnRegistar = document.getElementById("btnRegistar")



    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //Registar utilizadores
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    frmRegister.addEventListener("submit", function(event) {

        let strError = ""
        let userType = "";

        //validar password
        if (inputPassword1.value == inputPassword2.value) {
            inputPassword = inputPassword1.value
        } else {
            strError = "As passwords têm de ser iguais"
        }

        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        //verifica se existe o campo utilizadores na localstorage
        if (localStorage.getItem("utilizadores") === null) {
            console.log("utilizadores: NULL ")

            //Criar o utilizador
            if (strError == "") {


                //condição que atribui o tipo de utilizador num registo de utilizador
                if (inputUserType.value == "-" || inputUserType.value == undefined) {
                    userType = "Utilizador";
                    console.log("inputUserType: " + userType)
                } else {
                    userType = inputUserType.value
                }
                //inputUserType = "Administrador";
                //inputUserType = "Operador";
                //inputUserType = "Utilizador";

                var newUser = new User(inputNome.value, inputMorada.value, inputEmail.value, inputPassword, inputTelefone.value, inputNif.value, userType, inputCod_postal.value)

                // Adicionar ao array
                users.push(newUser)


                //carrega o novo array users na localstorage
                localStorage.setItem("utilizadores", JSON.stringify(users));

                userId = newUser.id
                console.log("admin: " + newUser.tipo)

                //  Alerta de sucesso!
                alert("Registo efetuado com sucesso!!")
                    // Fechar a modal
                $('#registoModal').modal('hide')

                //  ALterar navbar consoante o tipo de login
                if (userConected != true) {
                    if (newUser.tipo == "Administrador") {
                        userConected = true
                        navLogin.style.display = 'none'
                            //navInserirLivros.style.display = 'block'
                            //navRegister.style.display = 'block'
                        navLogout.style.display = 'block'
                        formUserType.style.display = 'block'
                        navSobre.style.display = 'none'
                        navUserRegister.style.display = 'none'
                        navBackOffice.style.display = 'block'
                        navDevolucao.style.display = 'none'

                        console.log("admin: nav bar com login")
                        navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                            newUser.nome + "</a>"
                        navUser.style.display = 'block'
                    } else if (newUser.tipo == "Operador") {
                        userConected = true
                        navLogin.style.display = 'none'
                            //navInserirLivros.style.display = 'block'
                            //navRegister.style.display = 'none'
                        navLogout.style.display = 'block'
                        navSobre.style.display = 'none'
                        navUserRegister.style.display = 'none'
                        navBackOffice.style.display = 'none'
                        navDevolucao.style.display = 'none'

                        console.log("Oper: nav bar com login")
                        navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                            newUser.nome + "</a>"
                        navUser.style.display = 'block'
                    } else if (newUser.tipo == "Utilizador") {
                        userConected = true
                        navLogin.style.display = 'none'
                            //navRegister.style.display = 'none'
                            //navInserirLivros.style.display = 'none'
                        navMeusPedidos.style.display = 'block'
                        navLogout.style.display = 'block'
                        navSobre.style.display = 'none'
                        navUserRegister.style.display = 'none'
                        navBackOffice.style.display = 'none'
                        navDevolucao.style.display = 'block'


                        console.log("User: nav bar com login")
                        navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                            newUser.nome + "</a>"
                        navUser.style.display = 'block'
                    }



                } else {
                    alert(strError)
                    frmRegister.reset()
                    inputNome.focus()
                }
            }

        } else {
            //vai buscar todos os livros inseridos na localstorage
            users = JSON.parse(localStorage.getItem("utilizadores"))

            //Validar se já existe um user com o mesmo email

            let userExist = false
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == inputEmail.value) {
                    userExist = true
                }
            }

            if (userExist == true) {
                strError += "\nEmail já existente!"
            }

            //Criar o utilizador
            if (strError == "") {


                //condição que atribui o tipo de utilizador num registo de utilizador
                if (inputUserType.value == "-" || inputUserType.value == undefined) {
                    userType = "Utilizador";
                    console.log("inputUserType: " + userType)
                } else {
                    userType = inputUserType.value
                }
                //inputUserType = "Administrador";
                //inputUserType = "Operador";
                //inputUserType = "Utilizador";

                var newUser = new User(inputNome.value, inputMorada.value, inputEmail.value, inputPassword, inputTelefone.value, inputNif.value, userType, inputCod_postal.value)

                // Adicionar ao array
                users.push(newUser)

                //carrega o novo array users na localstorage
                localStorage.setItem("utilizadores", JSON.stringify(users));

                userId = newUser.id
                console.log("admin: " + newUser.tipo)

                //  Alerta de sucesso!
                alert("Registo efetuado com sucesso!!")
                    // Fechar a modal
                $('#registoModal').modal('hide')

                //  ALterar navbar consoante o tipo de login
                if (userConected != true) {
                    if (newUser.tipo == "Administrador") {
                        userConected = true
                        navLogin.style.display = 'none'
                            //navInserirLivros.style.display = 'block'
                            //navRegister.style.display = 'block'
                        navLogout.style.display = 'block'
                        formUserType.style.display = 'block'
                        navSobre.style.display = 'none'
                        navUserRegister.style.display = 'none'
                        navBackOffice.style.display = 'block'
                        navDevolucao.style.display = 'none'

                        console.log("admin: nav bar com login")
                        navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                            newUser.nome + "</a>"
                        navUser.style.display = 'block'
                    } else if (newUser.tipo == "Operador") {
                        userConected = true
                        navLogin.style.display = 'none'
                            //navInserirLivros.style.display = 'block'
                            //navRegister.style.display = 'none'
                        navLogout.style.display = 'block'
                        navSobre.style.display = 'none'
                        navUserRegister.style.display = 'none'
                        navBackOffice.style.display = 'none'
                        navDevolucao.style.display = 'none'

                        console.log("Oper: nav bar com login")
                        navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                            newUser.nome + "</a>"
                        navUser.style.display = 'block'
                    } else if (newUser.tipo == "Utilizador") {
                        userConected = true
                        navLogin.style.display = 'none'
                            //navRegister.style.display = 'none'
                            //navInserirLivros.style.display = 'none'
                        navMeusPedidos.style.display = 'block'
                        navLogout.style.display = 'block'
                        navSobre.style.display = 'none'
                        navUserRegister.style.display = 'none'
                        navBackOffice.style.display = 'none'
                        navDevolucao.style.display = 'none'


                        console.log("User: nav bar com login")
                        navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                            newUser.nome + "</a>"
                        navUser.style.display = 'block'
                    }



                } else {
                    alert(strError)
                    frmRegister.reset()
                    inputNome.focus()
                }

            }
        }

        event.preventDefault()
    })


    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //Autenticação do utilizador
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    let frmLogin = document.getElementById("frmLogin")
    let userExists = false

    // SUBMISSÃO DE AUTENTICAÇÃO
    frmLogin.addEventListener("submit", function(event) {

        //esvazia o array para depois carregar os utilizadores a partir da localstorage
        users = []

        //carrega todos os utilizadores da localstorage
        users = JSON.parse(localStorage.getItem("utilizadores"))

        console.log("localstorage email:" + users)

        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        // Iterar sobre o array e verificar se o utilizador já existe
        userExists = false
        let userName = ""
        let userTipo = ""
        for (var i = 0; i < users.length; i++) {
            if (users[i]._email == inputLoginEmail.value && users[i]._password == inputLoginPassword.value) {
                userExists = true
                userId = users[i]._id
                userName = users[i]._nome
                userTipo = users[i]._tipo
                console.log("tipo de utilizador: " + userTipo)
            }
        }
        //console.log(userExists)



        // Se sim, autenticar utilizador
        if (userExists == true) {
            alert("Autenticação efetuado com sucesso!!")
                // Fechar a modal
            $('#loginModal').modal('hide')

            //variável que define se existe um utilizador com login efetuado (para aplicar na criação de registos a partir do administrador )
            userConected = true


            //  ALterar navbar
            if (userTipo == "Administrador") {
                navLogin.style.display = 'none'
                    //navInserirLivros.style.display = 'block'
                    //navRegister.style.display = 'block'
                navLogout.style.display = 'block'
                formUserType.style.display = 'block'
                navSobre.style.display = 'none'
                navUserRegister.style.display = 'none'
                navBackOffice.style.display = 'block'
                navDevolucao.style.display = 'none'

                navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                    userName + "</a>"
                navUser.style.display = 'block'

            } else if (userTipo == "Operador") {
                navLogin.style.display = 'none'
                    //navInserirLivros.style.display = 'block'
                    //navRegister.style.display = 'none'
                navLogout.style.display = 'block'
                navSobre.style.display = 'none'
                navUserRegister.style.display = 'none'
                navBackOffice.style.display = 'none'
                navDevolucao.style.display = 'none'

                navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                    userName + "</a>"
                navUser.style.display = 'block'

            } else if (userTipo == "Utilizador") {
                navLogin.style.display = 'none'
                    //navRegister.style.display = 'none'
                    //navInserirLivros.style.display = 'none'
                navMeusPedidos.style.display = 'block'
                navLogout.style.display = 'block'
                navSobre.style.display = 'none'
                navUserRegister.style.display = 'none'
                navBackOffice.style.display = 'none'
                navDevolucao.style.display = 'none'

                navUser.innerHTML = "<a class='nav-link' href='#'>Bem-vindo, " +
                    userName + "</a>"
                navUser.style.display = 'block'
            }

            // Atualizar o meu catálogo
            //renderCatalog(userId)
        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }
        event.preventDefault()
    })

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // BACK-OFFICE ADMINISTRADOR
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    let btnBackOffice = document.getElementById("btnBackOffice")

    //botão que renderiza os cards do back office
    btnBackOffice.addEventListener("click", function() {
        renderBackOffice()
    })

    let teste = JSON.parse(localStorage.getItem("storageFiles", ))
    let buttonTeste = document.getElementById("buttonTeste")

    buttonTeste.addEventListener("click", function() {
        for (var i = 0; i < teste.length; i++) {

            teste[i]._disponibilidade = true
            var element = teste[i]._disponibilidade;
            console.log("element: " + element)
        }
        localStorage.setItem("storageFiles", JSON.stringify(teste));
    })

    //ARRAY COM TODAS AS CATEGORIAS EXISTENTES NO BACK OFFICE
    let categorias = [{ categoria: "registoUsers", btn: "Gestão de utilizadores", target: "registoModal" }, { categoria: "registoLivros", btn: "Gestão de livros", target: "inserirLivrosModal" }, { categoria: "gerirBibliotecas", btn: "Gestão de bibliotecas", target: "inserirLivrosModal" }]

    function renderBackOffice() {
        //let cards = document.getElementById("cards")



        //limpa a div com os cards para carregar novamente todos os cards da localstorage
        cards.innerHTML = "";

        for (var i = 0; i < categorias.length; i++) {
            cards.innerHTML += `<div id="backOfficecard" class="card-deck col-md-4" col-md-4 style="width: 25rem;">
                    <!-- Card -->
                    <div class="card mb-4">
                        <!--Card image-->
                        <div class="view overlay">
                            <img class="card-img-top" src="userIcon.png" alt="Card image cap" style="height: 25rem;">
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <!--Card content-->
                        <div class="card-body">
                            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                            <button data-toggle="modal" data-target="#` + categorias[i].target + `" type="button" id="` + categorias[i].categoria + `" class="btn btn-light-blue btn-md requisitar">` + categorias[i].btn + `</button>
                        </div>
                    </div>
                    <!-- Card -->
                </div>
                <!-- Card deck -->`
        }

    }


    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // FIM DO BACK-OFFICE ADMINISTRADOR
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // INSERIR LIVROS NO SISTEMA
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //titulo, capa, descricao, autor, dataLancamento, genero,
    //tags, editora, numPaginas, estado, nomeDoador, dataDoacao, codBiblioteca

    //inputs da modal registo de livros
    let inputTitulo = document.getElementById("inputTitulo")
    let inputAutores = document.getElementById("inputAutores")
    let inputGenero = document.getElementById("inputGenero")
    let inputEditora = document.getElementById("inputEditora")
    let inputDescricao = document.getElementById("inputDescricao")
    let inputNumPaginas = document.getElementById("inputNumPaginas")
    let inputDataLancamento = document.getElementById("inputDataLancamento")
    let inputCapa = document.getElementById("inputCapa")
    let inputEstado = document.getElementById("inputEstado")
    let inputTags = document.getElementById("inputTags")
    let inputDoadorName = document.getElementById("inputDoadorName")
    let inputDataDoacao = ""
    let frmInserirLivro = document.getElementById("frmInserirLivro")

    let disponibilidade;

    //Listener do form inserir livros
    frmInserirLivro.addEventListener("submit", function(event) {
        var newLivro;

        //verifica de existe o campo storageFiles na localstorage
        if (localStorage.getItem("storageFiles") === null) {
            console.log("storageFiles: NULL ")
            disponibilidade = true
            newLivro = new Livro(inputTitulo.value, inputCapa.value, inputDescricao.value, inputAutores.value, inputDataLancamento.value, inputGenero.value, inputTags.value, inputEditora.value, inputNumPaginas.value, inputEstado.value, inputDoadorName.value, disponibilidade, inputDataDoacao.value)

            // Adicionar novo livro ao array livros
            livros.push(newLivro)
            localStorage.setItem("storageFiles", JSON.stringify(livros));

        } else {
            //vai buscar todos os livros inseridos na localstorage
            livros = JSON.parse(localStorage.getItem("storageFiles"))
            disponibilidade = true
            newLivro = new Livro(inputTitulo.value, inputCapa.value, inputDescricao.value, inputAutores.value, inputDataLancamento.value, inputGenero.value, inputTags.value, inputEditora.value, inputNumPaginas.value, inputEstado.value, inputDoadorName.value, disponibilidade, inputDataDoacao.value)

            console.log("teste livros")

            // Adicionar novo livro ao array livros
            livros.push(newLivro)

            localStorage.setItem("storageFiles", JSON.stringify(livros));

        }

        //livroId = newUser.id

        //  Alerta de sucesso!
        alert("Registo efetuado com sucesso!!")
            // Fechar a modal
        $('#inserirLivrosModal').modal('hide')


        renderCards()

        event.preventDefault()
    })



    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // LOGOUT
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    navLogout.addEventListener("click", function() {
        userConected = false
        userExists = false
        userId = 0
        navLogin.style.display = 'block'
        navRegister.style.display = 'block'
        navLogout.style.display = 'none'
        navUser.style.display = 'none'

    })


    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // FUNÇÕES
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


    function renderCards() {
        //let cards = document.getElementById("cards")

        //limpa a div com os cards para carregar novamente todos os cards da localstorage
        cards.innerHTML = "";

        //array que recebe os livros da localstorage
        let returnStorage = [];
        let sliceDescricao = "";


        let storageExists = false

        //verifica de existe o campo storageFiles na localstorage
        if (localStorage.getItem("storageFiles") === null) {
            alert("Não existem livros para mostrar!")
            console.log("storageFiles: NULL ")
        } else {
            returnStorage = JSON.parse(localStorage.getItem("storageFiles"))
        }

        if (returnStorage.length != 0) {
            storageExists = true
        }
        console.log("returnStorage: " + returnStorage)

        //variáveis para apresentação dos pontos
        let storagePontos;
        let apresentaPontos = 0;
        let starPontos = "";
        let pontos1 = 0;
        let pontos2 = 0;
        let pontos3 = 0;
        let pontos4 = 0;
        let pontos5 = 0;
        let countPontos = 0;

        //percorre o array returnStorage e imprime a informação nos cards
        for (var i = 0; i < returnStorage.length; i++) {
            //define o tipo de button requisição que irá ser inserido
            let colorButton = ""

            if (returnStorage[i]._disponibilidade == false) {
                colorButton = 'class= "btn btn-danger btn-md requisitar"'
            } else if (returnStorage[i]._disponibilidade == true) {
                colorButton = 'class= "btn btn-success btn-md requisitar"'
            } else {
                colorButton = 'class= "btn btn-warning btn-md requisitar"'
            }


            //verificação do tamanho do campo inputDescricao e apresentação de um máximo de 50 caracteres
            if (returnStorage[i]._descricao.length > 50) {
                sliceDescricao = returnStorage[i]._descricao.slice(0, 50)
                sliceDescricao += "..."

            } else {
                sliceDescricao = returnStorage[i]._descricao
            }


            //inserção das estrelas correspondentes aos pontos de cada livro

            if (localStorage.getItem("pontos") != null) {
                storagePontos = JSON.parse(localStorage.getItem("pontos"));

                for (var d = 0; d < storagePontos.length; d++) {
                    if (returnStorage[i]._id == storagePontos[d]._livroId) {
                        console.log("igual");
                        //contar os pontos de 1 a 5
                        if (storagePontos[d]._pontos == 1) {
                            pontos1 += 1;
                            countPontos++;
                        } else if (storagePontos[d]._pontos == 2) {
                            pontos2 += 2;
                            countPontos++;
                        } else if (storagePontos[d]._pontos == 3) {
                            pontos3 += 3;
                            countPontos++;
                        } else if (storagePontos[d]._pontos == 4) {
                            pontos4 += 4;
                            countPontos++;
                        } else if (storagePontos[d]._pontos == 5) {
                            pontos5 += 5;
                            countPontos++;
                        }
                    }
                }
                if (countPontos == 1) {
                    apresentaPontos = (pontos1 + pontos2 + pontos3 + pontos4 + pontos5)
                } else {
                    apresentaPontos = (pontos1 + pontos2 + pontos3 + pontos4 + pontos5) / countPontos;
                }


                // console.log("apresenta pontos: " + apresentaPontos)

                if (apresentaPontos == 1) {
                    apresentaPontos = 1;
                } else if (apresentaPontos > 1 && apresentaPontos <= 2) {
                    apresentaPontos = 2;
                } else if (apresentaPontos > 2 && apresentaPontos <= 3) {
                    apresentaPontos = 3;
                } else if (apresentaPontos > 3 && apresentaPontos <= 4) {
                    apresentaPontos = 4;
                } else if (apresentaPontos > 4 && apresentaPontos <= 5) {
                    apresentaPontos = 5;
                }
            }

            for (var p = 0; p < apresentaPontos; p++) {
                starPontos += '<span class = "glyphicon glyphicon-star"></span>';
            }

            //criação de cards
            if (returnStorage[i] != "") {

                cards.innerHTML += `<div id="cardLivros" class="card-deck col-md-4" col-md-4 style="width: 25rem;">
                    <!-- Card -->
                    <div class="card mb-4">
                        <!--Card image-->
                        <div class="view overlay">
                            <img class="card-img-top" src="` + returnStorage[i]._capa + `" alt="Card image cap" style="height: 25rem;">
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <!--Card content-->
                        <div class="card-body">
                            <!--Title-->
                            <h5>` + starPontos + `</h5>
                            <h5 style="text-align:left" class="card-title"><b>Título:</b> ` + returnStorage[i]._titulo + `</h5>
                            <h5 style="text-align:left" class="card-title"><b>Autor:</b> ` + returnStorage[i]._autor + `</h5>
                            <!--Text-->
                            <p style="text-align:left" class="card-text"><b>Descrição:</b> ` + sliceDescricao + `</p>
                            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                            <button type="button" id="` + returnStorage[i]._id + `" ` + colorButton + `>Requisitar</button>
                        </div>
                    </div>
                    <!-- Card -->
                </div>
                <!-- Card deck -->`
            } else {
                cards.innerHTML = `<p>Não existem livros para mostrar!<p>`
            }

            //limpa todas as variáveis de cálculo das estrelas
            apresentaPontos = 0;
            starPontos = "";
            pontos1 = 0;
            pontos2 = 0;
            pontos3 = 0;
            pontos4 = 0;
            pontos5 = 0;
            countPontos = 0;
        }

        // console.log("pontos1: " + pontos1)
        // console.log("pontos2: " + pontos2)
        // console.log("pontos3: " + pontos3)
        // console.log("pontos4: " + pontos4)
        // console.log("pontos5: " + pontos5)

        let btnRequisitar = document.getElementsByClassName("requisitar")
            // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRequisitar.length; i++) {
            //adiciona um listener a cada botão
            btnRequisitar[i].addEventListener("click", function() {
                console.log("está a funcionar")

                console.log("userExistsTeste2: " + userExists)

                //vai buscar o id de cada botão correspondente ao id do livro
                cardAtribute = btnRequisitar[i].getAttribute("id")
                    //console.log("cardAtributeRequisitar: " + cardAtribute)

                //abre a modal requisitarModal
                $('#requisitarModal').modal('show')


                //inserção das estrelas correspondentes aos pontos de cada livro

                if (localStorage.getItem("pontos") != null) {
                    storagePontos = JSON.parse(localStorage.getItem("pontos"));

                    for (var d = 0; d < storagePontos.length; d++) {
                        if (returnStorage[i]._id == storagePontos[d]._livroId) {
                            console.log("igual");
                            //contar os pontos de 1 a 5
                            if (storagePontos[d]._pontos == 1) {
                                pontos1 += 1;
                                countPontos++;
                            } else if (storagePontos[d]._pontos == 2) {
                                pontos2 += 2;
                                countPontos++;
                            } else if (storagePontos[d]._pontos == 3) {
                                pontos3 += 3;
                                countPontos++;
                            } else if (storagePontos[d]._pontos == 4) {
                                pontos4 += 4;
                                countPontos++;
                            } else if (storagePontos[d]._pontos == 5) {
                                pontos5 += 5;
                                countPontos++;
                            }
                        }
                    }
                    if (countPontos == 0) {
                        apresentaPontos = 0;
                    } else if (countPontos == 1) {
                        apresentaPontos = (pontos1 + pontos2 + pontos3 + pontos4 + pontos5);
                    } else {
                        apresentaPontos = (pontos1 + pontos2 + pontos3 + pontos4 + pontos5) / countPontos;
                    }


                    // console.log("apresenta pontos: " + apresentaPontos)

                    if (apresentaPontos == 1) {
                        apresentaPontos = 1;
                    } else if (apresentaPontos > 1 && apresentaPontos <= 2) {
                        apresentaPontos = 2;
                    } else if (apresentaPontos > 2 && apresentaPontos <= 3) {
                        apresentaPontos = 3;
                    } else if (apresentaPontos > 3 && apresentaPontos <= 4) {
                        apresentaPontos = 4;
                    } else if (apresentaPontos > 4 && apresentaPontos <= 5) {
                        apresentaPontos = 5;
                    }
                }

                let headerPontos = document.getElementById("headerPontos");

                if (apresentaPontos == 0) {
                    headerPontos.innerHTML = "";
                } else {
                    for (var p = 0; p < apresentaPontos; p++) {
                        starPontos += '<span class = "glyphicon glyphicon-star"></span>';
                    }
                    for (var w = 0; w < apresentaPontos; w++) {
                        headerPontos.innerHTML = starPontos;
                    }
                }


                //limpa todas as variáveis de cálculo das estrelas
                apresentaPontos = 0;
                starPontos = "";
                pontos1 = 0;
                pontos2 = 0;
                pontos3 = 0;
                pontos4 = 0;
                pontos5 = 0;
                countPontos = 0;
            })
        }
    }



    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //PÁGINA DO UTILIZADOR "OS MEUS PEDIDOS"
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    let btnMeusPedidos = document.getElementById("btnMeusPedidos")
    let btnCatalogo = document.getElementById("btnCatalogo")
    let btnLogout = document.getElementById("btnLogout")
    let devolverLivro = document.getElementById("devolverLivro")
    let divDevolverLivro = document.getElementById("divDevolverLivro")
    let divFooterDevolverLivro = document.getElementById("divFooterDevolverLivro")
    let linkConsultarLista = document.getElementsByClassName("linkConsultarLista")
        //let btnDevolver = document.getElementsByClassName("btnDevolver")
        //let cards = document.getElementById("cards")



    let tableReq = "";
    let tableListaLivros = "";
    let tituloLivro = ""
    let modalFooter = ""

    btnMeusPedidos.addEventListener("click", function() {
        let getLivros;

        //vai buscar todos as listas inseridas na localstorage
        lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

        //vai buscar todos as requisições inseridas na localstorage
        requisicoes = JSON.parse(localStorage.getItem("requisicoes"))

        //vai buscar todos os livros inseridos na localstorage
        getLivros = JSON.parse(localStorage.getItem("storageFiles"))


        cards.innerHTML = ''
        tableReq = `<!--Tabela que carrega todos os pedidos de um utilizador  -->
        <div id="tableMeusPedidos">
             <table class="table">
            <thead class="table-light">
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Data de requisição</th>
                    <th scope="col">Livro requisitado</th>
                    <th scope="col">Data limite:</th>
                    <th scope="col">Devolvido em:</th>
                    <th scope="col">Multa:</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>`

        //variável que vai receber o id da lista para colocar no id do link "consultar listas"
        let idLinkLista;
        let viewButtonDev = ""
        let idLivroVBD = ""

        for (var i = 0; i < requisicoes.length; i++) {

            for (var k = 0; k < lista_Livros.length; k++) {
                if (requisicoes[i]._listaId == lista_Livros[k]._id) {
                    idLinkLista = lista_Livros[k]._id
                    console.log("idLinkLista: " + idLinkLista)

                    for (var r = 0; r < getLivros.length; r++) {
                        console.log("getLivros[r]._id: " + getLivros[r]._id)

                        if (lista_Livros[idLinkLista - 1]._livroId == getLivros[r]._id) {
                            tituloLivro = getLivros[r]._titulo
                                // idLivroVBD = getLivros[r]._id
                            idLivroVBD = lista_Livros[idLinkLista - 1]._livroId
                            console.log("tituloLivro: " + tituloLivro)
                            console.log("idLivroVBD: " + idLivroVBD)
                        }
                    }
                    if (requisicoes[i]._estadoReq == "Activa") {
                        viewButtonDev = '<input id="' + idLivroVBD + '" type="submit" class="btn btn-success btn-xs btnDevolver" value="Devolver" />'
                    }
                }



            }


            tableReq += `<tr class="table-light">
                    <th scope="row">` + requisicoes[i]._id + `</th>
                    <td>` + requisicoes[i]._data_req + `</td>
                    <td>` + tituloLivro + `</td>
                    <td>` + requisicoes[i]._data_lim + `</td>
                    <td>` + requisicoes[i]._dataEntrega + `</td>
                    <td>` + requisicoes[i]._multa + ` €</td>
                    <td>` + viewButtonDev + `</td>
                </tr>`

        }

        tableReq += `</tbody>
                     </table></div>`

        //Insere botão para fazer devolução de livros
        modalFooter = `<div">
                        <button type="button" id="` + idLivroVBD + `" class="btn btn-success btn-xs btnEfetuarDev" data-dismiss="modal">Efetuar devolução</button>
                        </div>`

        cards.innerHTML = tableReq
        divFooterDevolverLivro.innerHTML = modalFooter

        let btnDevolver = document.getElementsByClassName("btnDevolver")
        let btnEfetuarDev = document.getElementsByClassName("btnEfetuarDev")

        //DEVOLVER LIVRO
        //ação quando se pretende devolver livros de uma determinada requisição
        for (let i = 0; i < btnDevolver.length; i++) {

            btnDevolver[i].addEventListener("click", function() {
                //vai buscar o id de cada botão correspondente ao id do livro
                cardAtribute = btnDevolver[i].getAttribute("id")
                    //cardAtribute = "2";
                console.log("id do botão devolver: " + cardAtribute)

                //abre a modal devolverLivro
                $('#devolverLivro').modal('show')



                //vai buscar todos os livros inseridos na localstorage
                let getLivros = JSON.parse(localStorage.getItem("storageFiles"))
                let strTitulo = ""
                for (var j = 0; j < getLivros.length; j++) {
                    if (cardAtribute = getLivros[j]._id) {
                        strTitulo = getLivros[j]._titulo
                    }

                }

                divDevolverLivro.innerHTML = strTitulo;

            })

        } //fim ciclo for

        //FINALIZAR DEVOLUÇÃO
        //ação quando se pretende devolver livros de uma determinada requisição
        for (let i = 0; i < btnEfetuarDev.length; i++) {

            btnEfetuarDev[i].addEventListener("click", function() {

                //vai buscar todos as listas inseridas na localstorage
                lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

                //vai buscar todos as requisições inseridas na localstorage
                requisicoes = JSON.parse(localStorage.getItem("requisicoes"))


                //vai buscar o id de cada botão correspondente ao id do livro
                cardAtribute = btnEfetuarDev[i].getAttribute("id")
                console.log("id do botão btnEfetuarDev: " + cardAtribute)

                //altera a disponibilidade do livro
                for (let k = 0; k < getLivros.length; k++) {
                    if (cardAtribute == getLivros[k]._id) {
                        getLivros[k]._disponibilidade = true;
                    }

                }

                //console.log("lista_Livros[0]._livroId" + lista_Livros[0]._livroId)
                //console.log("estadoReq: " + requisicoes[0]._estadoReq)
                let proviListaId;

                //altera o estado da requisição
                for (var t = 0; t < lista_Livros.length; t++) {

                    if (cardAtribute == lista_Livros[t]._livroId) {
                        proviListaId = lista_Livros[t]._id;
                        console.log("provilistaid: " + proviListaId)
                    } else {
                        console.log("Nada para mostrar nas listas")
                    }
                    for (var r = 0; r < requisicoes.length; r++) {
                        if (requisicoes[r]._listaId == proviListaId) {
                            requisicoes[r]._estadoReq = "arquivada";


                            let date = new Date();

                            let date_dia = date.getDate()
                            let date_mes = date.getMonth() + 1
                            let date_ano = date.getFullYear()

                            let dateEntrega = date_dia + "/" + date_mes + "/" + date_ano;
                            let dateEntrega2 = date_mes + "/" + date_dia + "/" + date_ano; //data para calcular o valor da multa

                            requisicoes[r]._dataEntrega = dateEntrega;
                            requisicoes[r]._multa = getMulta(dateEntrega2);

                            console.log("data actual: " + dateEntrega)
                            console.log("estadoReq: " + requisicoes[r]._estadoReq)
                            console.log("multa: " + getMulta(dateEntrega2))
                        } else {
                            console.log("Nada para mostrar nas reqs ")
                        }

                    }
                }


                localStorage.setItem("requisicoes", JSON.stringify(requisicoes));
                localStorage.setItem("storageFiles", JSON.stringify(getLivros));
                cardAtribute = "";

                //fecha a modal devolverLivro
                $('#devolverLivro').modal('hide')

                //reinicia a tabela
                cards.innerHTML = ""
                showPedidos();
            })

        } //fim ciclo for


        //esvazia os arrays
        lista_Livros = []
        requisicoes = []
        tituloLivro = ""

    })


    function showPedidos() {
        //vai buscar todos as listas inseridas na localstorage
        lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

        //vai buscar todos as requisições inseridas na localstorage
        requisicoes = JSON.parse(localStorage.getItem("requisicoes"))

        //vai buscar todos os livros inseridos na localstorage
        getLivros = JSON.parse(localStorage.getItem("storageFiles"))


        cards.innerHTML = ''
        tableReq = `<!--Tabela que carrega todos os pedidos de um utilizador  -->
        <div id="tableMeusPedidos">
             <table class="table">
            <thead class="table-light">
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Data de requisição</th>
                    <th scope="col">Livro requisitado</th>
                    <th scope="col">Data limite:</th>
                    <th scope="col">Devolvido em:</th>
                    <th scope="col">Multa:</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>`

        //variável que vai receber o id da lista para colocar no id do link "consultar listas"
        let idLinkLista;
        let viewButtonDev = ""
        let idLivroVBD = ""

        for (var i = 0; i < requisicoes.length; i++) {

            for (var k = 0; k < lista_Livros.length; k++) {
                if (requisicoes[i]._listaId == lista_Livros[k]._id) {
                    idLinkLista = lista_Livros[k]._id
                    console.log("idLinkLista: " + idLinkLista)

                    for (var r = 0; r < getLivros.length; r++) {
                        console.log("getLivros[r]._id: " + getLivros[r]._id)

                        if (lista_Livros[idLinkLista - 1]._livroId == getLivros[r]._id) {
                            tituloLivro = getLivros[r]._titulo
                                // idLivroVBD = getLivros[r]._id
                            idLivroVBD = lista_Livros[idLinkLista - 1]._livroId
                            console.log("tituloLivro: " + tituloLivro)
                            console.log("idLivroVBD: " + idLivroVBD)
                        }
                    }
                    if (requisicoes[i]._estadoReq == "Activa") {
                        viewButtonDev = '<input id="' + idLivroVBD + '" type="submit" class="btn btn-success btn-xs btnDevolver" value="Devolver" />'
                    }
                }



            }


            tableReq += `<tr class="table-light">
                    <th scope="row">` + requisicoes[i]._id + `</th>
                    <td>` + requisicoes[i]._data_req + `</td>
                    <td>` + tituloLivro + `</td>
                    <td>` + requisicoes[i]._data_lim + `</td>
                    <td>` + requisicoes[i]._dataEntrega + `</td>
                    <td>` + requisicoes[i]._multa + ` €</td>
                    <td>` + viewButtonDev + `</td>
                </tr>`

        }

        tableReq += `</tbody>
                     </table></div>`

        //Insere botão para fazer devolução de livros
        modalFooter = `<div">
                        <button type="button" id="` + idLivroVBD + `" class="btn btn-success btn-xs btnEfetuarDev" data-dismiss="modal">Efetuar devolução</button>
                        </div>`

        cards.innerHTML = tableReq
        divFooterDevolverLivro.innerHTML = modalFooter
    }

    //função que calcula o valor da multa. Necessário passar um parâmetro data (MM,DD,YY)
    function getMulta(dataLim) {
        let multa;
        let date = new Date();

        let date_dia = date.getDate()
        let date_mes = date.getMonth() + 1
        let date_ano = date.getFullYear()

        let dataActual = date_mes + "/" + date_dia + "/" + date_ano;

        var date1 = new Date("7/1/2018");
        //var date1 = new Date(dataLim);
        var date2 = new Date(dataActual);
        var tempoDiferenca = Math.abs(date2.getTime() - date1.getTime());
        var diasDiferenca = Math.ceil(tempoDiferenca / (1000 * 3600 * 24));

        multa = diasDiferenca * 1; //valor em euros (um euro de multa por cada dia)

        return multa;

    }

    btnCatalogo.addEventListener("click", function() {

        cards.innerHTML = ""
        renderCards()

    })

    btnSobre.addEventListener("click", function() {
        cards.innerHTML = ''
        cards.innerHTML = '<h5 id="pSobre">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</h5>'

    })

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //requisitar livros
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    let btnRequisitar = document.getElementsByClassName("requisitar")
    let requisitarModal = document.getElementById("requisitarModal")
    let endRequisicaoModal = document.getElementById("endRequisicaoModal")
    let inRequisitar = document.getElementById("inRequisitar")
    let finalizar = document.getElementById("finalizar")
    let continuar = document.getElementById("continuar")
    let reservaModal = document.getElementById("reservaModal")
    let btnFinalizarReserva = document.getElementById("btnFinalizarReserva")
    let mostrarComentario = document.getElementById("mostrarComentario")
    let todosComentarios = document.getElementById("todosComentarios")
    let todosComentariosModal = document.getElementById("todosComentariosModal")
    let paragrafoTodosComentarios = document.getElementById("paragrafoTodosComentarios")
    let cardAtribute = ""

    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRequisitar.length; i++) {
        //adiciona um listener a cada botão
        btnRequisitar[i].addEventListener("click", function() {
            console.log("está a funcionar")

            console.log("userExistsTeste2: " + userExists)

            //vai buscar o id de cada botão correspondente ao id do livro
            cardAtribute = btnRequisitar[i].getAttribute("id")
                //alert("cardAtribute: " + cardAtribute)

            //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            //altera a cor do botão inRequisitar
            //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

            let verificaDisponibilidade = JSON.parse(localStorage.getItem("storageFiles", ))

            for (var k = 0; k < verificaDisponibilidade.length; k++) {
                let colorButton = ""
                let Value = ""

                if (cardAtribute == verificaDisponibilidade[k]._id && verificaDisponibilidade[k]._disponibilidade == false) {
                    inRequisitar.setAttribute("class", "btn btn-danger")
                    inRequisitar.setAttribute("value", "Reservar livro")

                } else if (cardAtribute == verificaDisponibilidade[k]._id && verificaDisponibilidade[k]._disponibilidade == true) {
                    inRequisitar.setAttribute("class", "btn btn-success")
                    inRequisitar.setAttribute("value", "Requisitar")
                }
            }

            //abre a modal requisitarModal
            $('#requisitarModal').modal('show')


            //Apresentar comentários no card requisitar
            //vai buscar todos os comentarios inseridos na localstorage
            comentarios = JSON.parse(localStorage.getItem("comentarios"));

            let showComment = "";
            for (var z = 0; z < comentarios.length; z++) {
                console.log("cardAtribute: " + cardAtribute)
                console.log("comentarios._livroId: " + comentarios[z]._livroId)
                if (cardAtribute == comentarios[z]._livroId) {
                    showComment = comentarios[z]._comentario;
                }

            }
            showComment += `<a href="#" class="read-more" id="todosComentarios"><span><small> ...ver todos</small></span> <i class="i fa fa-arrow-circle-right"></i></a>`

            console.log("showComment: " + showComment)
            mostrarComentario.innerHTML = showComment;
            $("#todosComentarios").on("click", function() {
                $('#todosComentariosModal').modal('show')

                let agregaComentarios = "";
                for (var u = 0; u < comentarios.length; u++) {
                    if (cardAtribute == comentarios[u]._livroId) {
                        agregaComentarios += comentarios[u]._comentario + `<br>`;
                    }
                }

                paragrafoTodosComentarios.innerHTML = agregaComentarios;
            })
        })
        comentarios = []; //limpa o array
    }

    console.log("userExistsTeste1: " + userExists)


    console.log("userExistsTeste3: " + userExists)
        //efetua a requisição caso o utilizador tenha efetuado login
    inRequisitar.addEventListener("click", function() {

        if (userExists == true || userConected == true) {
            //Fecha a modal requisitarModal
            $('#requisitarModal').modal('hide')

            //seleciona a modal consoante a propriedade "VALUE"
            if (inRequisitar.getAttribute("value") == "Requisitar") {
                //abre a modal selecionar opção
                $('#selectModal').modal('show')
            } else {
                //abre a modal selecionar opção
                $('#reservaModal').modal('show')
            }

            alert("cardAtribute: " + cardAtribute)

            //limpa a variável
            //cardAtribute = ""
        } else {

            alert("Ação não permitida. Efetue login: ")
        }

    })


    let estadoLista = "" //variável que define o estado de uma lista (pode estar pendente ou finalizada)
    let IdLivro; // variável que vai receber os ids dos livros seleccionados para serem requisitados
    var lista; //variável que vai receber a nova lista de livros


    //finalizar lista de livros e requisição
    finalizar.addEventListener("click", function() {

        //verifica se existe o campo lista_Livros na localstorage
        if (localStorage.getItem("listasDeLivros") === null) {
            let estadoLista = "finalizada"

            IdLivro = (cardAtribute) //Este valor vem de cima do btnRequisitar

            let provisoria = JSON.parse(localStorage.getItem("storageFiles", ))

            lista = new Lista_Livros(IdLivro, estadoLista)
            lista_Livros.push(lista)

            for (var i = 0; i < provisoria.length; i++) {

                if (provisoria[i]._id == cardAtribute) {
                    provisoria[i]._disponibilidade = false
                }
            }

            //alterar disponibilidade do livro
            localStorage.setItem("storageFiles", JSON.stringify(provisoria));

            //carrega o novo array lista_Livros na localstorage
            localStorage.setItem("listasDeLivros", JSON.stringify(lista_Livros));

            //altera a disponibilidade do livro na localstorage
            //localStorage.setItem("storageFiles", JSON.stringify(livros));

            lista_Livros = []
            IdLivro = ""
            lista = ""
            provisoria = ""

        } else {
            alert("entrou no else do botão finalizar")
                //vai buscar todos as listas inseridas na localstorage
            lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

            let count = 0

            //procura no array o item com estado pendente
            for (var i = 0; i < lista_Livros.length; i++) {
                console.log("teste ao estado da lista: " + lista_Livros[i]._estadoLista)

                if (lista_Livros[i]._estadoLista == "finalizada") {
                    count += 1
                    console.log("count: " + count)

                } else if (lista_Livros[i]._estadoLista == "pendente") {
                    let estadoLista = "finalizada"

                    //acrescenta um livro ao array de ids
                    lista_Livros[i]._livroId.push({ LivroId: cardAtribute })
                    lista_Livros[i]._estadoLista = estadoLista

                    //alterar disponibilidade do livro
                    let provisoria = JSON.parse(localStorage.getItem("storageFiles", ))

                    for (var i = 0; i < provisoria.length; i++) {

                        if (provisoria[i]._id == cardAtribute) {
                            provisoria[i]._disponibilidade = false
                        }
                    }

                    //carrega o array lista_Livros atualizado na localstorage
                    localStorage.setItem("listasDeLivros", JSON.stringify(lista_Livros));
                    localStorage.setItem("storageFiles", JSON.stringify(provisoria));

                    lista_Livros = []
                    IdLivro = ""
                    lista = ""
                    provisoria = ""
                    break
                }

            }
            if (count == lista_Livros.length) { //significa que não há nenhuma lista pendente e cria uma lista nova

                console.log("entrou no count")
                let estadoLista = "finalizada"
                IdLivro = cardAtribute

                lista = new Lista_Livros(IdLivro, estadoLista)
                lista_Livros.push(lista)

                //alterar disponibilidade do livro
                let provisoria = JSON.parse(localStorage.getItem("storageFiles", ))
                localStorage.setItem("storageFiles", JSON.stringify(provisoria));

                for (var i = 0; i < provisoria.length; i++) {

                    if (provisoria[i]._id == cardAtribute) {
                        provisoria[i]._disponibilidade = false
                    }
                }

                //carrega o novo array lista_Livros na localstorage
                localStorage.setItem("listasDeLivros", JSON.stringify(lista_Livros));
                localStorage.setItem("storageFiles", JSON.stringify(provisoria));

                //limpa variáveis
                lista_Livros = []
                IdLivro = ""
                lista = ""
                provisoria = ""
                count = 0
            }
        }

        //cria a requisição com base nos dados anteriores
        var element;
        let estadoReq;
        let multa = 0;
        let dataEntrega;

        //verifica se existe o campo requisições na localstorage
        if (localStorage.getItem("requisicoes") === null) {

            //vai buscar todos as listas inseridas na localstorage
            lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

            for (var i = 0; i < lista_Livros.length; i++) {
                element = lista_Livros[lista_Livros.length - 1]._id;
                console.log("element: " + element)
            }

            estadoReq = "Activa";
            dataEntrega = "-";
            multa = 0;

            //chama o construtor de requisições
            var requisicao = new Requisicoes(userId, element, estadoReq, dataEntrega, multa)
            requisicoes.push(requisicao)


            //carrega o novo array lista_Livros na localstorage
            localStorage.setItem("requisicoes", JSON.stringify(requisicoes));

            renderCards()
            lista_Livros = []
            requisicoes = []
            IdLivro = ""
            estadoReq = ""
            dataEntrega = "";

        } else {
            alert("entrou no else do requisitar")

            //vai buscar todos as listas inseridas na localstorage
            lista_Livros = JSON.parse(localStorage.getItem("listasDeLivros"))

            //vai buscar todos as requisições inseridas na localstorage
            requisicoes = JSON.parse(localStorage.getItem("requisicoes"))

            for (var i = 0; i < lista_Livros.length; i++) {
                element = lista_Livros[lista_Livros.length - 1]._id;
                console.log("element: " + element)
            }

            estadoReq = "Activa";
            dataEntrega = "-";
            multa = 0;

            //chama o construtor de requisições
            var requisicao = new Requisicoes(userId, element, estadoReq, dataEntrega, multa)
            requisicoes.push(requisicao)

            //carrega o novo array lista_Livros na localstorage
            localStorage.setItem("requisicoes", JSON.stringify(requisicoes));

            renderCards()
            lista_Livros = []
            IdLivro = ""
            requisicoes = []
            estadoReq = ""
            dataEntrega = "";

        }


        $('#endRequisicaoModal').modal('hide')


        //Fecha a modal requisitarModal
        $('#selectModal').modal('hide')

        //let estado = "finalizada"
    })

    //reservas de livros
    btnFinalizarReserva.addEventListener("click", function(event) {
        console.log("estou a reservar o card: " + cardAtribute)

        var reserva;
        let existente = false

        if (localStorage.getItem("Reservas") === null) {

            reserva = new Reservas(userId, cardAtribute)
            reservas.push(reserva)

            //carrega o novo array lista_Livros na localstorage
            localStorage.setItem("Reservas", JSON.stringify(reservas));

            //limpa o array
            reservas = []

        } else {

            alert("Entrei no else reservar.")
            reservas = JSON.parse(localStorage.getItem("Reservas"))
            console.log("userId: " + userId)
            console.log("reservas[i]._userId: " + reservas[0]._userId)
            console.log("cardAtribute: " + cardAtribute)
            console.log("reservas[i]._IdLivro: " + reservas[0]._livroId)


            for (var i = 0; i < reservas.length; i++) {
                if (userId == reservas[i]._userId && cardAtribute == reservas[i]._livroId) {
                    //alert("Já tem uma reserva para o livro selecionado. Verifique a sua lista de reservas.")
                    existente = true
                    break

                } else {
                    alert("segundo else")
                        //break
                }
            }

            if (existente == true) {
                alert("Já tem uma reserva para o livro selecionado. Verifique a sua lista de reservas.")
            } else if (existente == false) {
                reserva = new Reservas(userId, cardAtribute)
                reservas.push(reserva)

                //carrega o novo array lista_Livros na localstorage
                localStorage.setItem("Reservas", JSON.stringify(reservas));

            }
        }

        $('#reservaModal').modal('hide')

        reservas = []
        existente = false

        event.preventDefault()
    })

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //FIM requisitar livros
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //Inserir pontos
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    let btnAtribuirPontos = document.getElementById("btnAtribuirPontos");
    let btnInserirPontos = document.getElementById("btnInserirPontos");
    let pontuacaoModal = document.getElementById("pontuacaoModal");
    let radioBtnPontos = document.getElementById("radioBtnPontos");
    let star = document.getElementsByClassName("star");

    //NOTA: O id do livro mantém-se desde cima
    //for (var i = 0; i < btnAtribuirPontos.length; i++) {
    btnAtribuirPontos.addEventListener("click", function() {
        if (userExists == true) {
            $('#pontuacaoModal').modal('show')
        } else {
            alert("Ação não permitida. Efetue login: ")
            $('#requisitarModal').modal('hide')
        }
    })

    //}

    btnInserirPontos.addEventListener("click", function() {

        let pontos;
        let newPontuacao;
        let validar = false;

        if (localStorage.getItem("pontos") === null) {
            //let provisoria = JSON.parse(localStorage.getItem("storageFiles", ))
            pontos = $('input:radio[name=star]:checked').val();
            console.log("pontos: " + pontos)

            if (pontos == null) {
                alert("escolher opção");
            } else {
                newPontuacao = new Pontuacao(userId, cardAtribute, pontos);
                pontuacao.push(newPontuacao);
                localStorage.setItem("pontos", JSON.stringify(pontuacao))

                $('#pontuacaoModal').modal('hide')
                $('#requisitarModal').modal('hide')
                renderCards();
                pontuacao = []
            }

        } else {

            //vai buscar todos as pontuações inseridas na localstorage
            pontuacao = JSON.parse(localStorage.getItem("pontos"));
            validar = false;
            console.log("pontuacao: " + pontuacao)
            console.log("cardatribute: " + cardAtribute)

            for (var i = 0; i < pontuacao.length; i++) {

                if (userId == pontuacao[i]._userId && cardAtribute == pontuacao[i]._livroId) {
                    alert("já atribuiu uma pontuação a este livro.")
                    validar = false;

                    //limpa os radio buttons
                    for (var i = 0; i < star.length; i++) {
                        if (star[i].checked) {
                            star[i].checked = false;
                        }

                    }

                    $('#pontuacaoModal').modal('hide')
                    $('#requisitarModal').modal('hide')
                    renderCards();
                    pontuacao = []
                } else {
                    validar = true;
                }
            }

            if (validar == true) {

                pontos = $('input:radio[name=star]:checked').val();

                if (pontos == null) {
                    alert("escolher opção");
                } else {
                    console.log("userId: " + userId);
                    console.log("pontuacao.userId: ") + pontuacao.userId;
                    console.log("pontos: " + pontos)
                    newPontuacao = new Pontuacao(userId, cardAtribute, pontos);
                    pontuacao.push(newPontuacao);
                    localStorage.setItem("pontos", JSON.stringify(pontuacao))
                    validar = false;

                    $('#pontuacaoModal').modal('hide')
                    $('#requisitarModal').modal('hide')
                    renderCards();
                    pontuacao = []
                }

            }
        }

        //limpa os radio buttons
        for (var i = 0; i < star.length; i++) {
            if (star[i].checked) {
                star[i].checked = false;
            }

        }
    })

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //Fim inserir pontos
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //Inserir comentários
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    let btnAcederComentario = document.getElementById("btnAcederComentario");
    let btnInserirComentario = document.getElementById("btnInserirComentario");
    let textBoxComment = document.getElementById("textBoxComment");

    btnAcederComentario.addEventListener("click", function(event) {
        if (userExists == true) {
            $('#comentariosModal').modal('show')
        } else {
            alert("Ação não permitida. Efetue login: ")
            $('#requisitarModal').modal('hide')
        }
        $("#textBoxComment").focus();
        event.preventDefault()

    })

    btnInserirComentario.addEventListener("click", function() {
        let coment;
        let newComentario;
        let validarComentario = false;

        if (localStorage.getItem("comentarios") === null) {
            //let provisoria = JSON.parse(localStorage.getItem("storageFiles", ))
            coment = textBoxComment.value;
            // console.log("coment: " + coment)

            if (coment == "") {
                alert("Insira o seu comentário!");
            } else {
                newComentario = new Comentarios(userId, cardAtribute, coment);
                comentarios.push(newComentario);
                localStorage.setItem("comentarios", JSON.stringify(comentarios))

                //limpa a textBox
                //$("#textBoxComment").val("");
                textBoxComment.value = "";

                $('#comentariosModal').modal('hide')
                $('#requisitarModal').modal('hide')
                renderCards();
                comentarios = []
            }


        } else {
            //vai buscar todos os comentarios inseridos na localstorage
            comentarios = JSON.parse(localStorage.getItem("comentarios"));
            validarComentario = false;
            // console.log("pontuacao: " + comentarios)
            // console.log("cardatribute: " + cardAtribute)

            for (var i = 0; i < comentarios.length; i++) {

                if (userId == comentarios[i]._userId && cardAtribute == comentarios[i]._livroId) {
                    alert("já atribuiu uma comentário a este livro.")
                    validarComentario = false;

                    //limpa a textBox
                    //$("#textBoxComment").val("");
                    textBoxComment.value = "";

                    $('#comentariosModal').modal('hide')
                    $('#requisitarModal').modal('hide')
                    renderCards();
                } else {
                    validarComentario = true;
                }
            }

            if (validarComentario == true) {
                coment = textBoxComment.value;
                // console.log("userId: " + userId);
                // console.log("pontuacao.userId: ") + pontuacao.userId;
                // console.log("pontos: " + pontos)

                if (coment == "") {
                    alert("Insira o seu comentário!");
                } else {
                    newComentario = new Comentarios(userId, cardAtribute, coment);
                    comentarios.push(newComentario);
                    localStorage.setItem("comentarios", JSON.stringify(comentarios))
                    validarComentario = false;
                    //limpa a textBox
                    //$("#textBoxComment").val = "";
                    textBoxComment.value = "";
                    $('#comentariosModal').modal('hide')
                    $('#requisitarModal').modal('hide')
                    renderCards();
                    comentarios = []
                }
            }
        }

    })

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //Fim inserir comentários
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    btnLogout.addEventListener("click", function() {
        // cards.innerHTML = ''
        // renderCards()
        location.reload();
    })

}