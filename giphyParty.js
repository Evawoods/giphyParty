console.log("Let's get this party started!");

const gifs = document.getElementById('gifs');
const form = document.getElementById('searchForm');
const searched = document.getElementById('search');
const removeBtn = document.getElementById('remove');

// getting the search term from the form and searching giphy then appending to page
async function searchGif(searched){
    // try and catch for erros
    try{
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searched}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        console.log(res);

        const gifUrl = res.data.data[Math.floor(Math.random() * res.data.data.length)].images.downsized_medium.url;
        
        const gifImg = document.createElement('img');
        gifImg.setAttribute('src', gifUrl);

        gifs.appendChild(gifImg);
    }
    catch(e){
        alert('Search term not found! Please Try again.');
    }
}

// adding an event listener to the form, and clearing it after searchiing

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log(searched.value);
    searchGif(searched.value);
    searched.value = '';
});

// adding an event listener to the delete button and clearing the gifs
removeBtn.addEventListener('click', function(evt){
    gifs.innerHTML = '';
})
