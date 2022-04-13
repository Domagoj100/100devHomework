// First API 

// function catAttack(){
//     for(let i=0; i < 1; i++){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(data[0])
        document.querySelector('img').src = data[0].url
    })
//     }
// }