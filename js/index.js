var items = document.getElementsByClassName('item');
var itemX = document.getElementsByClassName('itemX');
var misPersonajes = document.getElementById('misPersonajes');
var bins = document.getElementsByClassName('bin');
var valox;
var miFormacionActual = [];
var miFormacionActual2 = [];

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {

       
        if(this.classList.value === 'item pieza'){
            var misPersonajes = document.getElementById('misPersonajes');
            this.classList.remove("item");
            this.classList.remove("pieza");
            this.classList.add("itemX");
            this.classList.add("pieza2");
            misPersonajes.appendChild(this);
            valox = this;
            toItemPush(valox);
            verifyObject();
        }else if (this.classList.value === 'itemX pieza2'){

        var contenedor1 = document.getElementById('contenedor1');
        this.classList.remove("itemX");
        this.classList.remove("pieza2");
        this.classList.add("item");
        this.classList.add("pieza");
        contenedor1.appendChild(this);
        itemToRemove(this);
        verifyObject();
        }
        else{console.log('no')}
  
    });
}

function toItemPush(valox) {
    var valorItem = valox.id;
    miFormacionActual.push(valorItem);
    miFormacionActual = miFormacionActual;
}

//remover items del objeto
function itemToRemove(DChildrenID) {
    const itemsG = miFormacionActual;
    const valuesToRemove = [DChildrenID.id]
    const filteredItems = itemsG.filter(item => !valuesToRemove.includes(item))
    miFormacionActual = filteredItems;
    // console.log('mi formacion actual final', miFormacionActual);
}

//del 2 al 1
function getValue() {

    var DChildren = valox;
    console.log(DChildren);
    var DChildrenID = valox.id;
    var element = document.getElementById(DChildrenID);

    element.onclick = myF();

    function myF() {
        var contenedor1 = document.getElementById('contenedor1');
        DChildren.classList.remove("itemX");
        DChildren.classList.remove("pieza2");
        DChildren.classList.add("item");
        DChildren.classList.add("pieza");
        contenedor1.appendChild(DChildren);
        // toItemPush = undefined;
        itemToRemove(DChildrenID);
    }
    myF();
}
var itemY = document.getElementById('misPersonajes');

for (var i = 0; i < itemY.children.length; i++) {
    itemY.children[i].addEventListener("click", function () {
        console.log(this);
    });
}



function filtro() {
    var personaje = valox.id;
    var misPersonajes = document.getElementById('misPersonajes');
    var itemX = document.getElementsByClassName('itemX');

    miFormacionActual.push(personaje);
    console.log('formacion', Object.values(miFormacionActual));

}

// formaciones
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

//funcion para filtrar alineaciones de personajes
    function verifyObject(){
        var tamañoPersonajes = miFormacionActual;
        console.log(tamañoPersonajes.length)
        if(tamañoPersonajes.length >= 5){
            $( "#contenedor1" ).children().removeClass("item");
            $( "#contenedor1" ).children().addClass("itemblock");
        }
        else{
            $( "#contenedor1" ).children().removeClass("itemblock");
            $( "#contenedor1" ).children().removeClass("pieza");
            $( "#contenedor1" ).children().addClass("item");
            $( "#contenedor1" ).children().addClass("pieza");
        }
        var RedAxe = document.getElementById('RedAxe')
        var RedAxe2 = document.getElementById('RedAxe2')
        // $('#misPersonajes').bind("DOMSubtreeModified",function(){
        //     filtrarFormacion();
        //     console.log('formacion del filtro',miFormacionActual);
        //    });
        // console.log('formacion del filtro',miFormacionActual.length);

        var valores = miFormacionActual;
        console.log(valores);

        var formacionRA = valores.includes('redaxechief');
        var formacionRA2 = valores.includes('redaxechief') || valores.includes('swordman');
   
        if(formacionRA){
        
            RedAxe.classList.remove("d-none");
            RedAxe.classList.add("d-block");
            RedAxe.classList.add("formacionRandom");

        }
        else {
            // console.log('no es igual', RedAxe):
            RedAxe.classList.remove("d-block");
            RedAxe.classList.remove("formacionRandom");
            RedAxe.classList.add("d-none");

        }
        if(formacionRA2){
            RedAxe2.classList.remove("d-none");
            RedAxe2.classList.add("d-block");
            RedAxe2.classList.add("formacionRandom");
        }
        else {
            RedAxe2.classList.remove("d-block");
            RedAxe2.classList.remove("formacionRandom");
            RedAxe2.classList.add("d-none");
        }

    }
function filtrarFormacion(){
    console.log('filtrarFormaicon');
}