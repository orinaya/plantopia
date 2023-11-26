var plantsData = [
  {
    id: 1,
    name: "Mon petit pot",
    description: "Offrez ce super pot à un super pote",
    image: "img/plant-1.png",
    note: 4,
    review: 3,
    price: "10,99€",
  },
  {
    id: 2,
    name: "Ma succulente",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/succulente-1.png",
    note: 4,
    review: 0,
    price: "12,99€",
  },
  {
    id: 3,
    name: "Ma super monstera",
    description: "Elle ne fait pas peur",
    image: "img/monstera.png",
    note: 4,
    review: 10,
    price: "50,98€",
  },
  {
    id: 4,
    name: "Yucca",
    description: "Achetez moi par pitié",
    image: "img/yucca.png",
    note: 4,
    review: 2,
    price: "30,98€",
  },

  {
    id: 5,
    name: "Bambou",
    description: "Prenez un grand bout",
    image: "img/plant-1.png",
    note: 12,
    review: 1,
    price: "60,99€",
  },
  {
    id: 6,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plant-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 7,
    name: "Ma succulente 3",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plant-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 8,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plant-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 9,
    name: "Mon petit pot",
    description: "Offrez ce super pot à un super pote",
    image: "img/plant-1.png",
    note: 4,
    review: 3,
    price: "10,99€",
  },
  {
    id: 10,
    name: "Ma succulente",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/succulente-1.png",
    note: 4,
    review: 0,
    price: "12,99€",
  },
  {
    id: 11,
    name: "Ma super monstera",
    description: "Elle ne fait pas peur",
    image: "img/monstera.png",
    note: 4,
    review: 10,
    price: "50,98€",
  },
  {
    id: 12,
    name: "Yucca",
    description: "Achetez moi par pitié",
    image: "img/yucca.png",
    note: 4,
    review: 2,
    price: "30,98€",
  },

  {
    id: 13,
    name: "Bambou",
    description: "Prenez un grand bout",
    image: "img/plant-1.png",
    note: 12,
    review: 1,
    price: "60,99€",
  },
  {
    id: 14,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plant-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 15,
    name: "Ma succulente 3",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plant-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 16,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plant-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
];

var plantsList = document.getElementById("suggest-plants");
var newCard;

for (var i = 0; i < plantsData.length; i++) {
  var newCard = document.createElement("div");
  newCard.classList.add("search-content");
  newCard.innerHTML = `
          <img src="img/icons/icon-heart-line.svg" alt="" class="search-content_icon" />
              <img src="${plantsData[i].image}" alt="" class="search-content_img" />
              <div class="search-content_infos">
                <p class="infos-title">${plantsData[i].name}</p>
                <p class="infos-text">${plantsData[i].description}</p>
                <div class="infos-note">
                  <div class="infos-note_icon">
                    <img src="img/icons/icon-star-fill.svg" class="star" />
                    <img src="img/icons/icon-star-fill.svg" class="star" />
                    <img src="img/icons/icon-star-fill.svg" class="star" />
                    <img src="img/icons/icon-star-fill.svg" class="star" />
                    <img src="img/icons/icon-star-empty.svg" class="star" />
                  </div>
                  <p class="infos-note_text">(${plantsData[i].review})</p>
                </div>
                <p class="infos-price">${plantsData[i].price}</p>
                <button class="btn infos-button">Ajouter au panier</button>
              </div>
      `;

  plantsList.appendChild(newCard);
}
