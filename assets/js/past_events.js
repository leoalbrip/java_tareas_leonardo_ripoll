let fecha = data.currentDate;
let nuevaFecha = new Date (fecha);
let arrayAux =[] ;
let fechaPast;

for(let tarjeta_past of data.events){
     if(fechaPast= new Date(tarjeta_past.date) < nuevaFecha){
           arrayAux.push(tarjeta_past)
      }
 };

 console.log(arrayAux);

 let contenedor = document.getElementById('id_card');
 for (tarjeta_id of arrayAux) {
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src='${tarjeta_id.image}' class="card-img-top" alt="'${tarjeta_id.name}'"></img>
    <div class="card-body">
                     <h5 class="card-title">${tarjeta_id.name}</h5>
                      <p class="card-text">Date: ${tarjeta_id.date}</p>
                      <p class="card-text">Description: ${tarjeta_id.description}</p>
                      <p class="card-text">Category: ${tarjeta_id.category}</p>
                      <p class="card-text">Place: ${tarjeta_id.place}</p>
                      <p class="card-text">Capacity: ${tarjeta_id.capacity}</p>
                      <p class="card-text">Assistance: ${tarjeta_id.assistance}</p>
                      <p class="card-text">Price: ${tarjeta_id.price}</p>

                      <a href="./details.html" class="btn btn-primary">Details</a>
                      </div>`
    id_card.appendChild(div);
}