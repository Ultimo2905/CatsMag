
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('.CatsCard').insertAdjacentHTML("afterbegin", renderKittens(cats));
});

// Функции вывода карточек котиков(Форма)
function renderKitten(kitten) {
    return `
    <div class="information_card">
        <div class="kitten_card" style="background-color: ${getRandomColor()}">
          <div class="price">
            <span class="text_price">Price: ${kitten.price + '  ua'}</span>
          </div>
            <img src="${kitten.img_url}"class="kitten_img">
        </div>
        <div class="footer_cat">
              <div class="kitten_information">
                  <span>${kitten.id}</span>
                  <span>${kitten.name}</span>
              </div>
              <div class="line">
              </div>
             <div class="kitten_information_category">
               <span>${kitten.category}</span> 
             </div>
        </div>
    </div>
`;
}
// Функции вывода карточек котиков(Вывод из бд)
function renderKittens(cats) {
    return cats.map(cat => renderKitten(cat))
        .join('');}

// Функция для рандомного цвета фона в табличках котиков
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Dropdown 
document.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.matches('.dd-button')) {
    target.nextElementSibling.classList.toggle('visible'); 
  }
  
  const clickableDropdown = target.closest('.dropdown');
  
  [...document.querySelectorAll('.dropdown')].forEach((currentDropdown) => {
    if (currentDropdown !== clickableDropdown) {
      currentDropdown.querySelector('.dd-menu').classList.remove('visible');
    }
  });
   if(event.target.closest('.dd-menu')){
  console.log(event.target.innerText); 
   };
});
