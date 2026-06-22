export function about() {
    const topCon = document.querySelector('#content');

    const header1 = document.createElement('h2');
    header1.textContent = 'About Us';
    header1.className = 'about-header-1';
    
    const text1 = document.createElement('p');
    text1.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis dolor, neque molestiae facere iusto quia id minima. Nisi debitis rerum deleniti maiores quisquam quidem, fugit soluta natus saepe voluptatibus.'
    text1.className = 'about-text-1';

    const header2 = document.createElement('h2');
    header2.textContent = 'About Our Food';
    header2.className = 'about-header-2';

    const text2 = document.createElement('p');
    text2.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus corporis voluptate fugiat voluptatem quis modi, eius et excepturi obcaecati repudiandae iusto odit, veritatis assumenda beatae! Corporis debitis qui temporibus quos.';
    text2.className = 'about-text-2';

    topCon.appendChild(header1);
    topCon.appendChild(text1);
    topCon.appendChild(header2);
    topCon.appendChild(text2);
}