import computers from list_items_file.js;
//  for the nav bar toggle on mobile
 let toggle=document.querySelector('.toggle')
let header=document.querySelector('header')
let dropdown=document.querySelector('.drop-down ')
let socials=document.querySelector('.socials-ul')
let secondRow=document.querySelector('.second-roww ');
let secondRoww=document.querySelector('.second-row ');
 toggle.addEventListener('click',translate)
 function translate(){
     dropdown.classList.toggle('nav-active');
     secondRow.classList.toggle('nav-active');
     socials.classList.toggle('nav-active');
     header.classList.toggle('header');
     if(secondRow.classList.contains('nav-active')){
        //  console.log('hey')
     }
     else{
        //  console.log('hi')
        secondRow.classList.add('second-roww')
        secondRow.classList.remove('second-row')
     }
     if(secondRow.classList.contains('nav-active')){
         
        secondRow.classList.remove('second-roww')
       secondRow.classList.add('second-row')
    }
    else{
        // console.log('hi')
       secondRow.classList.add('second-roww')
       secondRow.classList.remove('second-row')
    }
 }
 

//  courosel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
   
// footer date
let date=document.querySelector('.datee');
console.log(date)
const dateYear=new Date();
date.textContent=dateYear.getFullYear();
// console.log(date.getFullYear())
 


const computerss=document.querySelector('#computers');
const cardsContainer=document.querySelectorAll('.cardds')
const cards=document.querySelectorAll('.cardd')
const itemNamee=document.querySelectorAll('.item_name')
const price=document.querySelectorAll('.price');

for(var i=0;cards.length  >i;i++){
  // console.log(i);
  let id=i;
  let attr=document.createAttribute('data-id')
  attr.value=id;
  cards[i].setAttributeNode(attr);
   
   let currency='$'
  itemNamee[i].textContent=computers[i].itemName
  price[i].textContent=`${currency}${computers[i].itemPrice}`
}
// for(var i=10;cards.length  >i<20;i++){
//   // console.log(i);
//   let id=i;
//   let attr=document.createAttribute('data-id')
//   attr.value=id;
//   cards[i].setAttributeNode(attr);
//   itemNamee[i].textContent=computers[i].itemName
//   price[i].textContent=computers[i].itemPrice
// }


// for the signup  modal
let signupModal=document.querySelector('.modal-bg');
let signupClose=document.querySelector('.close');
let signupOpen=document.querySelector('#sign_up');
signupOpen.addEventListener('click',()=>{
signupModal.style.display="flex"
});
signupClose.addEventListener('click',()=>{
signupModal.style.display="none"
});
window.onclick = function(event) {

  if (event.target == signupModal) {

    signupModal.style.display = "none";

   }

  

}
// for the cart modal
let cartModal=document.querySelector('.modal-bg-cart');
let cartClose=document.querySelector('.close-cart');
let cartOpen=document.querySelector('#cart');
cartOpen.addEventListener('click',()=>{
cartModal.style.display="flex"
});
cartClose.addEventListener('click',()=>{
cartModal.style.display="none"
});
window.onclick = function(event) {

  if (event.target == cartModal) {

     cartModal.style.display = "none";

   }

  

}
window.onscroll = function(event) {

  if (event.target != cartModal) {

     cartModal.style.display = "none";

   }

  

}
// for search
let filter=document.getElementById('searchh_input');
let filterButton=document.getElementById('searchh_icon');
filter.addEventListener('keyup',filterItems);
function filterItems(e){
e.preventDefault();
 
   
  
  // console.log(computers.length);
  
  for( var o=0; computers.length>o;o++){
    let text=e.target.value.toLowerCase();
      Array.from(computers).forEach( function(item){
        var totalName=item.itemName
        // console.log(totalName)
        // if(totalName.toLowerCase()==text){
        //   console.log('it eist');
        //   console.log(item.id)
        // }
        // else{
        //   console.log('oops')
        // }
        if (totalName.toLocaleLowerCase().indexOf(text)!= -1){
          // console.log("  hey");
        }
      })
  }  
  
  

}



//for cart functionality

let elementboss=document.querySelector('.cart-items');
let listCart=document.querySelectorAll('.ccc ');
let pi=document.querySelectorAll('.price-icon')
// console.log(listCart)
 
// for(var i=0;listCart.length >i;i++){
//   // console.log(i);
// let idd=computers[i].id
//   let attr=document.createAttribute('data-id')
//   // attr.value=computers[i].id;
//   listCart[i].setAttribute("id",attr);
//   console.log(idd)
//   // console.log(computers[i].id)
let attr='';
for(var i=0;listCart.length  >i;i++){
  console.log(i);
  let id=i;
   attr=document.createAttribute('data-id')
  attr.value=id;
  
  listCart[i].setAttributeNode(attr)
}
Array.from(listCart).forEach( function(itemm){

  
   
 

  itemm.addEventListener('click', addToCart);
});
 
function addToCart(){
let newId=this.dataset.id;
 
 let cartItemName=computers[newId].itemName
 let cartItemprice=computers[newId].itemPrice
//  elementt.setAttributeNode(attr);
let elementt=document.createElement('div');
elementt.innerHTML=` <div class="cart-list" id=''>
<div class="img-name-price">
    <img src="" alt="" class="cart-img">
    <div class="name-price">
    <p class="cart-item-name">  ${cartItemName}</p>
    <p class='cart-item-price'>${cartItemprice}</p>
</div>
</div>
<div class="cart-quantity-remove ">
    <div class="quantity">
        <button class="plus-minus" id="minus">&minus;</button><div class="number-items"><p id="num">0</p></div><button id="plus" class="plus-minus">&plus;</button>
    </div>
    <div class="remove"><button class="remove-item">Remove item</button></div>
</div>
</div>`;
const elementid='';
for(var i=0;elementt.length>i;i++){
   elementid=i;
  }
console.log(elementid)
elementt.setAttribute('id',elementid);


// let elementnum=document.querySelector('cart-list');
elementboss.appendChild(elementt);


// for quantity selected
let minus=elementt.querySelectorAll('#minus');
let plus=elementt.querySelectorAll('#plus');
let neutral=elementt.querySelectorAll('.number-item')
let num=document.querySelectorAll('#num');

let numm=0;
for(var i=0;elementt.length>0;i++){
  let numm=i;
 numm++;
 console.log(numm);}
 




let dig=0
function mai( ){
     
    if (dig>=0||dig<=0){
        dig++
    }
    // return dig;
    Array.from(num).forEach( function(itemm){

  itemm.textContent=dig;
});
    // num.textContent=dig;
    if(dig>0){

        // num.style.color='green'
    }
    if(dig==0){
        // num.style.color='blue'
    }
     
}
Array.from(plus).forEach( function(itemm){

  
   
 

  itemm.addEventListener('click', mai);
});
// plus[numm].addEventListener('click',mai);


 

function maii( ){
    
    if ( dig>0){
        dig--
    }
    // return dig;
    Array.from(num).forEach( function(itemm){

      itemm.textContent=dig;
    });
    // num.textContent=dig;
    if(dig<0){
        num.style.color='red'
    }
    if(dig==0){
        num.style.color='blue'
    }
}
Array.from(minus).forEach( function(itemm){

  
   
 

  itemm.addEventListener('click', maii);
});
// minus[numm].addEventListener('click',maii);

// delete

let deletee=document.querySelectorAll('.remove-item');
 



let total=document.querySelector('.totall')
 function sum(){
   totall=0;
   for(var i=0;i<cartItemprice.length;i++){
 
   }
 }
 sum()
  //  total.textContent=sum[cartItemprice];
  let actualElementBoss=document.querySelector('.cart-items');
  var nodes = elementboss.getElementsByClassName("cart-list");
  let numberr=nodes.length
  // nodes.setAttribute('id',)
  for(var i=0; i<nodes.length; i++) {
    let numberr=nodes.length
      // nodes[i].style.background = color;
      // console.log(nodes[i]);
      deletee[i].addEventListener('click',()=>{
        
        // elementt[numberr].remove()
        // actualElementBoss.removeChild(elementt[i])
        console.log(deletee[i].parentElement)
        // console.log(elementt.parentElement)
      })
  }
}
// alternative idea to get the items in the cart:
// create an array, let the array be the cart, push items unto the array,( items that are oushed into the array are the ${elementt}) ; that way u can easily access them using the array properities 


// to get total of items in the cart

//to change currency
