let fecha = data.currentDate;
let nuevaFecha = new Date(fecha);
let arrayAux = [];
let fechaUpcoming;

for (let tarjeta_upcoming of data.events) {
     if (fechaUpcoming = new Date(tarjeta_upcoming.date) > nuevaFecha) {
          arrayAux.push(tarjeta_upcoming)
     }
}

function createChecks(array, idContainer) {
     let checks_add = document.getElementById(idContainer)
     const fragment = document.createDocumentFragment()
     let checkHouses = [...(new Set(array.map(event => event.category)))]
     checkHouses.forEach(event => {
          let div = document.createElement('div')
          div.className = 'form-check fs-5'
          div.innerHTML = `<input class="form-check-input" type="checkbox" value="${event}" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                      ${event}
                                     </label>`
          checks_add.appendChild(div)
     })
     checks_add.appendChild(fragment)
}
createChecks(arrayAux, 'checks')

function showCards(array, idContainer) {
     const container = document.getElementById(idContainer)
     container.innerHTML = ''
     const fragment = document.createDocumentFragment()
     if (array.length == 0) {
          let div = document.createElement('div')
          div.innerHTML = `<h2>No cards found to display.</h2>
                                 </div>`
          fragment.appendChild(div)
     } else {
          for (let elemento of array) {
               let div = document.createElement('div')
               div.className = 'card'
               div.style.width = '18rem'
               div.innerHTML = `<img src='${elemento.image}' class="card-img-top" alt="category"></img>
                 <div class="card-body d-flex flex-column ">
                             <h5 class="card-title fw-bold">${elemento.name}</h5>
                              <p class="card-text">Description: ${elemento.description}</p>
                               <p class="card-text">Price: ${elemento.price}</p>
                                <a href="./details.html?id=${elemento._id}" class="btn btn-primary align-self-end">Details</a>
                                 </div>`
               fragment.appendChild(div)
          }
     }
     container.appendChild(fragment)
}
showCards(arrayAux, 'id_card')

let selectChecked = []
let inputText = ''

function filterArrayByArray(arrayStrings, arrayObject) {
     return arrayStrings.length === 0 ? arrayObject : arrayObject.filter(elemento => arrayStrings.includes(elemento.category))
}

function filterArrayByString(value, arrayObject) {
     if (value == '') return arrayObject
     return arrayObject.filter(object => object.name.toLowerCase().includes(value.toLowerCase().trim()))
}

let checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach(check => check.addEventListener("change", () => {
     selectChecked = [...checkboxes].filter(check => check.checked).map(elem => elem.value)
     filterAll(arrayAux)
}))

let inputForm = document.getElementById('search')
inputForm.addEventListener('keyup', (e) => {
     inputText = inputForm.value
     filterAll(arrayAux)
})

function filterAll(array) {
     let cardsChecksFiltered = filterArrayByArray(selectChecked, array)
     let cardsFinalFiltered = filterArrayByString(inputText, cardsChecksFiltered)
     showCards(cardsFinalFiltered, 'id_card')
}
