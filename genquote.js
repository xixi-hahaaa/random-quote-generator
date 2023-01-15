const getNewQuote = async () => {
    //api for quotes
    var url = "https://type.fit/api/quotes";

    // fetch data from the api
    const response=await fetch(url);

    // convert response to JSON and stores quotes in an array
    const allQuotes=await response.json();

    // access a quote by randomly generating a number from 0 to te length of the array of quotes
    const indice=Math.floor(Math.random()*allQuotes.length);

    // store quote properties separately
    // store the presented random quote
    const quote = allQuotes[indice].text;

    // store the author of the quote
    const author = allQuotes[indice].author;

    // present anonymous author
    if (author==null)
    {
        auteur = "Anon."
    }

    // function to desplay quote and author via html
    const text=document.getElementById("quote");
    const auteur=document.getElementById("author");

    text.innerHTML = quote;
    auteur.innerHTML = "- " + author;

}

// call function to rerun code for a newly generated quote
getNewQuote();
