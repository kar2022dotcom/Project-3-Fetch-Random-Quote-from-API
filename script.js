let btn = document.querySelector('#btn');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');

btn.addEventListener('click', function(){

    let ranNum = Math.floor(Math.random() * 1643 );

    fetch("https://type.fit/api/quotes")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            quote.innerHTML = `"${data[ranNum].text}"`;
            author.innerHTML = `-${data[ranNum].author}`;
        })
        
});
