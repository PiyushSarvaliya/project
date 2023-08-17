const singup = (e) => {
    e.preventDefault();
    let user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };
    fetch("http://localhost:3000/user")
    .then((res)=>res.json)
    .then((data)=>console.log(data.user))
    if(data > 0){
    }
   
}

document.getElementById("form").addEventListener("submit", singup)

document.getElementById("name").addEventListener("keypress", () => {
    let name = document.getElementById("name").value
    let n_pattern = /^[a-zA-Z ]+$/;

    if (!n_pattern.test(name)) {
        document.getElementById("n_err").innerHTML = `plase enter the propar name`
        document.getElementById("n_err").classList.add("text-danger")
        document.getElementById("name").classList.add("border-danger")
        document.getElementById("name").classList.add("text-danger")
    }
    else {
        document.getElementById("n_err").innerHTML = ``
        document.getElementById("n_err").classList.add("text-primary")
        document.getElementById("n_err").classList.remove("text-danger")
        document.getElementById("name").classList.add("border-primary")
        document.getElementById("name").classList.remove("border-danger")
        document.getElementById("name").classList.remove("text-danger")
        document.getElementById("name").classList.add("text-primary")
    }
})
document.getElementById("email").addEventListener("keypress", () => {
    let email = document.getElementById("email").value
    let e_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!e_pattern.test(email)) {
        document.getElementById("e_err").innerHTML = `enter the valid email`
        document.getElementById("e_err").classList.add("text-danger")
        document.getElementById("email").classList.add("border-danger")
        document.getElementById("email").classList.add("text-danger")
    }
    else {
        document.getElementById("e_err").innerHTML = `valid email`
        document.getElementById("e_err").classList.add("text-primary")
        document.getElementById("e_err").classList.remove("text-danger")
        document.getElementById("email").classList.add("border-primary")
        document.getElementById("email").classList.remove("border-danger")
        document.getElementById("email").classList.remove("text-danger")
        document.getElementById("email").classList.add("text-primary")
    }
})
document.getElementById("password").addEventListener("keypress", () => {
    let password = document.getElementById("password").value
    let p_pattern = /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}/;

    if (!p_pattern.test(password)) {
        document.getElementById("p_err").innerHTML = `plase enter the propar password`
        document.getElementById("p_err").classList.add("text-danger")
        document.getElementById("password").classList.add("border-danger")
        document.getElementById("password").classList.add("text-danger")
    }
    else {
        document.getElementById("p_err").innerHTML = `valid password`
        document.getElementById("p_err").classList.add("text-primary")
        document.getElementById("p_err").classList.remove("text-danger")
        document.getElementById("password").classList.add("border-primary")
        document.getElementById("password").classList.remove("border-danger")
        document.getElementById("password").classList.remove("text-danger")
        document.getElementById("password").classList.add("text-primary")
    }
})