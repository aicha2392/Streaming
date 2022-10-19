fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let booked = JSON.parse(localStorage.getItem("bookmarked"));

    for (let i of data) {
      let imgBookmarked = "/assets/icon-bookmark-full.svg";

      if (booked !== null) {
        isBookedMarketLocal = booked.some(function (element) {
          return element === i.title;
        });
      }

      if (
        (i.category == "Movie" && i.isBookmarked == true) ||
        isBookedMarketLocal
      ) {
        let movieCards = document.querySelector("#movies-cards");

        movieCards.innerHTML += `
                <div class="card">
                    <div class="card-icon">
                        <img src="${imgBookmarked}" alt="">
                    </div>
                    <img class="cover" src="${i.thumbnail.regular.small}" alt="">
                    <div class="infos">
                        <div class="detail flex">
                        <p class="years">${i.year}</p>
                        <p>•</p>
                        <p class="${i.category}">${i.category}</p>
                        <p>•</p>
                        <p class="pegi">${i.rating}</p>
                        </div>
                        <h4 id="titre-film">${i.title}</h4> 
                    </div>
                </div> `;
      }

      if (i.category == "TV Series" && i.isBookmarked == true) {
        let serieCards = document.querySelector("#series-cards");

        serieCards.innerHTML += `
                <div class="card">
                    <div class="card-icon">
                    <img src="${imgBookmarked}" alt="">
                    </div>
            
                <img class="cover" src="${i.thumbnail.regular.small}" alt="">
                <div class="infos">
                    <div class="detail flex">
                    <p class="years">${i.year}</p>
                    <p>•</p>
                    <p class="${i.category}">${i.category}</p>
                    <p>•</p>
                    <p class="pegi">${i.rating}</p>
                    </div>
                    <h4 id="titre-film">${i.title}</h4> 
                </div>
                </div> `;
      }
    }
  });
