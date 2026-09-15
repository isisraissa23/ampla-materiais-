// ==================================================
// MENU MOBILE
// ==================================================

const menuMobile =
    document.getElementById("menuMobile");

const menuContainer =
    document.getElementById("menuContainer");


menuMobile.addEventListener("click", function () {

    menuContainer.classList.toggle("ativo");

});



// ==================================================
// FECHAR MENU AO CLICAR
// ==================================================

const linksMenu =
    menuContainer.querySelectorAll("a");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menuContainer.classList.remove("ativo");

    });

});



// ==================================================
// FORMULÁRIO → WHATSAPP
// ==================================================

const formulario =
    document.getElementById("formContato");


const mensagemSucesso =
    document.getElementById("mensagemSucesso");


formulario.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const nome =
            document.getElementById("nome")
            .value
            .trim();


        const telefone =
            document.getElementById("telefone")
            .value
            .trim();


        const assunto =
            document.getElementById("assunto")
            .value;


        const mensagem =
            document.getElementById("mensagem")
            .value
            .trim();



        // VERIFICAR CAMPOS

        if (
            nome === "" ||
            telefone === "" ||
            assunto === "" ||
            mensagem === ""
        ) {

            alert(
                "Por favor, preencha todos os campos."
            );

            return;

        }



        // MENSAGEM

        const textoWhatsApp =

`Olá, AMPLA Materiais para Construção! 👋

Meu nome é ${nome}.

Telefone: ${telefone}

Tenho interesse em:
${assunto}

Mensagem:
${mensagem}`;



        // CODIFICAR MENSAGEM

        const mensagemCodificada =
            encodeURIComponent(
                textoWhatsApp
            );



        // MOSTRAR AVISO

        mensagemSucesso.style.display =
            "block";



        // ABRIR WHATSAPP

        setTimeout(function () {

            window.open(

                `https://wa.me/5575998876778?text=${mensagemCodificada}`,

                "_blank"

            );

        }, 700);

    }
);



// ==================================================
// ANIMAÇÃO AO ROLAR
// ==================================================

const elementos =
    document.querySelectorAll(

        ".produto-card, " +
        ".servico, " +
        ".sobre-texto, " +
        ".contato-info"

    );



elementos.forEach(function (elemento) {

    elemento.classList.add("revelar");

});



// ==================================================
// OBSERVADOR
// ==================================================

const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (
                    entrada.isIntersecting
                ) {

                    entrada.target
                        .classList
                        .add("ativo");

                }

            });

        },

        {
            threshold: 0.15
        }

    );



elementos.forEach(function (elemento) {

    observador.observe(elemento);

});



// ==================================================
// TESTE
// ==================================================

console.log(
    "Site AMPLA carregado com sucesso!"
);