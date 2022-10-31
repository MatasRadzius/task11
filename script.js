const ENDPOINT = "https://melon-potent-period.glitch.me"

async function getItemsData(url) {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return null;
        });
}
async function deleteItem(url) {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        alert(response.ok ? "skills are erased" : "error");

        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}
async function getItemsDataFromUrl(url) {
    const data = await getItemsData(url);
    drawItems(data);
    
    console.log(data);
}

function drawItems(data) {
    const itemGrid = document.getElementById("table");

    data.forEach((dataItem) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const skillName = document.createElement("p");
        skillName.textContent = dataItem.skillName;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteItem(ENDPOINT + "/" + dataItem.id);
        });

        itemContainer.append(skillName, deleteButton);
        itemGrid.append(itemContainer);
    });
}


getItemsDataFromUrl(ENDPOINT);




