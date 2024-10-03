const ProductosContainer = document.getElementById("ProductosContainer")

async function ConseguirInformacion() {
    const respuesta = await fetch("https://fakestoreapi.com/products")
    const information = await respuesta.json()
     console.log(information)
    information.forEach(producto => {
        tarjetas(producto)
    });
}

const Cerrar = document.getElementById("close");

Cerrar.addEventListener("click", ()=>{
    modal.classList.remove("visto")
});


const modal = document.getElementById("modal")
const titulomodal = document.getElementById("titulo")
const informacion = document.getElementById("informacion")
const imagem = document.getElementById("eimg")
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")

function tarjetas({id, title, description, image, price, category, rating}){
    const container = document.createElement("div")
    container.setAttribute("id", "tarjeta")
    ProductosContainer.appendChild(container)

    container.addEventListener("click", ()=>{
        modal.classList.add("visto")
        console.log(titulo)
        titulomodal.innerText = title
        informacion.innerText = description
        precio.innerText = price
        categoria.innerText = `-${category}`
        imagem.src= image 
    })

    const info = document.createElement("div")
    info.className = "info"
    container.appendChild(info)

    const titulo = document.createElement("h1")
    titulo.innerHTML= String(title).slice(0, 16)+"..."
    info.appendChild(titulo)

    const imag = document.createElement("img")
    imag.src= image
    imag.className="Producto"
    container.appendChild(imag)
}

ConseguirInformacion()