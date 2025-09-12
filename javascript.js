const looadData = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data =>{displayPosts(data.categories);})
     .catch(err => console.error("Error fetching data:", err));   
};  
looadData();

const displayPosts = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div'); 
        categoryDiv.classList.add('category');
        categoryDiv.innerHTML = `
            <h3>${category.category_name}</h3>
        `;
        categoriesContainer.appendChild(categoryDiv);
    });
};

const loadCards = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => { displayCards(data.plants); })
        .catch(err => console.error("Error fetching data:", err));
};
loadCards();
const displayCards = cards => {
    const cardsContainer = document.getElementById('cards-container');  
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `   
            <img src="${card.image}" alt="${card.name}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
                <div class="flex flex- gap-2 md:gap-4">
                <p class="card-text"> ${card.category}</p>
                <p class="card-text"><strong>Price:</strong> $${card.price}</p>
                </div>
                <button class="card-btn btn bg-green-500">ADD TO CARD</button>
            </div>
        `;
        cardsContainer.appendChild(cardDiv);
    });
};
const btn = document.querySelector('.plant-container button');
const plantContainer = document.querySelector('.plant-container');

card-btn.addEventListener('click', function() {
  document.querySelector('.plant-container')
  document.createElement('div');
        newEntry.className = 'bg-white p-4 rounded shadow mb-4';
        newEntry.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${card.name}</h2>
            <p class="text-gray-700 mb-2">Called: ${card.price}</p>
            <p class="text-gray-700">Category: ${card.category}</p>
        `;
        plantContainer.prepend(newEntry);
    }
);





       
   

        
