var plantsData = [
  {
    id: 1,
    name: "Lys blanche",
    description: "Elle est très lisse",
    image: "img/plants/lys.png",
    alt: "Lys blanche vase",
    review: 45,
    price: "12,99€",
    category: "Fleur",
  },
  {
    id: 2,
    name: "Médinilla",
    description: "Médine est là",
    image: "img/plants/medinilla.png",
    alt: "Medinilla roses en pot",
    review: 4,
    price: "40,99€",
    category: "Fleur",
  },
  {
    id: 3,
    name: "Tulipe",
    description: "Toute le monde s'enflamme pour les bulbes de tulipes",
    image: "img/plants/tulipe-1.png",
    alt: "Tulipes roses vase",
    review: 50,
    price: "20,99€",
    category: "Fleur",
  },
  {
    id: 4,
    name: "Gladiolus",
    description: "Ave Cesar",
    image: "img/plants/gladiolus.png",
    alt: "Gladiolus roses et blanches vase",
    review: 12,
    price: "12,99€",
    category: "Fleur",
  },
  {
    id: 5,
    name: "Cactus",
    description: "Le cac tue pas",
    image: "img/plants/cactus-1.png",
    alt: "Cactus Fleuri rose",
    review: 3,
    price: "10,99€",
    category: "Succulente",
  },
  {
    id: 6,
    name: "Succulente",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-1.png",
    alt: "Succulente en pot",
    review: 6,
    price: "12,99€",
    category: "Succulente",
  },
  {
    id: 7,
    name: "Orchidée",
    description: "Elle a une idée derrière la tête",
    image: "img/plants/orchidee.png",
    alt: "Orchidée blanche en pot",
    review: "24",
    price: "20,99€",
    category: "Fleur",
  },
  {
    id: 8,
    name: "Roses",
    description: "Elles ne sont pas roses",
    image: "img/plants/rose-1.png",
    alt: "Roses blanches vase",
    review: 3,
    price: "10,99€",
    category: "Fleur",
  },
  {
    id: 9,
    name: "Monstera",
    description: "Elle n'est pas très effrayante",
    image: "img/plants/monstera.png",
    alt: "Monstera en pot",
    review: 10,
    price: "50,98€",
    category: "Plantes d'intérieur",
  },
  {
    id: 10,
    name: "Yucca",
    description: "Achetez moi par pitié",
    image: "img/plants/yucca.png",
    alt: "Yucca en pot",
    review: 2,
    price: "30,98€",
    category: "Plantes d'intérieur",
  },
  {
    id: 11,
    name: "Ma succulente 2",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-2.png",
    alt: "Succulente en pot",
    review: 50,
    price: "20,99€",
    category: "Succulente",
  },

  {
    id: 12,
    name: "Ma succulente 3",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-3.png",
    alt: "Succulente en pot",
    review: 3,
    price: "10,99€",
    category: "Succulente",
  },
  {
    id: 13,
    name: "Ma succulente 4",
    description: "Cette plante est succulente mais elle ne se mange pas",
    image: "img/plants/succulente-4.png",
    alt: "Succulente en pot",
    review: 10,
    price: "50,98€",
    category: "Succulente",
  },
];

var plantsList = document.getElementById("list-plants");
var searchbar = document.getElementById("searchbar");
var selector = document.getElementById("sort");

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

function filterByCategory() {
  var selectedCategory = document.getElementById("categoryFilter").value;

  if (selectedCategory === "all") {
    createListPlants(plantsData);
  } else {
    var filteredByCategory = plantsData.filter((plant) => plant.category === selectedCategory);
    plantsList.innerHTML = "";
    createListPlants(filteredByCategory);
  }
}

selector.addEventListener("change", function () {
  var sorteredList = plantsData;

  switch (selector.value) {
    case "nom_asc":
      sorteredList = plantsData.sort(compareStrings);
      break;
    case "nom_desc":
      sorteredList = plantsData.sort(compareStrings).reverse();
      break;
    case "prix_asc":
      sorteredList = plantsData.sort(compareNumbers);
      break;
    case "prix_desc":
      sorteredList = plantsData.sort(compareNumbers).reverse();
      break;
  }
  plantsList.innerHTML = "";
  createListPlants(sorteredList);
});

function toggleHeartIcon(icon) {
  var currentSrc = icon.src;

  if (currentSrc.includes("icon-heart-line")) {
    icon.src = currentSrc.replace("icon-heart-line", "icon-heart-fill");
  } else if (currentSrc.includes("icon-heart-fill")) {
    icon.src = currentSrc.replace("icon-heart-fill", "icon-heart-line");
  }
}

function createListPlants(list) {
  document.getElementById("resultNumber").textContent = list.length;
  for (var j = 0; j < list.length; j++) {
    newCard = document.createElement("div");
    newCard.classList.add("search-content");
    newCard.innerHTML = `
   
    <img src="img/icons/icon-heart-line.svg" alt="icone coeur ligne" class="search-content_icon" onclick="toggleHeartIcon(this)"/>
    <a class="search-link" href="product.html" >
    <img src="${list[j].image}" alt="${list[j].alt}" class="search-content_img" />
    <div class="search-content_infos">
      <p class="infos-title">${list[j].name}</p>
      <p class="infos-text">${list[j].description}</p>
      <div class="infos-note">
        <div class="infos-note_icon">
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-fill.svg" class="star" />
          <img src="img/icons/icon-star-empty.svg" class="star" />
        </div>
        <p class="infos-note_text">(${list[j].review})</p>
      </div>
      <p class="infos-price">${list[j].price}</p>
      <button class="btn infos-button">Ajouter au panier</button>
    </div></a> 
                  `;
    plantsList.appendChild(newCard);
  }
}

createListPlants(plantsData);
