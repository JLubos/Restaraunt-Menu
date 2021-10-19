//items

const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke milkshake wolf bitter live-edge
        blue bottle, hammock freegan copper mug whatever cold pressed`,

    },
    {
        id: 2,
        title: "dinner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `I'm baby woke milkshake wolf bitter live-edge
        blue bottle, hammock freegan copper mug whatever cold pressed`,

    },

    {
        id: 3,
        title: "dinner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `I'm baby woke milkshake wolf bitter live-edge
        blue bottle, hammock freegan copper mug whatever cold pressed`,

    }


];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    let displayMenu = menu.map(function(item){
        return `<article class="menu-item">
        <img src="menu-item.jpeg" class="photo" alt="menu item"/>
        <div class="item-info">
            <header>
                <h4>buttermilk pancakes</h4>
                <h4 class="price">$15</h4>
            </header>
            <p class="item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci hic illo repellat distinctio porro id voluptatum dolores possimus sapiente alias atque, sunt explicabo, sint voluptas accusamus doloribus. Autem, quibusdam non.</p>
        </div>
    </article>`

    });
    console.log(displayMenu);
    
});