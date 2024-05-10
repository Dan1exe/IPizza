// Para facilitar a utilização do querySelector/querySelectorall
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el)

/*
Mapea o Json
E clona o frame do HTML para que as informações de cada pizza possam ser vizualizadas 
*/
pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;



    c('.pizza-area').append( pizzaItem );
}); 
