
//Retrieve two groups of elements, items and bins
var items = document.getElementsByClassName('item');
var itemX = document.getElementsByClassName('itemX');
var misPersonajes = document.getElementById('misPersonajes');
var bins = document.getElementsByClassName('bin');


//Register event listeners for onclick event on the items
// for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", selectItem);
// }

// Prevent image dragging, so as to not suggest that items are draggable

// for (var i = 0; i < items.length; i++) {
//     items[i].ondragstart = function () {
//         return false;
//     };
// }

//Register event listeners for onclick on the drop target elements
// for(var i = 0; i < bins.length; i++) {
//   bins[i].addEventListener("click", selectBin);
// }

// Var to store the clicked element's id
// var clickedId = "";

// function selectItem(e) {

//     if (clickedId) {
//         //quita clase cuando se deselecciona el personaje
//         document.getElementById(clickedId).classList.remove("item-selected");
//     }

//     // this es todo el div con el item
//     //clickedId es el id del personaje
//     //si los valores son iguales bora la clase item-select y clickedId se iguala a vacio.
//     if (this == document.getElementById(clickedId)) {
//         document.getElementById(clickedId).classList.remove("item-selected");
//         clickedId = "";

//         for (var i = 1; i < bins.length; i++) {
//             bins[i].classList.remove("bin-selectable");
//         }

//         return;
//     }

//     //se le agrega la clase cuando seleccionas personaje
//     this.classList.add("item-selected");
//     this.classList.add("to-c2");

//     //id del personaje seleccionado
//     clickedId = this.id;
//     var divcom = this.classList;
//     var divH = this.id;

//     for (var i = 1; i < bins.length; i++) {
//         // le agrega la clase al contenedor 2 de bin-selectable
//         bins[i].classList.add("bin-selectable");
//     }

// }

// function selectBin(e) {

//     //si la variable ↓ trae dato
//     if (clickedId) {

//         //div completo junto con id - item
//         // var clickedEl = document.getElementById(clickedId);
//         //clickedEl.parentNode es el div padre del id que es bin contenedor
//         //this = bin contenedor con los divs hijos
//         // if (clickedEl.parentNode == this) {
//         //     return;
//         // }

//         //remueve el personajeid seleccionado de toda la lista
//         // clickedEl.parentNode.removeChild(clickedEl);
//         // clickedEl.classList.remove("item-selected");
//         // clickedId = "";

//         // for (var i = 1; i < bins.length; i++) {
//         //     bins[i].classList.remove("bin-selectable");
//         // }

//         // var contenedor2 = document.getElementById('contenedor2');
//         // contenedor2.appendChild(clickedEl);
//     }
// }

var valox;
//del contenedor 1 al 2
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var misPersonajes = document.getElementById('misPersonajes');
        this.classList.remove("item");
        this.classList.remove("pieza");
        this.classList.add("itemX");
        this.classList.add("pieza2");
        misPersonajes.appendChild(this);
        // console.log(this.classList);
        valox = this;

        filtro();
    });
}

// test2
function getValue() {
   
    var DChildren = valox;
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
    }
}
function filtro(){
    
}

//del 2 al 1 - funciona pero con un bug
// function getValue(valor) {
//     var DChildren = valor.children[0];
//     var DChildrenID = DChildren.id
//     var element = document.getElementById(DChildrenID);
//     console.log(element)

//     element.onclick = myF();
//     function myF() {
//         var contenedor1 = document.getElementById('contenedor1');
//         DChildren.classList.remove("itemX");
//         DChildren.classList.remove("pieza");
//         DChildren.classList.add("item");
//         DChildren.classList.add("pieza");
//         contenedor1.appendChild(DChildren);
//     }
// }

// for (var j = 0; j < items.length; j++) {
//     items[j].addEventListener("click", toC1);
// }