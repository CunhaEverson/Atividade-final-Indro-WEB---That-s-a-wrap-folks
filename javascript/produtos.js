const produtos = [
    {
        id: 1,
        image: 'Img/exemplo1.jpg',
        title: 'Hamburguer',
        description: 'Hamburger artesanal passado na chapa.',
        valor: 10.00
    },
    {
        id: 2,
        image: 'Img/exemplo2.jpg',
        title: 'Yakisoba',
        description: 'macarrão refogado com legumes e carnes, temperado com molho especifico.',
        valor: 15.00
    },
    {
        id: 3,
        image: 'Img/exemplo3.jpg',
        title: 'Macarronada',
        description: 'Prato à base de macarrão, queijo e molho.',
        valor: 20.00
    },
    {
        id: 4,
        image: 'Img/exemplo4.jpg',
        title: 'Pizza',
        description: 'MOlho de tomate, mussarela, bacon fatiado, cebola e orégano.',
        valor: 40.00
    },

]
/*
função do propaganda do ifood
*/
function slide1(){
    document.getElementById('id').src="Img/propaganda.png";
    document.getElementById('aId').href="https://institucional.ifood.com.br/doacao"
}
