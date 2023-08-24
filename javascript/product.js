import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar();

const display = (products)=>{
    products.map((product) =>{
        let img = document.createElement("img")
        img.src = product.image;
        let title = document.createElement("h3")
        title.innerHTML = product.title;
        let des = document.createElement("p")
        des.innerHTML = product.description;
        let btn = document.createElement("button")
        btn.innerHTML = "buy now"
        btn.addEventListener("click",()=>{
            if(localStorage.getItem("login")){
                fetch("http://localhost:3000/cart",{
                    method : "'POST",
                    headers : {"content-type" : "application/json"},
                    body : JSON.stringify(product)
                })
            }
            else{
                alert("login your account")
                setTimeout(
                    window.location.href = "/pages/login.html"
                ,1000)
            }
        })
        let div = document.createElement("div")
        div.append(img,title,des,btn)
        document.getElementById("ui").append(div)
    })
}

const get = () =>{
    fetch("http://localhost:3000/product")
    .then((res)=>res.json())
    .then((data)=>display(data))
}

get();