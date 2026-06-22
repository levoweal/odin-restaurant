export function menu() {
    const topCon = document.querySelector('#content');

    const foodGrid = document.createElement('div');
    foodGrid.className = 'food-grid';

    function foodItem(name) {
        const Div = document.createElement('div');
        Div.className = 'food-item';

        const Name = document.createElement('h3');
        Name.textContent = name;

        const Desc = document.createElement('p');
        Desc.textContent = 'Description';

        Div.appendChild(Name);
        Div.appendChild(Desc);

        return Div;
    }

    for (let i = 0; i < 9; i++) {
        foodGrid.appendChild(foodItem(`Item ${i+1}`));
    }

    topCon.appendChild(foodGrid);
}