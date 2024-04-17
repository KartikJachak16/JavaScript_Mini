const apiUrl = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("Author");
const newquote = document.querySelector("quote-container button");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;    
}


