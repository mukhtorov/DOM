


const pitsaWrapper = document.querySelector('#pitsa-content')
const card = document.querySelector('#card')

var data = [
    { id: 1, hot: false, img: '/assets/pitsa.png', title: 'Hot achchiko', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 2, hot: true, img: '/assets/pitsa.png', title: 'Mexica', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 3, hot: false, img: '/assets/pitsahot2.png', title: 'America', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 4, hot: false, img: '/assets/pitsahot.png', title: 'Hot achchiko', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 5, hot: false, img: '/assets/pitsa.png', title: 'Uzbekistan', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 6, hot: true, img: '/assets/pitsahot.png', title: 'Hot achchiko', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 7, hot: false, img: '/assets/pitsa.png', title: 'Korea', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    { id: 8, hot: false, img: '/assets/pitsahot2.png', title: 'Hot achchiko', price: '64,000', desc: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле' },
    
]

getData()


function getData() {
    pitsaWrapper.innerHTML = ""
    for (let i = 0; i < data.length; i++){
        pitsaWrapper.insertAdjacentHTML('beforeend', `
        <div id="card" class="pitsa-card">
        <div class="${data[i].hot? 'hot' : 'notHot'}">
        <img src="./assets/fire.png" alt="">
        </div>
        <h1 onclick="ondelete(${data[i].id})" class="delete">+</h1>
        <img class="pitsa-img" src="${data[i].img}" alt="">
        <div class="pitsa-card-right">
        <h3 class="card-title">
      ${data[i].id}  ${data[i].title}
        <img class="flower" src="./assets/flower.png" alt="">
        </h3>
        <p class="card-desc">
        ${data[i].desc}
        </p>
        <div class="count">
        <p class="price">${data[i].price}</p>
        <h1 class="plus">+</h1>
        </div>
        </div>
        </div>
        `)
    }
   
}
function ondelete(e) {
    data = data.filter((value) => value.id !== e)
    console.log(data)
    getData()
}







// submit.addEventListener('click', function () {
//     const img = document.querySelector('#rasm')
//     const title = document.querySelector('#title').value
//     const desc = document.querySelector('#description').value
//     const price = document.querySelector('#price').value
//     const submit = document.querySelector('#submit')
//     data.push({ id: data.length + 1, img, title, desc, price })
//     getData()
//     console.log(document.querySelector('#rasm'))

    
// })