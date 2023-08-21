import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar();

let products = [];

const display = (product)=>{
    product.map((product) =>{
        let img = document.createElement("img")
        img.src = product.image;
        let title = document.createElement("h3")
        title.innerHTML = product.title;
        let des = document.createElement("p")
        des.innerHTML = product.description;
        let div = document.createElement("div")
        div.append(img,title,des)
        document.getElementById("ui").append(div)
    })
}

const get = () =>{
    fetch("http://localhost:3000/product")
    .then((res)=>(res.json))
    .then((data)=>{
        data.display
        products.push(display)
    })
}

get();