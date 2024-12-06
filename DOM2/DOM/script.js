let char1 = document.getElementById('inputChar');
let divA = document.getElementById('divA');
let divB = document.getElementById('divB');
let divC = document.getElementById('divC');
let divD = document.getElementById('divD');

let outputCounter = document.getElementById('outputCounter');

let charCounter = 4;

outputCounter.textContent = charCounter;

let arrChar = ['a', 'b', 'c', 'd'];
let alphaH3 = document.getElementsByTagName('h3');
//FOR => ES6
for (const element of alphaH3){
    if(arrChar.includes(element.textContent)){
        element.style.backgroundColor = 'red';
    }
}

//for (var i = 0; i < alphaH3.length; i++) {
  //  if (arrChar.includes(alphaH3[i].textContent)) {
  //      alphaH3[i].style.backgroundColor = 'red';
  //  }

//}

//IF => ES6
function addNewElement (){
    if ((char1))
}



/*function addNewElement() {

   if ((char1.value.length > 1) || (arrChar.includes(char1.value)) || (char1.value < 'a' || char1.value > 'z')) {
        alert(`You can not add this input ==> ${char1.value}`);
    } else {
        arrChar.push(char1.value);
        charCounter++;
        outputCounter.textContent = charCounter;
        var charDiv = 'div'.concat(char1.value.toUpperCase());

        var nodeH1 = document.createElement('h1');
        var textNodeH1 = document.createTextNode(char1.value);
        nodeH1.appendChild(textNodeH1);

        var nodeDiv = document.createElement('div');
        nodeDiv.setAttribute('id', charDiv);

        nodeDiv.style.display = 'flex';
        nodeDiv.style.justifyContent = 'center';
        nodeDiv.style.alignItems = 'center';
        nodeDiv.style.width = '200px';
        nodeDiv.style.height = '200px';
        nodeDiv.style.border = '2px solid black';
        nodeDiv.style.margin = '5px';

        nodeDiv.appendChild(nodeH1);
        document.getElementsByClassName("sectionRightBottom")[0].appendChild(nodeDiv);

        nodeDiv.style.backgroundColor = 'red';
    }
}*/



function clean() {
    divA.style.backgroundColor = 'white';
    divB.style.backgroundColor = 'white';
    divC.style.backgroundColor = 'white';
    divD.style.backgroundColor = 'white';
}

function highlightChar() {
    clean();
    switch (char1.value) {
        case 'a': divA.style.backgroundColor = 'yellowGreen';
            break;
        case 'b': divB.style.backgroundColor = 'yellowGreen';
            break;
        case 'c': divC.style.backgroundColor = 'yellowGreen';
            break;
        case 'd': divD.style.backgroundColor = 'yellowGreen';
            break;
        default:
            addNewElement();
    }
//FOR=>ES6
    let alphaH3 = document.getElementsByTagName('h3');
      for(const element of alphaH3){
        if (arrChar.includes(element.textContent)){
            element.style.backgroundColor = 'red';
        }
      }
    }

   // for (var i = 0; i < alphaH3.length; i++) {
       // if (arrChar.includes(alphaH3[i].textContent)) {
        //    alphaH3[i].style.backgroundColor = 'red';
     //   }

  //  }



