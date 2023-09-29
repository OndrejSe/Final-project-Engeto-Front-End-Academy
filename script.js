// 1. RESPONZIVNÍ MENU

const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-items");
const navItem = document.querySelectorAll(".nav-items a")
const navLink = document.querySelectorAll(".nav-link");

// Otevření menu po kliknutí na ikonku

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Zavření menu po kliknutí na odkaz


navItem.forEach(n => n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Automatické zavření menu po odscrollování

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        menuIcon.classList.remove("active");
        navMenu.classList.remove("active");
    } 
}) 

// 2. TLAČÍTKO PRO VRÁCENÍ NA ZAČÁTEK STRÁNKY

const scrollButton = document.querySelector(".scroll-button")

// Zobrazení tlačítka po odscrollování

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        scrollButton.style.display = "block"
    } else {
        scrollButton.style.display = "none"
    }
}) 

// Vrácení na začátek stránky

scrollButton.addEventListener ("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// 3. PŘEPÍNÁNÍ MEZI DARK A LIGHT MODEM

const modeSwitch = document.querySelector(".mode-button")
const toggle = document.querySelector(".toggle")

modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode")) {
        toggle.style.left = "1.75rem"
        toggle.classList.add("fa-moon")
        toggle.classList.remove("fa-sun")
    } else {
        toggle.style.left = "0.25rem"
        toggle.classList.add("fa-sun")
        toggle.classList.remove("fa-moon")
    }
})

// 4. FORMULÁŘ

// Jméno - kontrola tvaru

const fullName = document.querySelector(".full-name")
const nameAlert = document.querySelector(".name-alert")
const nameCheck = document.getElementById ("name-check")

const namePattern = /(^[ĎŇŤŠČŘŽÝÁÍÉÚŮĚÓA-Z]{1}[ěščřžýáíéóúůďťňa-z]{2,20})([ ]{1})([ĎŇŤŠČŘŽÝÁÍÉÚŮĚÓA-Z]{1}[ěščřžýáíéóúůďťňa-z]{2,20})?([ ]{0,1})?([ĎŇŤŠČŘŽÝÁÍÉÚŮĚÓA-Z]{1}[ěščřžýáíéóúůďťňa-z]{2,20})/

fullName.addEventListener("input", () => {

    const nameValue = fullName.value
    
    if(nameValue.match(namePattern)){
        fullName.style.border = "2px solid var(--alert-green)"
        nameCheck.style.display = "block"
        nameCheck.style.color = "var(--alert-green)"
        nameCheck.classList.add("fa-circle-check")
        nameCheck.classList.remove("fa-circle-xmark")
        nameAlert.style.display = "block"
        nameAlert.textContent = "Jméno a příjmení je vyplněno správně"
    } else if (nameValue === ""){
        fullName.style.border = "2px solid var(--alert-red)"
        nameCheck.style.color = "var(--alert-red)"
        nameCheck.classList.add("fa-circle-xmark")
        nameCheck.classList.remove("fa-circle-check")
        nameAlert.textContent = "Uveďte prosím jméno a příjmení"        
    } else {
        fullName.style.border = "2px solid var(--alert-red)"
        nameCheck.style.display = "block"
        nameCheck.style.color = "var(--alert-red)"
        nameCheck.classList.add("fa-circle-xmark")
        nameCheck.classList.remove("fa-circle-check")
        nameAlert.style.display = "block"
        nameAlert.textContent = "Jméno a příjmení není vyplněno správně"
    }
})

// Email - kontrola formátu

const email = document.querySelector(".email")
const emailAlert = document.querySelector(".email-alert")
const emailCheck = document.getElementById ("email-check")

const emailPattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

email.addEventListener("input", () => {
    
    const emailValue = email.value

    if(emailValue.match(emailPattern)){
        email.style.border = "2px solid var(--alert-green)"
        emailCheck.style.display = "block"
        emailCheck.style.color = "var(--alert-green)"
        emailCheck.classList.add("fa-circle-check")
        emailCheck.classList.remove("fa-circle-xmark")
        emailAlert.style.display = "block"
        emailAlert.textContent = "Email je ve správném formátu"
    } else if (emailValue === ""){
        email.style.border = "2px solid var(--alert-red)"
        emailCheck.style.color = "var(--alert-red)"
        emailCheck.classList.add("fa-circle-xmark")
        emailCheck.classList.remove("fa-circle-check")
        emailAlert.textContent = "Uveďte prosím email"        
    } else {
        email.style.border = "2px solid var(--alert-red)"
        emailCheck.style.display = "block"
        emailCheck.style.color = "var(--alert-red)"
        emailCheck.classList.add("fa-circle-xmark")
        emailCheck.classList.remove("fa-circle-check")
        emailAlert.style.display = "block"
        emailAlert.textContent = "Email není ve správném formátu"
    }
})

// Heslo - kontrola požadavků (délka 8 znaků, jedno velké písmeno)

const password = document.querySelectorAll(".password")
const passwordAlert = document.querySelector(".password-alert")
const passwordCheck = document.getElementById("password-check")

password[1].disabled = true

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

password[0].addEventListener("input", () => {

    const passwordValue = password[0].value

    if(passwordValue.match(passwordPattern)){
        password[0].style.border = "2px solid var(--alert-green)"
        passwordCheck.style.display = "block"
        passwordCheck.style.color = "var(--alert-green)"
        passwordCheck.classList.add("fa-circle-check")
        passwordCheck.classList.remove("fa-circle-xmark")
        passwordAlert.style.display = "block"
        passwordAlert.textContent = "Heslo splňuje požadavky"
        password[1].disabled = false
    } else if (passwordValue === ""){
        password[0].style.border = "2px solid var(--alert-red)"
        passwordCheck.style.color = "var(--alert-red)"
        passwordCheck.classList.add("fa-circle-xmark")
        passwordCheck.classList.remove("fa-circle-check")
        passwordAlert.textContent = "Vyplňte prosím heslo"
        password[1].disabled = true
        password[1].value = ""
    } else {
        password[0].style.border = "2px solid var(--alert-red)"
        passwordCheck.style.display = "block"
        passwordCheck.style.color = "var(--alert-red)"
        passwordCheck.classList.add("fa-circle-xmark")
        passwordCheck.classList.remove("fa-circle-check")
        passwordAlert.style.display = "block"
        passwordAlert.textContent = "Heslo nesplňuje požadavky"
        password[1].disabled = true
        password[1].value = ""
    }
})

// Hesla - kontrola shody

const confirmAlert = document.querySelector(".confirm-password-alert")
const confirmCheck = document.getElementById("confirm-password-check")

password.forEach(function (passwordCompare){

    passwordCompare.addEventListener("input", () => {

        const passwordValue = password[0].value
        const confirmValue = password[1].value
    
        if (confirmValue === "" && passwordValue.match(passwordPattern)) {
            password[1].style.border = "2px solid var(--alert-red)"
            confirmCheck.style.color = "var(--alert-red)"
            confirmCheck.classList.add("fa-circle-xmark")
            confirmCheck.classList.remove("fa-circle-check")
            confirmAlert.style.display = "block"
            confirmAlert.textContent = "Zopakujte heslo"
        } else if (passwordValue === confirmValue && passwordValue.match(passwordPattern)) {
            password[1].style.border = "2px solid var(--alert-green)"
            confirmCheck.style.display = "block"
            confirmCheck.style.color = "var(--alert-green)"
            confirmCheck.classList.add("fa-circle-check")
            confirmCheck.classList.remove("fa-circle-xmark")
            confirmAlert.style.display = "block"
            confirmAlert.textContent = "Hesla se shodují"
        } else if (passwordValue.match(passwordPattern)) {
            password[1].style.border = "2px solid var(--alert-red)"
            confirmCheck.style.display = "block"
            confirmCheck.style.color = "var(--alert-red)"
            confirmCheck.classList.add("fa-circle-xmark")
            confirmCheck.classList.remove("fa-circle-check")
            confirmAlert.style.display = "block"
            confirmAlert.textContent = "Hesla se neshodují"
        } else {
            password[1].style.border = "2px solid var(--main-background)"
            confirmAlert.style.display = "none"
            confirmCheck.style.display = "none"
        }
    })
})

// Zpráva - kontrola správné délky

const formMessage = document.querySelector(".form-message")
const messageCheck = document.getElementById("message-check")
const messageCounter = document.querySelector(".message-counter")

formMessage.addEventListener("input", () => {

const letterCount = formMessage.value.length
const minCount = parseInt(80 - letterCount)
const limitCount = parseInt(280 - letterCount)

messageCounter.textContent = letterCount + "/280"

if (letterCount >= 280) {
    messageCounter.style.display = "block"
    messageCounter.textContent = "Dosáhli jste maximální délky textu."
} else if (letterCount < 280 && letterCount >= 250) {
    messageCheck.style.display = "block"
    messageCheck.style.color = "var(--alert-orange)"
    messageCheck.classList.add("fa-circle-exclamation")
    messageCheck.classList.remove("fa-circle-check")
    messageCounter.style.display = "block"
    messageCounter.textContent = "Můžete napsat už jen " + limitCount + " znaků!"
} else if (letterCount < 80 && letterCount >= 1) {
    formMessage.style.border = "2px solid var(--alert-red)"
    messageCheck.style.display = "block"
    messageCheck.style.color = "var(--alert-red)"
    messageCheck.classList.add("fa-circle-xmark")
    messageCheck.classList.remove("fa-circle-check")
    messageCounter.style.display = "block"
    messageCounter.textContent = "Napište ještě alespoň " + minCount + " znaků!"
} else if (letterCount >= 80 && letterCount < 250) {
    formMessage.style.border = "2px solid var(--alert-green)"
    messageCheck.style.display = "block"
    messageCheck.style.color = "var(--alert-green)"
    messageCheck.classList.add("fa-circle-check")
    messageCheck.classList.remove("fa-circle-xmark")
    messageCounter.style.display = "block"
    messageCounter.textContent = letterCount + "/280"
} else if (letterCount < 1) {
    formMessage.style.border = "2px solid var(--alert-red)"
    messageCheck.style.color = "var(--alert-red)"
    messageCheck.classList.add("fa-circle-xmark")
    messageCheck.classList.remove("fa-circle-check")
    messageCounter.style.display = "block"
    messageCounter.textContent = "Text musí mít alespoň 80 znaků!"
}
})

// Odeslání formuláře - kontrola správnosti všech údajů, změna okna po odeslání

const form = document.querySelector("form")
const formAlert = document.querySelector(".form-alert")
const formSend = document.querySelector(".form-send")
const joinContent = document.querySelector(".join-content")
const joinUsHeading = document.querySelector(".join-heading")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nameValue = fullName.value
    const emailValue = email.value
    const passwordValue = password[0].value
    const confirmValue = password[1].value
    let letterCount = formMessage.value.length

    if (fullName.value === "") {
        fullName.style.border = "2px solid var(--alert-red)"
        nameCheck.style.display = "block"
        nameCheck.style.color = "var(--alert-red)"
        nameAlert.style.display = "block"
        } else if (nameValue.match(namePattern)){
        nameAlert.style.display = "none"
        }
        
    if (email.value === "") {
        email.style.border = "2px solid var(--alert-red)"
        emailCheck.style.display = "block"
        emailCheck.style.color = "var(--alert-red)"
        emailAlert.style.display = "block"
        } 
    else if (emailValue.match(emailPattern)){
        emailAlert.style.display = "none"
        }

    if (password[0].value === "") {
        password[0].style.border = "2px solid var(--alert-red)"
        passwordCheck.style.display = "block"
        passwordCheck.style.color = "var(--alert-red)"
        passwordAlert.style.display = "block"
        } 
    else if (passwordValue.match(passwordPattern)){
        passwordAlert.style.display = "none"
        }

    if (password[1].value === "" && passwordValue.match(passwordPattern)) {
        password[1].style.border = "2px solid var(--alert-red)"
        confirmCheck.style.display = "block"
        confirmCheck.style.color = "var(--alert-red)"
        confirmAlert.style.display = "block"
        } 
    else if (passwordValue === confirmValue){
        passwordAlert.style.display = "none"
        }

    if (letterCount < 80) {
        formMessage.style.border = "2px solid var(--alert-red)"
        messageCheck.style.display = "block"
        messageCheck.style.color = "var(--alert-red)"
        messageCounter.style.display = "block"
        }
        
    if (fullName.value !== "" && nameValue.match(namePattern) && email.value !== "" && emailValue.match(emailPattern) && password[0].value !== "" && passwordValue.match(passwordPattern) && password[1].value !== "" && passwordValue === confirmValue && letterCount >= 80) {
        joinContent.style.display = "none"
        joinUsHeading.style.display = "none"
        formSend.style.display = "flex"
        } else {
        formAlert.style.display = "flex"
    }
    })