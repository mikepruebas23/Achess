$(document).ready(function () {

    let personaje = [{
            Nombre: 'AbyssalCrawler',
        },
        {
            Nombre: 'FallenWitcher',
        },
        {
            Nombre: 'GodOfWar',
        },
        {
            Nombre: 'HellKnight',
        },
        {
            Nombre: 'PirateCaptain',
        },
    ]
    let Formacion1 = [{
            Nombre: 'AbyssalCrawler',
            src: './images/AbyssalCrawler.png'

        },
        {
            Nombre: 'FallenWitcher',
            src: 'images/FallenWitcher.png'
        },
        {
            Nombre: 'GodOfWar',
            src: 'images/GodOfWar.png'
        },
        {
            Nombre: 'HellKnight',
            src: 'images/HellKnight.png'
        },
        {
            Nombre: 'PirateCaptain',
            src: 'images/PirateCaptain.png'
        },
        {
            Nombre: 'PirateCaptain',
            src: 'images/Ripper.png'
        },
        {
            Nombre: 'PirateCaptain',
            src: 'images/Swordman.png'
        },
        {
            Nombre: 'PirateCaptain',
            src: 'images/TabooWitcher.png'
        },
        {
            Nombre: 'PirateCaptain',
            src: 'images/TheSource.png'
        },
        {
            Nombre: 'PirateCaptain',
            src: 'images/ThunderSpirit.png'
        },
    ]

    function hola() {
        for (i = 0; i < Formacion1.length; i++) {
            let formaciones = $('#formaciones');

            var div = document.createElement("div");
            div.classList.add("item3");
            div.classList.add("pieza3");

            var img = document.createElement("img");
            img.setAttribute('src', Formacion1[i].src);
            div.append(img);

            formaciones.append(div);
        }
    }

    hola();
    var misPersonajes = document.getElementById('misPersonajes');

    function filtroFormaciones() {
        console.log('funciona');
    }


    // console.log('formaciones',Formacion1);
    // console.log('personajes',personaje);

});