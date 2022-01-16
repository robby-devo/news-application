let newsData = JSON.parse(localStorage.getItem("clicked_news"));

console.log(newsData);

let heading = document.getElementById("head");

let imgSec = document.getElementById("imgSec");

let desc = document.getElementById("desc");

let btn = document.getElementById("btn");

heading.innerHTML = ` <p>Author: <span>${newsData.author}</span></p>
        <h1>${newsData.title}</h1>`;

imgSec.innerHTML = `  <img
          src=${newsData.urlToImage}
          alt=""
        />`;

desc.innerHTML = ` <p>${newsData.description}</p>
 <p>${newsData.content}</p>`;

btn.innerHTML = ` <a href=${newsData.url} target="_blank">Read More</a>`;
