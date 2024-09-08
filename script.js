let x =""
const counter =document.getElementById('counter')
const imges =document.querySelectorAll('.mk')
const mainImg =document.getElementById('mainImg')
const cartmodal =document.getElementById('cartmodal')
const product ={name:"",count:x,imges:"",}
console.log()
 function incrementCounter(){
     counter.innerHTML=parseFloat(counter.innerText) + 1
     
     x=counter.innerText
     console.log(product)
     cartmodal.innerText=x
 }
function decrementCounter(){
     if(parseFloat(counter.innerText)>0)
     counter.innerHTML=parseFloat(counter.innerText) -1
     
     if(counter.innerHTML==0){
        cartmodal.innerText="empty"
     }
     else{
        cartmodal.innerText=counter.innerHTML
     }
     
}
function changeImg(e,x){
    mainImg.src=x
    for(let i=0;i<imges.length;i++){
        imges[i].classList.remove("slectedimg")
    }
    e.classList.add("slectedimg")
}
