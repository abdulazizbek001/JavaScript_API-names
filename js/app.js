const elContainer = document.querySelector('.container');
const elBtnMoon = document.querySelector('.btn_moon');
const elBtnSun = document.querySelector('.btn_sun');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((rec) => rec.json())
    .then((data) => mapper(data))

function mapper(item) {
    item.map((element) => {
        const elTitle = document.createElement('h1');
        setTimeout(() => {

            elTitle.textContent = `Name: ${element.name}`;

            elContainer.append(elTitle);

            setTimeout(() => {
                window.localStorage.setItem('Name', elTitle.textContent);
            }, 2000)
        }, 3000);
    });
};

elBtnMoon.addEventListener('click', () => {
    document.body.style.background = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqHvzyQ3DmWs98y3iHNesB5BwizpAFUGuYg&usqp=CAU")';
    document.body.style.color = 'white';
    elBtnMoon.style.cssText = `
        color: white;
        background-color = white;
    `
    elBtnSun.style.cssText = `
        color: white;
        background-color = white;
`
});

elBtnSun.addEventListener('click', () => {
    document.body.style.background = 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghKD1fkAqFBUd5gdrCji0PMcYAWTjbms0qHgTjDFF5dCjVmgh6EJM9vGo3JQqzLDTiYH_Zc7dMVBCC4jRCL2-BjJbIakKrhZWoYFmceequtu2LFzksv_c7nGGcbTqgczSbh9tbqWV0IUY/s1600/white_flag.gif")';
    document.body.style.color = 'black';
    document.body.style.backgroundSize = 'cover';
});