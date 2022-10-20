fetch('./data.json')
    .then(response=>response.json())
    .then(data=>{
      let scroll = document.getElementById('slideshow');
      let cardHtml = "";
        for(let card of data){
          console.log(card);
          if(card.isTrending == true){
            cardHtml += '<div class="slide" style="background-image:url('+card.thumbnail.trending.small+')">';
            if(card.isBookmarked == true){

              imgBookmarked = "/assets/icon-bookmark-full.svg";
              cardHtml += '<div class="bookmark"><img src="'+imgBookmarked+'" alt="bookmark"></div>';
            }else{
              imgBookmarked = "/assets/icon-bookmark-empty.svg";
              cardHtml += '<div class="bookmark"><img src="'+imgBookmarked+'" alt="bookmark"></div>';
  
            }
            // &bull = bullet
              cardHtml +='<div class="detail flex"><p class="date">'+card.year+'</p>'+'<p>&bull;</p>'+'<p class="'+card.category+'">'+card.category+'</p>'+'<p class="bullet">&bull;</p>'+'<p class="rating">'+card.rating+'</p>' +'</div>';
              cardHtml+='<h2>'+card.title+'</h2>';
              cardHtml += '<div class="overlay"></div>';
              cardHtml += '</div>';
              scroll.innerHTML = cardHtml;
          }
        }
    })

//     function addFavorites(e,titreFilm) {
//   //cette fonction on l'appelle lorsqu'on clique sur l'icone et la zone autour 
//   //fonction appelée dans la div class = "card-icon"
//   let imgsrc = e.querySelector(".iconImage").src; //on récupère la source de l'image de l'élément sélectionné (e), qui est notre card
  
//     if(imgsrc.includes("icon-bookmark-empty.svg")){
//        // si notre source d'image (src)contient "icon-bookmark-empty.svg" càd icone vide
//       e.querySelector(".iconImage").src="../assets/icon-bookmark-full.svg"; //on remplace l'icone vide par une icone rempli "full"
//       localStorage.setItem(titreFilm,"true");//le isbookmarked dans le local storage reprend la valeur true //à la base c'etait false vu que l'icone etait vide

//     }else{
//       // l'icone devient "empty" et le isbookmarked dans localstorage devient false
//       e.querySelector(".iconImage").src="../assets/icon-bookmark-empty.svg";
//       localStorage.setItem(titreFilm,"false");

//     }
// }
