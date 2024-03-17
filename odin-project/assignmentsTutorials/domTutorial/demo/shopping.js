const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    const userInput = document.querySelector("#item").value;
    addToList(userInput);
});

function addToList(item){
    const ul = document.querySelector("ul");

    const itemContainer = document.createElement("li");
    itemContainer.textContent = item;
    ul.append(itemContainer);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delButton");
    deleteButton.textContent = "Delete";
    itemContainer.append(deleteButton);

    deleteButton.addEventListener("click", () => {
        itemContainer.remove();
    });
}