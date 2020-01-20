

let buttons = document.querySelectorAll("button");



// for(let i =0; i<buttons.length; i++){
//     buttons[i].addEventListener("click",()=>{
//         buttons[i].value += figures.innerHTML;
//     })
// }

const num = (number)=>{

    number.toLocaleString('en');
    let figures = document.querySelector('.figures').innerHTML += num;
}

// const comma = (num)=>{
//     let figures = document.querySelector('.figures').innerHTML += num;

//     return
// }