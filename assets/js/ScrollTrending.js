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