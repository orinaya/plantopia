var plantsData = [
  {
    name: "Mon petit pot",
    description: "Offrez ce super pot à un super pote",
    image: "img/plant-1.png",
    note: 4,
    review: 3,
    price: "10,99€",
  },
  {
    name: "Ma succulente",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/succulente-1.png",
    note: 4,
    review: 0,
    price: "12,99€",
  },
  {
    name: "Ma super monstera",
    description: "Elle ne fait pas peur",
    image: "img/monstera.png",
    note: 4,
    review: 10,
    price: "50,98€",
  },
  {
    name: "Yucca",
    description: "Achetez moi par pitié",
    image: "img/yucca.png",
    note: 4,
    review: 2,
    price: "30,98€",
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
        <img src="img/icon-star-fill.svg" class="star" />
        <img src="img/icon-star-fill.svg" class="star" />
        <img src="img/icon-star-fill.svg" class="star" />
        <img src="img/icon-star-fill.svg" class="star" />
        <img src="img/icon-star-empty.svg" class="star" />
      </div>
      <p class="note-text">(${plantsData[k].review})</p>
    </div>
    <p class="shortcard-infos_price">${plantsData[k].price}</p>
  </div>
    `;

  plantsHome.appendChild(newHomeCard);
}
