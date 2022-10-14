let searchResult = document.querySelector(".movie-cards");
let searchInput = document.getElementById("search-id");
let content = document.getElementById('recommended');
searchResult.style.visibility='hidden';



    fetch('./data.json')
        .then(res => res.json()
        .then(json =>{

            // iterating movies
            for (let value of json){
                
                addElement(searchResult, value);
            }
            
        })
    )
    

// add event listener
searchInput.addEventListener('keyup', searchmovies);




// callback function 
function searchmovies(){
    let searchValue = searchInput.value.toUpperCase();
    
    if(searchValue != ""){
        
        let item = searchResult.querySelectorAll('.card');
        let b =0;
        content.style.visibility='hidden';
        searchResult.style.visibility='visible';
        for (let i = 0; i < item.length; i++){
            let span = item[i].querySelector('#titre-film');
            
            if(span.innerHTML.toUpperCase().indexOf(searchValue) > -1){
                item[i].style.display = "block";
                b++;
                
            }else{
                item[i].style.display = "none";
            }
        }
        
        document.getElementById("result").innerHTML="Found "+b+" results for '"+searchInput.value+"'";
    }else{
        location.reload();
        document.getElementById('search-id').value = "";
        result.style.visibility = "hidden";
        }
    document.getElementById("search-id").onclick = function() {
        location.reload();
        document.getElementById('search-id').value = "";
        result.style.visibility = "hidden";
    }
    }
 
// get value from the data json and create dynamic element
function addElement(appendIn, value){

    let imgBookmarked = "";
        if(value.isBookmarked == true){
            imgBookmarked = "../assets/icon-bookmark-full.svg";
        }else{
                imgBookmarked = "../assets/icon-bookmark-empty.svg";
        }
        
    let div = document.createElement('div');
    div.className = "card";

    let {thumbnail, year, title, category, rating } = value;

    div.innerHTML = `
                <div class="card-icon">
                     <img src="${imgBookmarked}" alt="">
                     </div>

                     <img class="cover" src="${thumbnail.regular.small}" alt="">
                     <div class="infos">
                     <div class="detail flex">
                         <p class="years">${year}</p>
                         <p>•</p>
                         <p class="category">${category}</p>
                         <p>•</p>
                         <p class="pegi">${rating}</p>
                     </div>
                     <h4 id="titre-film">${title}</h4> 
                     </div>
    `;
    
    appendIn.appendChild(div);
}

//reset search input lors de l'actualisation de la page

window.onload = function(){
    document.getElementById("search-id").value = "";
   }

