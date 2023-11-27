var plantsData = [
  {
    id: 1,
    name: "Médinilla",
    description: "Médine est là",
    image: "img/plants/medinilla.png",
    alt: "Medinilla roses en pot",
    review: 4,
    price: "40,99€",
  },
  {
    id: 2,
    name: "Tulipe fever",
    description: "Toute le monde s'enflamme pour les bulbes de tulipes",
    image: "img/plants/tulipe-1.png",
    alt: "Tulipes roses vase",
    review: 50,
    price: "20,99€",
  },
  {
    id: 3,
    name: "Gladiolus",
    description: "Ave Cesar",
    image: "img/plants/gladiolus.png",
    alt: "Gladiolus roses et blanches vase",
    review: 12,
    price: "12,99€",
  },
  {
    id: 4,
    name: "Cactus",
    description: "Le cac tue pas",
    image: "img/plants/cactus-1.png",
    alt: "Cactus fleuri rose",
    review: 3,
    price: "10,99€",
  },
];
var plantsHome = document.getElementById("selection-right");
var newCard;

for (var k = 0; k < plantsData.length; k++) {
  var newHomeCard = document.createElement("div");
  newHomeCard.classList.add("selection-shortcard");
  newHomeCard.innerHTML = `
  <img src="img/icons/icon-heart-line.svg" alt="icone coeur ligne" class="selection-shortcard_icon" />
  <img src="${plantsData[k].image}" alt="${plantsData[k].alt}" class="selection-shortcard_img" />
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
