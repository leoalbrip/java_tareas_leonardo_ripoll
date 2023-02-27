let contenedor = document.getElementById('id_card');

for (let tarjeta of data.events) {
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src='${tarjeta.image}' class="card-img-top" alt="'${tarjeta.name}'"></img>
    <div class="card-body">
                     <h5 class="card-title">${tarjeta.name}</h5>
                      <p class="card-text">Date: ${tarjeta.date}</p>
                      <p class="card-text">Description: ${tarjeta.description}</p>
                      <p class="card-text">Category: ${tarjeta.category}</p>
                      <p class="card-text">Place: ${tarjeta.place}</p>
                      <p class="card-text">Capacity: ${tarjeta.capacity}</p>
                      <p class="card-text">Assistance: ${tarjeta.assistance}</p>
                      <p class="card-text">Price: ${tarjeta.price}</p>

                      <a href="./details.html" class="btn btn-primary">Details</a>
                      </div>`
    id_card.appendChild(div);
}