// https://newsapi.org/v2/everything?q=olympic&apiKey=eae3bded4a2e40fb9a7a13d27e649e11

let mainDiv = document.getElementById("main");

async function getNews() {
  try {
    let inp = document.getElementById("inp").value;
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${inp}&apiKey=eae3bded4a2e40fb9a7a13d27e649e11`
    );

    let data = await response.json();

    let articlesData = data.articles;

    console.log(articlesData);

    appendNews(articlesData);
  } catch (err) {
    console.log(err);
  }
}
function appendNews(arr) {
  arr.forEach(({ title, description, urlToImage, author, content, url }) => {
    console.log(title);

    let movieDiv = document.createElement("div");

    movieDiv.setAttribute("class", "movie");

    movieDiv.innerHTML = `
   
        <img
          src=${urlToImage}
          alt=""
        />

        <div class="movie-info">
          <h3>${title}</h3>
        </div>

        <div class="overview">
          <h3>Overview</h3>
          <p>
           ${description}
          </p>
        </div>
   
    `;

    mainDiv.append(movieDiv);
  });
}
// export { getNews, appendNews };
