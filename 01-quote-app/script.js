let state = {
  quote: "Here should be the qupte",
  author: "Mr. Arthur the author!",
};

const btnGetQuote = document.querySelector("#btn-quote");

btnGetQuote.addEventListener("click", btnClicked);

function btnClicked(event) {
  event.preventDefault();
  fetchData();
  renderQotes();
}

function fetchData() {
  let p = fetch("https://dummy-apis.netlify.app/api/quote");
  let p2 = p.then((response) => {
    return response.json();
  });

  p2.then((data) => {
    state = data;
  });

  console.log("btn was clicked:", state);
}

function renderQotes() {
  const quoteOutput = document.querySelector("#output-quote");

  quoteOutput.innerText = "";

  const listElQuote = document.createElement("li");
  const quote = state.quote;
  listElQuote.append(quote);
  console.log(quote);

  const listElAuthor = document.createElement("h2");
  const author = "-" + state.author;
  listElAuthor.append(author);
  console.log(author);

  quoteOutput.appendChild(listElQuote);
  quoteOutput.appendChild(listElAuthor);
}
