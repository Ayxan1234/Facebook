

// let form = document.getElementById("login")
// let name = document.getElementById("email")
// let surname = document.getElementById("pass")
// let day = document.getElementById("day")
// let month = document.getElementById("month")
// let year = document.getElementById("year")
// let female =document.getElementById("sex")
// let male =document.getElementById("sex1")
// let over =document.getElementById("sex2")
// let password =document.getElementById("password")
// form.addEventListener("submit", getForm)

// function getForm(e) {
//     e.preventDefault();
//     let login = {
//         name: name.value,
//         surname: surname.value,
//         day : day.value,
//         month: month.value,
//         year: year.value,
//         female:female.value,
//         male:male.value,
//         over:over.value,
//         password:password.value
//     }
//     console.log(login);
//     form.reset()
// }



let form = document.getElementById("login1")
let name = document.getElementById("email1")
let surname = document.getElementById("pass1")
form.addEventListener("submit", getForm)

function getForm(e) {
    e.preventDefault();
    let login1 = {
        name: name.value,
        surname: surname.value,
    }
    console.log(login1);
    form.reset()
}
