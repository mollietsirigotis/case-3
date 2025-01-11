
const submit = document.getElementById("submit");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const linkList = document.getElementById("link-list").querySelector("ul");

// Händelselyssnare för ett klick på submit knappen
submit.addEventListener("click", (event) => {
    event.preventDefault(); // Förhindrar att sidan refreshas

    // Få fram värdena från båda input fälten
    const name = nameInput.value;
    const url = urlInput.value;

    // Om båda fälten är ifyllda
    if (name && url) {
        // Skapar ett nytt li element
        const listItem = document.createElement("li");

        // Skapar ett länk element
        const link = document.createElement("a");
        link.href = url;

        // Öppnar sidan i ny flik
        link.target = "_blank";
        link.textContent = name;

        // Appendar link till listitem
        listItem.appendChild(link);
    
        // Appendar listitem till linklist
        linkList.appendChild(listItem);

        // Tar bort texten ur inputfälten
        nameInput.value = "";
        urlInput.value = "";

    } else {
        alert("Fyll i båda fälten!");
    }
});






