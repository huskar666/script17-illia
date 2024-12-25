const input = document.getElementById('input');
const button = document.getElementById('updateButton');
button.addEventListener('click', () =>{
    button.textContent = input.value;
});


const img = document.getElementById('img');
img.src = 'https://i.ytimg.com/vi/q_yO0cxRoLQ/maxresdefault.jpg';


const img1 = document.getElementById('img1');
const posilannya = document.getElementById('posilannya');

posilannya.href = 'https://edu.goiteens.com/learn/17204335/15266038/15266398/homework';
posilannya.style.marginLeft = '100px';
posilannya.style.marginRight = '100px';
img1.alt = 'sillentHill';


const element = document.getElementById('spisok');
const firstItem = element.firstElementChild;
firstItem.textContent = 'i see that town';