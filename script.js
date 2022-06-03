let data = [
  {
    name: "Apple",
    Price: 10,
    is_available: true,
  },
  {
    name: "Guava",
    Price: 6,
    is_available: true,
  },
  {
    name: "Grapes",
    Price: 4,
    is_available: false,
  },
  {
    name: "Mango",
    Price: 15,
    is_available: true,
  },
  {
    name: "Musk Melon",
    Price: 20,
    is_available: true,
  },
];

const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  data.forEach((element) =>
    tbodyEl.insertAdjacentHTML(
      "beforebegin",
      `<tr id="rows"><td>${element.name}</td><td>${element.Price}</td><td>${element.is_available}</td><td><button type="button" class="btn btn-secondary" style="cursor: pointer">Delete</button></td></tr>`
    )
  );
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("btn-secondary")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}
onAddWebsite();
tableEl.addEventListener("click", onDeleteRow);
