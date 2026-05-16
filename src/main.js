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
});
const applicantForm = document.getElementById("mars-once");
function serializeForm(formNode) {
  let transactions = JSON.parse(localStorage.getItem("transactions"));
  let result = Array.from(formNode).map((element) => {
    const { name, value } = element;
    return { name, value };
  });
  console.log(result);
  localStorage.setItem(
    "transactions",
    JSON.stringify([...transactions, result]),
  );
  startFetch();
}

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

let table = document.createElement("table");
table.classList = "table table-striped";

let startFetch = () => {
  let arr = JSON.parse(localStorage.getItem("transactions"));
  let transactions = arr.map((el) => {
    let ht = {};
    el.map(({ name, value }) => {
      ht[name] = value;
    });
    return ht;
  });
  for (let i = 0; i < transactions.length; i++) {
    let row = table.insertRow();
    console.log(transactions);
    row.insertCell().textContent = transactions[i].type;
    row.insertCell().textContent = transactions[i].sum;
    row.insertCell().textContent = transactions[i].category;
    row.insertCell().textContent = transactions[i].date;
    row.insertCell().textContent = transactions[i].description;
  }
  return transactions;
};
let row = table.insertRow();
row.insertCell().textContent = "Тип";
row.insertCell().textContent = "Сумма";

row.insertCell().textContent = "Категория";
row.insertCell().textContent = "Дата";

row.insertCell().textContent = "Описание";
startFetch();

document.body.append(table);

let getPlus = () => {
  let s = 0;
  let arr = JSON.parse(localStorage.getItem("transactions"));
  let transactions = arr.map((el) => {
    let flag = true;
    el.map(({ name, value }) => {
      if (name === "type" && value === "Расход") flag = false;
      if (name === "sum" && flag) s += Number(value);
    });
  });
  document.getElementById("plus").innerText = s + "₽";
};
getPlus();

let getMinus = () => {
  let s = 0;
  let arr = JSON.parse(localStorage.getItem("transactions"));
  let transactions = arr.map((el) => {
    let flag = true;
    el.map(({ name, value }) => {
      if (name === "type" && value === "Расход") flag = false;
      if (name === "sum" && !flag) s += Number(value);
    });
  });
  document.getElementById("minus").innerText = s + "₽";
};
getMinus();

let getEqual = () => {
  let s = 0;
  let arr = JSON.parse(localStorage.getItem("transactions"));
  let transactions = arr.map((el) => {
    let flag = true;
    el.map(({ name, value }) => {
      if (name === "type" && value === "Расход") flag = false;
      if (name === "sum") {
        if (flag) {
          s += Number(value);
        } else {
          s -= Number(value);
        }
      }
    });
  });
  document.getElementById("equal").innerText = s + "₽";
};
getEqual();
