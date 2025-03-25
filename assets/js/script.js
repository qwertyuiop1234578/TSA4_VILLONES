document.addEventListener('DOMContentLoaded', function() {
    const restaurantItems = document.querySelectorAll('.restaurant-item');
    const restaurantInfoPopup = document.getElementById('restaurantInfoPopup');
    const restaurantDetails = document.getElementById('restaurantDetails');
    const closeBtn = document.querySelector('#restaurantInfoPopup .close-btn');
    const mainMenuBtn = document.getElementById('mainMenuBtn');


    restaurantItems.forEach(item => {
        item.addEventListener('click', function() {
            const restaurantName = this.getAttribute('data-restaurant');
            const details = getRestaurantDetails(restaurantName);

            restaurantDetails.innerHTML = `
                <h2>${details.name}</h2>
                <img src="${details.image}" alt="${details.name}">  <p>${details.description}</p>
            `;

            restaurantInfoPopup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        restaurantInfoPopup.style.display = 'none';
    });

    mainMenuBtn.addEventListener('click', function() {
        restaurantInfoPopup.style.display = 'none';
    });
});

function getRestaurantDetails(name) {
    const data = {
        'Dango': {
            name: 'Dango',
            image: '',
            description: 'Dango are Japanese dumplings made from mochiko (rice flour), often served on skewers with various sweet or savory toppings.'
        },
        'Curry': {
            name: 'Curry',
            image: '',
            description: 'Japanese curry is a thick, mild, and slightly sweet stew, typically with vegetables and meat, served over rice.'
        },
        'Oni': {
            name: 'Oni',
            image: '',
            description: 'Onigiri are Japanese rice balls, typically formed into triangular or cylindrical shapes, often wrapped in nori (seaweed), and filled with various savory ingredients.'
        },
        'Ramen': {
            name: 'Ramen',
            image: '',
            description: 'Ramen is a Japanese noodle soup dish consisting of wheat noodles served in a flavorful broth, often topped with sliced pork, seaweed, and other ingredients.'
        }
    };
    return data[name];
}