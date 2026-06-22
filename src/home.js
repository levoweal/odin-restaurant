export function homePage() {
    const topCon = document.querySelector('#content');

    const logoCon = document.createElement('div');
    logoCon.className = 'logo-con';

    const logo = document.createElement('div');
    logo.textContent = 'logo image';
    logo.className = 'logo-img';

    const name = document.createElement('h1');
    name.textContent = 'Restoraunt Name';
    name.className = 'logo-text';

    logoCon.appendChild(logo);
    logoCon.appendChild(name);
    topCon.appendChild(logoCon);

    const homeContent = document.createElement('div');
    homeContent.className = 'home-content';
    homeContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae, quo esse, repellat est porro corporis et pariatur ipsa voluptatem natus. Itaque asperiores praesentium dolorum eum quae expedita voluptatem quisquam.';
    
    topCon.appendChild(homeContent);
}