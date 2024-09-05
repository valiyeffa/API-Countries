const list = document.querySelector('.row');
const frstBtn = document.querySelector('.z-f');
const scndBtn = document.querySelector('.f-h');
const thrdBtn = document.querySelector('.h-f');
const fourBtn = document.querySelector('.f-t');
const fifthBtn = document.querySelector('.all');

const fetchData = (a, b) => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      let li = "";

      data.slice(a, b).map(item => {
        li += `<div class="col-12 col-sm-6 col-md-4">
<div class="card">
  <img height="300" style="object-fit: contain;" src="${item.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name.common}</h5>
    <p class="card-text">${item.capital}</p>
  </div>
</div>
</div>`
      })
      list.innerHTML = li;
    })
}

frstBtn.onclick = () => {
  fetchData(0, 50);

}

scndBtn.onclick = () => {
  fetchData(50, 100);
}

thrdBtn.onclick = () => {
  fetchData(100, 150);
}

fourBtn.onclick = () => {
  fetchData(150, 200);
}

fifthBtn.onclick = () => {
  fetchData(200, 250);
}