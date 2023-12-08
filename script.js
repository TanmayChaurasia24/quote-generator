document.querySelector('#new-quote-btn').addEventListener('click',()=>{
    fetch('/quote')
        .then(response => response.json())
        .then(data =>{
            document.querySelector('#quote').innerText = data.quote;
        })
        .catch(error => {
            console.log("error in featching the quote");
        });
});

