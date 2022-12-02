const list = ['cioccolata', 'pasta', 'uova', 'acqua', 'pane', 'prosciutto', 'mozzarella'];

const list_container = document.querySelector ('.shopping-list');

let i = 0
while(i < list.length){

    // create i list-item

    let list_i = document.createElement('li');

    // associati i list-item con i valori dell'array

    list_i.innerText = list[i];

    // data una classe alla list-item

    list_i.classList.add('li-class');

    // aggiunto gli elementi dell'array (li) nell'ul

    list_container.append(list_i)

    // istruzione per terminare il ciclo

    i++
}

console.log(list_container)