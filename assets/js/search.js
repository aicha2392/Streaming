let searchResult = document.querySelector(".movie-cards");
let searchInput = document.getElementById("search-id");



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
    let item = searchResult.querySelectorAll('.card');
    let b =0;
    console.log(item.length);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');
        
        if(span.innerHTML.toUpperCase().indexOf(searchValue) > -1){
            item[i].style.display = "initial";
            b++;
            
        }else{
            item[i].style.display = "none";
        }
      }

      document.getElementById("result").innerHTML="Found "+b+" results for '"+searchInput.value+"'";
    
    }



// get value from the data json and create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "card";

    let { thumbnail,title, category } = value;

    div.innerHTML = `
                <img class="resultImg" src=${thumbnail.regular.small}></img>
                <h1 class="title">${title}</h1>
                <a href="#" class="category">${category}</a>
            
    `;
    appendIn.appendChild(div);
}

//reset search input lors de l'actualisation de la page

window.onload = function(){
    document.getElementById("search-id").value = "";
   }


