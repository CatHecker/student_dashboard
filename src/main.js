// Sticky header behavior
let lastScrollTop = 0;
const header = document.getElementById('site-header');
const scrollThreshold = 50;

window.addEventListener('scroll', (e) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add box shadow when scrolled
  if (scrollTop > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Hide header when scrolling down, show when scrolling up
  if (scrollTop > scrollThreshold) {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
  }

  lastScrollTop = scrollTop;
});

let testArray = [
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description"
  },
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description"
  },
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description"
  },
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description"
  }
];

let table = document.createElement('table');
table.classList = "table table-striped";

let row = table.insertRow();
row.insertCell().textContent = "Дата";
row.insertCell().textContent = "Тип";
row.insertCell().textContent = "Категория";
row.insertCell().textContent = "Сумма";
row.insertCell().textContent = "Описание";

for (let i = 0; i < testArray.length; i++) {

  let row = table.insertRow();

  row.insertCell().textContent = testArray[i].type;
  row.insertCell().textContent = testArray[i].sum;
  row.insertCell().textContent = testArray[i].category;
  row.insertCell().textContent = testArray[i].date;
  row.insertCell().textContent = testArray[i].description;
}

document.body.append(table);