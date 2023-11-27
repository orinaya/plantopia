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
  {
    id: 8,
    name: "Tulipe",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/tulipe-1.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
];

var plantsList = document.getElementById("suggest-plants");
var newCard;

function toggleHeartIcon(icon) {
  var currentSrc = icon.src;

  if (currentSrc.includes("icon-heart-line")) {
    icon.src = currentSrc.replace("icon-heart-line", "icon-heart-fill");
  } else if (currentSrc.includes("icon-heart-fill")) {
    icon.src = currentSrc.replace("icon-heart-fill", "icon-heart-line");
  }
}

for (var i = 0; i < plantsData.length; i++) {
  var newCard = document.createElement("div");
  newCard.classList.add("search-content");
  newCard.innerHTML = `
          <img src="img/icons/icon-heart-line.svg" alt="" class="search-content_icon" onclick="toggleHeartIcon(this)"/>
              <img src="${plantsData[i].image}" alt="" id="suggest-img" class="search-content_img" />
              <div class="search-content_infos" id="suggest-infos">
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
                <p class="infos-price" id="price">${plantsData[i].price}</p>
                <button class="btn infos-button">Ajouter au panier</button>
              </div>
      `;

  plantsList.appendChild(newCard);
}
