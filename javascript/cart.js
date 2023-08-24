import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar();


let get = () =>{
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}