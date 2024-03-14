const createCardNode = ()=>{
    const imageContainer = document.createElement("div")
    imageContainer.className = "img-container"

	const imagen = document.createElement("img")
    imagen.src=`./assets/images/avatar-jessica.jpeg`
	imageContainer.appendChild(imagen)

    const personalSection = document.createElement("div")
    personalSection.className = "personal section"

    const encabezado = document.createElement("h2")
    const parrafo = document.createElement("p")
    encabezado.className = "personal__name"
    parrafo.className = "personal__address"
	const textoEncabezado = document.createTextNode('Jessica Randall')
    const textoParrafo = document.createTextNode('London, United Kingdom')
    encabezado.appendChild(textoEncabezado)
    parrafo.appendChild(textoParrafo)

	personalSection.appendChild(encabezado)
	personalSection.appendChild(parrafo)

    const socialSection = document.createElement("div")
    socialSection.className = "social section"
    
	const parrafoIntro = document.createElement("p")
    parrafoIntro.className = "social__intro"
	const textoParrafoIntro = document.createTextNode('Front-end developer and avid reader.')
	parrafoIntro.appendChild(textoParrafoIntro)
    const socialLinksSection = document.createElement("div")
    socialLinksSection.className = "social__links section"	
    
	const botones = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']
	for (let i = 0; i<5; i++){
        const boton = document.createElement("button")
        boton.className = "social__link" 
		const textoBoton = document.createTextNode(botones[i])
    	boton.appendChild(textoBoton)
        socialLinksSection.appendChild(boton)
	}
    
    socialSection.appendChild(parrafoIntro)
    socialSection.appendChild(socialLinksSection)

    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(personalSection)
    card.appendChild(socialSection)

    return card
}

const mountNode = document.querySelector("#app");
const addCardButton = document.querySelector('#addCardBtn');

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)