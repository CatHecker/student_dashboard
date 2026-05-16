// Sticky header behavior
let lastScrollTop = 0;
const header = document.getElementById("site-header");
const scrollThreshold = 50;

window.addEventListener("scroll", (e) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add box shadow when scrolled
  if (scrollTop > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Hide header when scrolling down, show when scrolling up
  if (scrollTop > scrollThreshold) {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }
  }

  lastScrollTop = scrollTop;
});

// Mobile menu toggle
let testArray = [
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description",
  },
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description",
  },
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description",
  },
  {
    type: "income",
    sum: 500,
    category: "food",
    date: "01.10.26",
    description: "Description",
  },
];

const mobileMenu = document.getElementById("mobile-menu");

// Add active class to nav links
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to clicked link and its mobile/desktop counterpart
    const linkText = link.textContent;
    navLinks.forEach((item) => {
      if (item.textContent === linkText) {
        item.classList.add("active");
      }
    });

    // Close mobile menu if open
    mobileMenu.classList.remove("show");
    mobileMenuToggle.parentElement.classList.remove("mobile-menu-open");
  });
});

// Prevent actual form submission
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

document.getElementById("saveChangeBtn").addEventListener("click", (e) => {
  handleFormSubmit(e);
  //   let user = {
  //   name: 'John',
  //   surname: 'Smith'
  // };
  // let response = await fetch('/article/fetch/post/user', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8'
  //   },
  //   body: JSON.stringify(user)
  // });
  // let result = await response.json();
  // alert(result.message);
  //   fetch("localhost:8080");
  //
});
const applicantForm = document.getElementById("mars-once");
function serializeForm(formNode) {
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  let result = Array.from(formNode).map((element) => {
    const { name, value } = element;
    return { name, value };
  });
  console.log(result);
  localStorage.setItem(
    "transactions",
    JSON.stringify([...transactions, result]),
  );
}

let startFetch = () => {
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  return transactions;
};
console.log(startFetch());

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

let table = document.createElement("table");
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
