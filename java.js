let elList = document.querySelector(".list");

function render(){
    pokemons.forEach(element => {
        let newItem = document.createElement("li");
        newItem.textContent = element.num;
        elList.appendChild(newItem);
        newItem.setAttribute("class", "list__item")



        let newTitle = document.createElement("h2")
        newTitle.textContent = element.name;
        newItem.appendChild(newTitle);
        newTitle.setAttribute("class", "list__title")

        let newImg = document.createElement("img")
        newItem.appendChild(newImg);
        newImg.setAttribute("src" , element.img);
        newImg.setAttribute("class", "list__Img")



        let newId = document.createElement("p")
        newId.textContent = element.id;
        newItem.appendChild(newId);
        newTitle.setAttribute("class", "list__Id")


        let newType = document.createElement("strong")
        newType.textContent = element.type;
        newItem.appendChild(newType);
        newType.setAttribute("class", "list__strong")
        
    });
}


render()

// pokemons.forEach(element => {
//         let newItem = document.createElement("li");
//         newItem.textContent = element.num;
//         elList.appendChild(newItem);
//     });