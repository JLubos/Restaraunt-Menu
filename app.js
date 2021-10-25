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

    },

    {
        id: 4,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "./images/item-4.jpeg",
        desc: `I'm baby woke milkshake wolf bitter live-edge
        blue bottle, hammock freegan copper mug whatever cold pressed`,

    }


];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");



//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons(); 
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;

    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;


}

function displayMenuButtons() {
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
        values.push(item.category);
        }
        return values;
    },['all']);
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>Al${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    //filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
                
            });
            console.log(menuCategory);
            if(category === 'all'){
                displayMenuItems(menu);
            }else{
                displayMenuItems(menuCategory);
            }
        });
    });

}