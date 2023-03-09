const id = new URLSearchParams(location.search).get("id")
const events = data.events.find(elemento => elemento._id == id)

function show_card(idContainer) {
    const container = document.getElementById(idContainer)
    let boxCard = document.createElement('div');
    boxCard.className = 'box-card container row-xl justify-content-between border border-primary rounded-2 p-0 ';

    boxCard.innerHTML = `<img class="container img-fluid h-auto p-0" src="${events.image}">
            <div class="card-details container d-flex flex-column py-5 bg-info">
                <h3 class="text-uppercase fw-bold pb-2">${events.name}</h3>
                <ul class="list-unstyled d-flex flex-column gap-2">
                    <li class="fs-4"><span class="fw-semibold">Date: </span>${events.date}</li>
                    <li class="fs-4"><span class="fw-semibold">Description: </span>${events.description}</li>
                    <li class="fs-4"><span class="fw-semibold">Category: </span>${events.category}</li>
                    <li class="fs-4"><span class="fw-semibold">Place: </span>${events.place}</li>
                    <li class="fs-4"><span class="fw-semibold">Capacity: </span>${events.capacity}</li>
                    <li class="fs-4"><span class="fw-semibold">Assistance: </span>${events.assistance}</li>
                    <li class="fs-4"><span class="fw-semibold">Estimate: </span>${events.estimate}</li>
                    <li class="fs-4"><span class="fw-semibold">Price: </span>${events.price}</li>
                </ul>
                <button onclick="history.back()" class="btn btn-details btn-primary fs-3 align-self-end" >Volver</button>
            </div>`
    container.appendChild(boxCard)
}

show_card("details_card")