// 1

// let exo1 = document.querySelectorAll("input")[0];


//  exo1.addEventListener("focus",()=>{
    
//     exo1.style.backgroundColor ="blue"
// })

// // // 2

// let exo2 =document.querySelectorAll("input")[1];

//  exo2.addEventListener("focus",()=>{
    
//     exo2.style.backgroundColor ="blue"
// })

//  exo2.addEventListener("focusout",(e)=>{
    
//     exo2.style.backgroundColor ="white"
// })

// // // 3

// let firstPara = document.querySelectorAll("p")[0];
// console.log(firstPara);
// let secondPara = document.querySelectorAll('p')[1];
// console.log(secondPara);
// let lastPara = document.querySelectorAll('p')[2];
// console.log(lastPara);
// let butt = document.querySelector("button");
// console.log(butt);

// butt.addEventListener("click",()=>{
//     firstPara.innerHTML = secondPara.textContent
//     lastPara.innerHTML = secondPara.textContent
// })



// // 4
// let nameExo4 = document.querySelector("#exo4");
// let myBouton = document.querySelectorAll("input")[2];
// let recupBouton = document.getElementsByClassName("buttonExo btn btn-primary")[1];

// recupBouton.addEventListener("click",()=>{
//     nameExo4.innerHTML = myBouton.value;
// })

// // // 5

// let mybtn3 = document.getElementsByClassName("btn")[2];
// console.log(mybtn3);
// let img1 = document.getElementsByClassName("img-responsive")[0];
// console.log(img1);
// let exo5Para = document.getElementsByTagName("p")[4].innerText;
// console.log(exo5Para);


// mybtn3.addEventListener("click",()=>{

//     let indexPoints = exo5Para.indexOf(".");
//     console.log(indexPoints);

//     let exo5CheminPara = exo5Para.substring(indexPoints);
//     console.log(exo5CheminPara);
//     img1.src = exo5CheminPara;
// })

// // 6

let imgSecond = document.querySelectorAll("img")[1];
let imgthird = document.querySelectorAll("img")[2];

imgSecond.addEventListener('click', ()=>{
    let srcImage =  imgSecond.getAttribute('src')
    imgthird.addEventListener('click', ()=>{
        imgthird.src = srcImage
    })
})

// // 7

let exo7Button = document.querySelectorAll("button.btn")[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
let exo7Temp;


exo7Button.addEventListener("click",()=>{
    exo7Temp = exo7P1.innerText;
    exo7P1.innerText = exo7P2.innerText;
    exo7P2.innerText = exo7Temp;
})


        
    
















