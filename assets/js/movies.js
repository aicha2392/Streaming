fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i of data) {
      if (i.category == "Movie") {
        // console.log(serie.title)
        let allCards = document.querySelector("#all-cards");
        let imgBookmarked = "";
        if (i.isBookmarked == true) {
          imgBookmarked = "/assets/icon-bookmark-full.svg";
        } else {
          imgBookmarked = "/assets/icon-bookmark-empty.svg";
        }
        allCards.innerHTML += `
                <div class="card">
                    <div class="card-icon" onclick = "getfavorie()" >
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
                </div> 
            `;
      }
    }
  });
