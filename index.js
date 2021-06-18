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
 
//objects for the cart items
const computers=[
   {
     id:1,
     itemName:'Hp pavilion 15',
     itemPrice:'499.99',
     description:''
   }
   ,{
    id:2,
    itemName:'Lenovo Ideapad L3 ',
    itemPrice:'399.99',
    description:''
  }
,{
  id:3,
  itemName:'Asus X515JA-BR068T ',
  itemPrice:'359.99',
  description:''
},{
  id:4,
  itemName:'HP Envy',
  itemPrice:'699.99',
  description:''
},{
  id:5,
  itemName:'Asus VivoBook  ',
  itemPrice:'549.99 ',
  description:''
},{
  id:6,
  itemName:'Zinox Ultrabook 14 Inch ',
  itemPrice:'149.99 ',
  description:''
},{
  id:7,
  itemName:'Lenovo 100E Intel Celeron N4000 ',
  itemPrice:'299.99 ',
  description:''
},{
  id:8,
  itemName:'HP Stream 11 Intel Celeron',
  itemPrice:'749.99',
  description:''
},{
  id:9,
  itemName:'Dell Vostro 3500 ',
  itemPrice:'159.99 ',
  description:''
},{
  id:10,
  itemName:'HP Omen Gaming 15.6" ',
  itemPrice:'999.99 ',
  description:''
},
// ]
// const Fashion=[
  {
    id:11,
    itemName:"Addidas men's slides",
    itemPrice:'39.99',
    description:''
  }
  ,{
   id:12,
   itemName:'vintage shirt for men',
   itemPrice:'9.99',
   description:''
 }
,{
 id:13,
 itemName:'ladies high heel slippers ',
 itemPrice:'14.99',
 description:''
},{
 id:14,
 itemName:'niker shorts set',
 itemPrice:'4.99',
 description:''
},{
 id:15,
 itemName:' women hand bag  ',
 itemPrice:'49.99 ',
 description:''
},{
 id:16,
 itemName:'ray ban sun glasses ',
 itemPrice:'149.99 ',
 description:''
},{
 id:17,
 itemName:'ankara fabrics 6 yards ',
 itemPrice:'2.99 ',
 description:''
},{
 id:18,
 itemName:'D&G loafers',
 itemPrice:'749.99',
 description:''
},{
 id:19,
 itemName:'silver necklace ',
 itemPrice:'9.99 ',
 description:''
},{
  id:20,
  itemName:'Air max shoes ',
  itemPrice:'999.99 ',
  description:''
 },{
 id:21,
 itemName:'samsung galaxy A12',
 itemPrice:'649.99 ',
 description:''
},
{
  id:22,
  itemName:"tecno spark go",
  itemPrice:'539.99',
  description:''
}
,{
 id:23,
 itemName:'xaomi redmi note 10',
 itemPrice:'749.99',
 description:''
}
,{
id:24,
itemName:'infinix smart HD',
itemPrice:'214.99',
description:''
},{
id:25,
itemName:'vivo Y20',
itemPrice:'214.99',
description:''
},{
id:26,
itemName:'Iphone 13 pro max ',
itemPrice:'1249.99 ',
description:''
},{
id:27,
itemName:'zinox zpad X8 ',
itemPrice:'149.99 ',
description:''
},{
id:28,
itemName:'wireless intercom ',
itemPrice:'452.99 ',
description:''
},{
id:29,
itemName:'samsung galaxy A1',
itemPrice:'749.99',
description:''
},{
id:30,
itemName:'silver necklace ',
itemPrice:'9.99 ',
description:''
},
{
  id:31,
  itemName:'samsung galaxy A12',
  itemPrice:'649.99 ',
  description:''
 },
 {
   id:32,
   itemName:"tecno spark go",
   itemPrice:'539.99',
   description:''
 }
 ,{
  id:33,
  itemName:'xaomi redmi note 10',
  itemPrice:'749.99',
  description:''
 }
 ,{
 id:34,
 itemName:'infinix smart HD',
 itemPrice:'214.99',
 description:''
 },{
 id:35,
 itemName:'vivo Y20',
 itemPrice:'214.99',
 description:''
 },{
 id:36,
 itemName:'Iphone 13 pro max ',
 itemPrice:'1249.99 ',
 description:''
 },{
 id:37,
 itemName:'zinox zpad X8 ',
 itemPrice:'149.99 ',
 description:''
 },{
 id:38,
 itemName:'wireless intercom ',
 itemPrice:'452.99 ',
 description:''
 },{
 id:39,
 itemName:'samsung galaxy A1',
 itemPrice:'749.99',
 description:''
 },{
 id:40,
 itemName:'silver necklace ',
 itemPrice:'9.99 ',
 description:''
 },{
 id:41,
 itemName:'Air max shoes ',
 itemPrice:'999.99 ',
 description:''
 },{
 id:42,
 itemName:' ',
 itemPrice:' ',
 description:''
 },{
id:43,
itemName:'Air max shoes ',
itemPrice:'999.99 ',
description:''
},{
id:44,
itemName:' ',
itemPrice:' ',
description:''
},
{
  id:45,
  itemName:'Air max shoes ',
  itemPrice:'999.99 ',
  description:''
 },{
  
    id:46,
    itemName:'Air max shoes ',
    itemPrice:'999.99 ',
    description:''
   },{
    id:47,
    itemName:'Air max shoes ',
    itemPrice:'999.99 ',
    description:''
   },{
    id:48,
    itemName:'Air max shoes ',
    itemPrice:'999.99 ',
    description:''
   },{
    id:49,
    itemName:'Air max shoes ',
    itemPrice:'999.99 ',
    description:''
   },{
    id:50,
    itemName:'Air max shoes ',
    itemPrice:'999.99 ',
    description:''
   }
];

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

<<<<<<< HEAD
 
  const cartItems = document.getElementsByClassName('cart-items')
  cartItems[0].addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      // elementboss.removeChild(elementt)
      e.target.parentElement.parentElement.parentElement.remove()
  }
  })
  
 
 
=======
let deletee=document.querySelectorAll('.remove-item');
 
>>>>>>> 3e2489b357f1b8e9c30d8a84a34c98491e009093



 
  
}
// alternative idea to get the items in the cart:
// create an array, let the array be the cart, push items unto the array,( items that are oushed into the array are the ${elementt}) ; that way u can easily access them using the array properities 


// to get total of items in the cart

//to change currency
