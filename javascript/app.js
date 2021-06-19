
const loadProducts = (produtos, idDivParent) => {
    const parentDiv = document.querySelector(idDivParent)
    produtos.forEach( produto => {

        const html = `
            <article class="prato">
                <img src="${produto.image}" alt="${produto.title}">
                <h4>${produto.title}</h4>
                <h4>${produto.value}</h4>
                <p>${produto.description}</p>
                <button type="button" onclick="modalFunc(${produto.id})">Quero este prato</button>
            </article>
        `
        parentDiv.insertAdjacentHTML('beforeend', html)
    })
}
const modalFunc = (productId) => {
    const modal = document.querySelector('.modal')

    if (productId != null  ) {
        const produto = produtos.filter( produto => produto.id == productId )[0]
        if(produto != null) {
            modal.querySelector('#title').value = produto.title 
        }
    }
    modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')
    
}


loadProducts(produtos, '#product-div')
