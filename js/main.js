// Languages switch
const languages__select = document.querySelector(".languages__select");
const burger = document.querySelector(".burger__icon");
const burgerBlock = document.querySelector(".burger__background_block");
const wrapper = document.querySelector(".wrapper");
let body = document.querySelector("body");
let loader;
let header;
let headerLinks;
let digitalTitle = document.querySelector(".digital__title");
let digitalSubtitle = document.querySelector(".digital__subtitle");
let directionPrice = document.querySelectorAll(".direction__price");
let directionTitle2 = document.querySelectorAll(".direction__item_title");
let coursesTitle = document.querySelectorAll(".direction__item_title2");
let coursesSignUp = document.querySelectorAll(".stack__sign_up");
const select_img = document.querySelector(".select-img");
// let inp = document.querySelectorAll("#input-value");
let inputValue = document.querySelectorAll("#input-value");
let signUpValue =document.querySelectorAll('#sign-input-value')
let footerReserved = document.querySelectorAll(".footer__reserved");
let footerLinks = document.querySelectorAll(".footer__links");
// burger background
let burgerBack = document.querySelectorAll(".burger__back");
let burgerMenuBlock = document.querySelector(".burger__menu"); 
// burger button
let burgerBtn = document.querySelector(".burger__icon");
// buger main block
let burgerWrapper = document.querySelector(".burger__block");
console.log( inputValue);
// burger listener
burgerBtn.addEventListener("click", function () {
  

       if(burgerMenuBlock.classList.contains('burger-block-active')){
        burgerMenuBlock.classList.remove('burger-block-active')
        burgerBtn.children[1].style.display = 'block'
        burgerBtn.children[2].style.marginTop = '6px'
        burgerBtn.children[0].style.transform = 'rotate(0deg)'
        burgerBtn.children[2].style.transform = 'rotate(0deg)'
        body.style.overflow = '' 
       }else{
        burgerMenuBlock.classList.add('burger-block-active')
        burgerBtn.children[1].style.display = 'none'
        burgerBtn.children[0].style.transform = 'rotate(45deg)'
        burgerBtn.children[2].style.transform = 'rotate(-45deg)'

         
        // backdrop-filter: blur(10px);
        header.style.backdropFilter = "blur(0px)";
        burgerBtn.children[0].style.marginTop = "1px";
        // burgerBtn.children[1].style.marginTop = "1px";
        burgerBtn.children[2].style.marginTop = "-3px";
        body.style.overflow = 'hidden'
        burgerBtn.style.marginTop = '25px'
   

       }
   
  
  
        
    
       
          

  
  
  



   
      
    
 
});


const languages_modal = document.querySelector(".languages-modal");
const signUpModal = document.querySelector(".sign__up_modal");
const signUpOpenBtn = document.querySelectorAll("#sign_up");
const signUpCloseBtn = document.querySelector(".modal__close");

signUpOpenBtn.forEach((btn) => {

  
  btn.addEventListener("click", function () {
    console.log(signUpOpenBtn);
    signUpModal.classList.remove("modal-close");
    signUpModal.classList.add("modal-active");
    body.style.overflow = "hidden";
  });
});

signUpCloseBtn.addEventListener("click", function () {
  signUpModal.classList.add("modal-close");
  signUpModal.classList.remove("modal-active");
  body.style.overflow = "";
});

languages__select.onclick = () => {
  select_img.classList.toggle("select-img_active");
  languages_modal.classList.toggle("languages-modal_active");
};

// animation onload

window.addEventListener("load", function () {
  const sequnce = new Promise(function (resolve, reject) {
    // Preloader
    setTimeout(() => {
      // let body = document.querySelector("body");
      loader = document.querySelector(".preloader");
      body.classList.add("body-active");

      loader.classList.add("hide");
      resolve(loader);
    }, 1000);
  });
  // main page animation
  sequnce.then((loader) => {
    setTimeout(() => {
      const didgital = document.querySelector(".main__digital");

      // selectors
      headerLinks = document.querySelector(".header__navbar");
      const headerPhone = document.querySelector(".header__phone");
      //   const headerNumber = document.querySelector('')
      const logo = document.querySelector(".logo");
      header = document.querySelector(".header");
      const lines = document.querySelectorAll(".lines");

      lines[0].classList.add("one-active");
      lines[1].classList.add("two-active");
      lines[2].classList.add("three-active");
      lines[3].classList.add("four-active");
      lines[4].classList.add("five-active");
      lines[5].classList.add("six-active");
      lines[6].classList.add("seven-active");
      // lines[7].classList.add("eight-active");
      // lines[8].classList.add("nine-active");

      logo.classList.add("logo-active");
      //   links-active
      headerLinks.children[0].classList.add("links-active");
      headerLinks.children[1].classList.add("links-active");
      headerLinks.children[2].classList.add("links-active");
      headerLinks.children[3].classList.add("links-active");
      //   phone-active
      headerPhone.children[0].classList.add("number-active");
      headerPhone.children[1].classList.add("number-active");
      didgital.classList.add("digital-active");
    }, 0);
  });
});

// scroll animation
window.addEventListener("scroll", function () {
  const line = document.querySelector(".direction-background");
  const scrollX = this.pageYOffset;
  // line active
  if (scrollX === 1000) {
    line.classList.add("line-active");
  }
});

// burger animation
burger.addEventListener("click", function () {});

// change langue

let langSelect = document.querySelectorAll(".lng__select");

let langTitle = document.querySelector(".lg");

function changeLanguage(lang) {
  // change header links
  document.querySelector(".lng").innerHTML = langArr["language"][lang];
  headerLinks.children[0].innerHTML = langArr["header"][lang];
  headerLinks.children[1].innerHTML = langArr["header"][lang];
  headerLinks.children[2].innerHTML = langArr["header"][lang];
  headerLinks.children[3].innerHTML = langArr["header"][lang];
  // change digital block
  digitalTitle.innerHTML = langArr["main-title"][lang];
  digitalSubtitle.innerHTML = langArr["main-subtitle"][lang];
  // direction change
  document.querySelector(".direction__title").innerHTML =
    langArr["direction-title"][lang];
  for (let item of directionPrice) {
    item.innerHTML = langArr["direction-price"][lang];
  }
  for (let item of directionTitle2) {
    item.innerHTML = langArr["direction-title2"][lang];
  }
  for (let item of coursesTitle) {
    item.innerHTML = langArr["courses-title"][lang];
  }
  for (let item of coursesSignUp) {
    item.innerHTML = langArr["courses-sign-up"][lang];
  }
  document.querySelector(".contact__title").innerHTML =
    langArr["our-contact"][lang];
  document.querySelector(".input__title").innerHTML =
    langArr["input-title"][lang];
  // all reserved change
  footerReserved[1].innerHTML = langArr["reserved-subtitle"][lang];
  // footer change
  for (let item of footerLinks) {
    item.innerHTML = langArr["footer"][lang];
  }
  document.querySelector(".footer__title").innerHTML =
    langArr["footer-title"][lang];
  document.querySelector(".footer__subtitle").innerHTML =
    langArr["footer-subtitle"][lang];
}
// Russian language
langSelect[0].addEventListener("click", function () {

  changeLanguage("RU");
  // input change
  // inp[0].innerText = "Ваше имя";
  // inp[1].innerText = "Номер телефона";
  // inp[2].innerText = "Комментарий"
  inputValue[0].innerText = "Ваше имя";
  inputValue[1].innerText = "Номер телефона";
  inputValue[1].innerText = "Комментарий";
  signUpValue[0].innerText = 'Ваше имя'
  signUpValue[1].innerText = 'Номер телефона'
  signUpValue[2].innerText = 'Email'

  languages_modal.classList.toggle("languages-modal_active");
  select_img.classList.toggle("select-img_active");
});

// Uzbek change language
langSelect[1].addEventListener("click", function () {
  changeLanguage("UZB");
  // input change
  // inp[0].setAttribute("placeholder", "Ismingiz");
  // inp[1].setAttribute("placeholder", "Telefon raqamingiz");
  // inp[2].setAttribute("placeholder", "Izohingiz");
  inputValue[0].innerText ="Ismingiz";
  inputValue[1].innerText ="Nomeringiz";
  inputValue[2].innerText ="Izohingiz";
  signUpValue[0].innerText = 'Ismingiz'
  signUpValue[1].innerText = 'Nomeringiz'
  signUpValue[2].innerText = 'Email'

  languages_modal.classList.toggle("languages-modal_active");
  select_img.classList.toggle("select-img_active");
});

// English is change language
langSelect[2].addEventListener("click", function () {
  changeLanguage("ENG");
  // input change
  // inp[0].setAttribute("placeholder", "Your name");
  // inp[1].setAttribute("placeholder", "Your number");
  // inp[2].setAttribute("placeholder", "Comment");
  inputValue[0].innerText ="Your name";
  inputValue[1].innerText = "Your number";
  inputValue[2].innerText = "Your comment";
  signUpValue[0].innerText = 'Your name'
  signUpValue[1].innerText = 'Your number'
  signUpValue[2].innerText = 'Email'
  languages_modal.classList.toggle("languages-modal_active");
  select_img.classList.toggle("select-img_active");
});

// console.log(inp);
let burgerLang = document.querySelectorAll(' .burger__lang_link')
// for burger language is change 
burgerLang[0].addEventListener('click', function (){
  if(burgerMenuBlock.classList.contains('burger-block-active')){
    burgerMenuBlock.classList.remove('burger-block-active')
    burgerBtn.children[1].style.display = 'block'
    burgerBtn.children[2].style.marginTop = '6px'
    burgerBtn.children[0].style.transform = 'rotate(0deg)'
    burgerBtn.children[2].style.transform = 'rotate(0deg)'
    body.style.overflow = ''

  }
  inputValue[0].innerText = "Ваше имя";
  inputValue[1].innerText = "Номер телефона";
  inputValue[1].innerText = "Комментарий";
  signUpValue[0].innerText = 'Ваше имя'
  signUpValue[1].innerText = 'Номер телефона'
  signUpValue[2].innerText = 'Email'
  changeLanguage("RU");
 
})
burgerLang[1].addEventListener('click', function (){
  if(burgerMenuBlock.classList.contains('burger-block-active')){
    burgerMenuBlock.classList.remove('burger-block-active')
    burgerBtn.children[1].style.display = 'block'
    burgerBtn.children[2].style.marginTop = '6px'
    burgerBtn.children[0].style.transform = 'rotate(0deg)'
    burgerBtn.children[2].style.transform = 'rotate(0deg)'
    body.style.overflow = ''

  }
    inputValue[0].innerText ="Ismingiz";
  inputValue[1].innerText ="Nomeringiz";
  inputValue[2].innerText ="Izohingiz";
  signUpValue[0].innerText = 'Ismingiz'
  signUpValue[1].innerText = 'Nomeringiz'
  signUpValue[2].innerText = 'Email'
  changeLanguage("UZB");
 
})
burgerLang[2].addEventListener('click', function (){
  if(burgerMenuBlock.classList.contains('burger-block-active')){
    burgerMenuBlock.classList.remove('burger-block-active')
    burgerBtn.children[1].style.display = 'block'
    burgerBtn.children[2].style.marginTop = '6px'
    burgerBtn.children[0].style.transform = 'rotate(0deg)'
    burgerBtn.children[2].style.transform = 'rotate(0deg)'
    body.style.overflow = ''

  }
   inputValue[0].innerText ="Your name";
  inputValue[1].innerText = "Your number";
  inputValue[2].innerText = "Your comment";
  signUpValue[0].innerText = 'Your name'
  signUpValue[1].innerText = 'Your number'
  signUpValue[2].innerText = 'Email'
  
  changeLanguage("ENG");
 
})


