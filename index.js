


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

getData(data)
// const edit = document.querySelector('#fa-pen')
// const editFrom = document.querySelector('#edit-form')


function getData(data) {
    pitsaWrapper.innerHTML = ""
    for (let i = 0; i < data.length; i++){
        let desc = data[i].desc
        console.log(data[i].desc)
        pitsaWrapper.insertAdjacentHTML('beforeend', `
        <div  class="edit-wrapper">
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
        <h4 onclick={onEdit(${data[i].id})} penid=${i} id="fa-pen-${data[i].id}" class=" fa fa-pen edit  "></h4>
        </div>
        </div>
        </div>
            <div id="edit-form-${data[i].id}" class="edit-form">
                <input for="edit-form" value=${data[i].img}  id='edit-rasm' class="edit-input" placeholder="rasm" type="file">
                <input for="edit-form" value=${data[i].title} id='edit-title' class="input" placeholder="title" type="text">
             <textarea for="edit-form"  id='edit-description' class="edit-input" placeholder="description" type="text">${desc}</textarea>
                <input for="edit-form" value=${data[i].price} id='edit-price' class="edit-input" placeholder="price" type="text">
                <input onclick={onCancel(${data[i].id})} for="edit-form"  id='edit-cancel' class="edit-submit" placeholder="price" type="submit" value="cancel">
                <button onclick={onSave(${data[i].id})}   id='edit-save' class="edit-submit">submit</button>
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




var imgUrl


submit.addEventListener('click', function (e) {
    e.preventDefault();
    const img = document.querySelector('#rasm').value
    const title = document.querySelector('#title').value
    const desc = document.querySelector('#description').value
    const price = document.querySelector('#price').value

        data.push({ id: data.length + 1, img: `${imgUrl}`, title, desc, price })
    getData()
    console.log(document.querySelector('#rasm').value)

})




     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    // img inputga chiqarib berish un commentdan chiqaring
                    // document.querySelector("#blah").setAttribute('src', e.target.result),
                    imgUrl = e.target.result
                };

                reader.readAsDataURL(input.files[0]);
            }
     }
        



function onEdit(e) {
    //   var x = document.getElementById("fa-pen").getAttribute("penid")
    // console.log(x)
    // console.log(e.target.outerHTML.penid)
    document.querySelector(`#edit-form-${e}`).style.display = 'flex'
        // editFrom.style.display = 'flex'
}
    

function onCancel(e) {
    document.querySelector(`#edit-form-${e}`).style.display = 'none'
}
    
function onSave(e) {
// e.preventDefault()
    const img = document.querySelector('#edit-rasm').value
    const title = document.querySelector('#edit-title').value
    const desc = document.querySelector('#edit-description').value
    const price = document.querySelector('#edit-price').value
  
    const newData = data.map((value) => {
        return (
            value.id !== e ? value
                : {id: value.id, img, title, desc, price}
        )
  })
console.log(data)
console.log(newData)
    // for (let value of data) {
    //     if (value.id === e) {
            
    //     }
    // }

    //    for (var i in projects) {
    //  if (projects[i].value == value) {
    //     projects[i].desc = desc;
    //     break; //Stop this loop, we found it!
    //  }
//    }
    
    getData(newData)
    document.querySelector(`#edit-form-${e}`).style.display = 'none'
}
    
