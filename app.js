var inputdata = document.querySelector('#seachbox');
var searchbtn = document.querySelector('#searchbtn');
var columnone = document.querySelector('.columnone');
var columntwo = document.querySelector('.columntwo');
let emptyarray = [];

searchbtn.addEventListener("click", () => { 
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputdata.value.toLowerCase()}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            emptyarray = [...data.data.recipes];
            console.log(emptyarray);
            columnone.innerHTML = '';
            if(emptyarray.length == 0) {
                alert("This recipe is not in our server")
            }
            emptyarray.forEach((item) => {
                columnone.innerHTML += `
                    <div class="divofcolumnone">
                        <img class="imgofdivofcolone" src="${item.image_url}" alt="${item.title}">
                        <span>
                            <span style="color: red;">${item.title}</span>
                            <span><p>${item.publisher}</p></span>
                        </span>
                    </div>`;
            });
        })
        .catch((error) => {
            console.log(error + " ==> error");
        });
});
