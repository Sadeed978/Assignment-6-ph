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
            <button onclick="loadCards(${category.id})">${category.category_name}<button>
        `;
        categoriesContainer.appendChild(categoryDiv);
    });
};

const loadCards = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => { displayCards(data.plants); })
        .catch(err => console.error("Error fetching data:", err));
};


const displayCards = cards => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML ===''; 
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
        const btn = cardDiv.querySelector('.card-btn');
        btn.addEventListener('click', function() {
            addToCart(card,btn);
        });
        cardsContainer.appendChild(cardDiv);
        
    });
};
let count = 0;
function addToCart(card,btn ) {
        const plantContainer = document.querySelector('.plant-container');
        const newEntry = document.createElement('div');
        newEntry.className = 'bg-white p-4 rounded shadow mb-4';
        newEntry.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${card.name}</h2>
            <p class="text-gray-700 mb-2">Price: ${card.price}</p>
            <p class="text-gray-700">Category: ${card.category}</p>
            <button class=" remover bg-red-400">Remove</button>
        `;
        plantContainer.appendChild(newEntry);
        count=count + parseInt(card.price);
        document.getElementById('count').innerText = `Total Amount: $${count}`;
    }
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('remover')) {
            const entry = event.target.closest('div');
            const priceText = entry.querySelector('p').innerText;
            const price = parseInt(priceText.replace('Price: ', ''));
            count -= price;
            document.getElementById('count').innerText = `Total Amount: $${count}`;
            entry.remove();
        }
    });

 
        






       
   

        
