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
    id: 10,
    name: "Lys",
    description: "Elle est très lisse",
    image: "img/plants/lys.png",
    note: 4,
    review: 0,
    price: "12,99€",
  },
  {
    id: 2,
    name: "Succulente n°1",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-3.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 1,
    name: "Mon petit pot",
    description: "Offrez ce super pot à un super pote",
    image: "img/plants/pot.png",
    note: 4,
    review: 3,
    price: "10,99€",
  },
  {
    id: 3,
    name: "Ma super monstera",
    description: "Elle ne fait pas peur",
    image: "img/plants/monstera.png",
    note: 4,
    review: 10,
    price: "50,98€",
  },
  {
    id: 4,
    name: "Yucca",
    description: "Achetez moi par pitié",
    image: "img/plants/yucca.png",
    note: 4,
    review: 2,
    price: "30,98€",
  },
  {
    id: 6,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-2.png",
    note: 4,
    review: 50,
    price: "20,99€",
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
  {
    id: 9,
    name: "À changer",
    description: "Offrez ce super pot à un super pote",
    image: "img/plants/pot.png",
    note: 4,
    review: 3,
    price: "10,99€",
  },
  {
    id: 11,
    name: "Ma super monstera",
    description: "Elle ne fait pas peur",
    image: "img/plants/monstera.png",
    note: 4,
    review: 10,
    price: "50,98€",
  },
  {
    id: 12,
    name: "Yucca",
    description: "Achetez moi par pitié",
    image: "img/plants/yucca.png",
    note: 4,
    review: 2,
    price: "30,98€",
  },

  {
    id: 13,
    name: "Bambou",
    description: "Prenez un grand bout",
    image: "img/plants/plant-1.png",
    note: 12,
    review: 1,
    price: "60,99€",
  },
  {
    id: 14,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-2.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 15,
    name: "Ma succulente 3",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-3.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
  {
    id: 16,
    name: "Ma succulente 4",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-2.png",
    note: 4,
    review: 50,
    price: "20,99€",
  },
];

var plantsList = document.getElementById("list-plants");
var searchbar = document.getElementById("searchbar");
var selector = document.getElementById("selector");

searchbar.addEventListener("keyup", function () {
  var dataFiltered = plantsData.filter((data) =>
    data.name.toLowerCase().includes(searchbar.value.toLowerCase())
  );
  plantsList.innerHTML = "";
  createListPlants(dataFiltered);
});

function priceToNumber(price) {
  return parseFloat(price.replace("€", "").replace(",", "."));
}

function compareNumbers(a, b) {
  return priceToNumber(a.price) - priceToNumber(b.price);
}

function compareStrings(a, b) {
  return a.name.localeCompare(b.name);
}

selector.addEventListener("change", function () {
  var sorteredList = plantsData;

  switch (selector.value) {
    case "nom_asc":
      sorteredList = plantsData.sort(compareStrings);
      break;
    case "nom_desc":
      //Decroissant par nom
      sorteredList = plantsData.sort(compareStrings).reverse();
      break;
    case "prix_asc":
      //Croissant par prix
      sorteredList = plantsData.sort(compareNumbers);
      break;
    case "prix_desc":
      //Deroissant par prix
      sorteredList = plantsData.sort(compareNumbers).reverse();
      break;
  }
  plantsList.innerHTML = "";
  createListPlants(sorteredList);
});

// var newDiv;

function createListPlants(list) {
  for (var j = 0; j < list.length; j++) {
    newCard = document.createElement("div");
    newCard.classList.add("search-content");
    newCard.innerHTML = `
    <img src="img/icons/icon-heart-line.svg" alt="" class="search-content_icon" />
    <img src="${plantsData[j].image}" alt="" class="search-content_img" />
    <div class="search-content_infos">
      <p class="infos-title">${plantsData[j].name}</p>
      <p class="infos-text">${plantsData[j].description}</p>
      <div class="infos-note">
        <div class="infos-note_icon">
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-empty.svg" class="star" />
        </div>
        <p class="infos-note_text">(${plantsData[j].review})</p>
      </div>
      <p class="infos-price">${plantsData[j].price}</p>
      <button class="btn infos-button">Ajouter au panier</button>
    </div>
                  `;
    plantsList.appendChild(newCard);
  }
}

createListPlants(plantsData);
