// First API, random cat pictures


function catAttack(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(data[0])
        document.querySelector('img').src = data[0].url
    })
}

// Second API, random philosophy quote(s)


function getPhilosophy(){
    let rand = Math.floor(Math.random() * 100)
    fetch('https://philosophy-quotes-api.glitch.me/quotes')
        .then(res => res.json())
        .then(data =>{
            document.querySelector('#philosopher').innerText = data[rand].source
            document.querySelector('#philosophy').innerText = data[rand].philosophy
            document.getElementById('quote').innerText = data[rand].quote
            })
}

// Third API, 