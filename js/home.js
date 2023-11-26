var plantsData = [
  {
    id: 1,
    name: "Mon cactus",
    description: "Il vous apportera du piquant dans votre vie",
    image: "img/plants/cactus-1.png",
    note: 4,
    review: 3,
    price: "10,99€",
  },
  {
    id: 8,
    name: "Tulipe fever",
    description: "Toute le monde s'enflamme pour les bulbes de tulipes",
    image: "img/plants/tulipe-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 5,
    name: "Médinilla",
    description: "Elle est jolie",
    image: "img/plants/medinilla.png",
    note: 12,
    review: 1,
    price: "60,99€",
  },
  {
    id: 2,
    name: "Ma succulente",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-1.png",
    note: 4,
    review: 0,
    price: "12,99€",
  },
];
var plantsHome = document.getElementById("selection-right");
var newCard;

for (var k = 0; k < plantsData.length; k++) {
  var newHomeCard = document.createElement("div");
  newHomeCard.classList.add("selection-shortcard");
  newHomeCard.innerHTML = `
  <img src="img/icon-heart-line.svg" alt="" class="selection-shortcard_icon" />
  <img src="${plantsData[k].image}" alt="" class="selection-shortcard_img" />
  <div class="shortcard-infos">
    <p class="shortcard-infos_title">${plantsData[k].name}</p>
    <p class="shortcard-infos_text">${plantsData[k].description}</p>
    <div class="shortcard-infos_note">
      <div class="note-icon">
        <img src="img/icons/icon-star-fill.svg" class="star" />
        <img src="img/icons/icon-star-fill.svg" class="star" />
        <img src="img/icons/icon-star-fill.svg" class="star" />
        <img src="img/icons/icon-star-fill.svg" class="star" />
        <img src="img/icons/icon-star-empty.svg" class="star" />
      </div>
      <p class="note-text">(${plantsData[k].review})</p>
    </div>
    <p class="shortcard-infos_price">${plantsData[k].price}</p>
  </div>
    `;

  plantsHome.appendChild(newHomeCard);
}
