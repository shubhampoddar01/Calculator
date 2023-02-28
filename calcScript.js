
// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '←':
//                 if(display.innerText){
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             case '=':
//                 display.innerText = eval(display.innerText);
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//         })
// })




let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '←'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})