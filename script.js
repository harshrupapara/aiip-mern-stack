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

//Add Data
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
const deleteCheckEl = document.getElementById("delButton");
function onAddWebsite(e) {
  data.forEach((element) =>
    tbodyEl.insertAdjacentHTML(
      "beforebegin",
      `<tr id="rows"><td>${element.name}<br/><input class="form-check-input" type="checkbox"/></td><td>${element.Price}<br/><input class="form-check-input" type="checkbox"/></td><td>${element.is_available}<br/><input class="form-check-input" type="checkbox"/></td><td><button type="button" class="btn btn-secondary" style="cursor: pointer">Delete</button></td></tr>`
    )
  );
}
onAddWebsite();

//Delete
function onDeleteRow(e) {
  if (!e.target.classList.contains("btn-secondary")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

tableEl.addEventListener("click", onDeleteRow);

//Delete Checked
function onDeleteChecked(e) {
  if (!e.target.classList.contains("form-check-input")) {
    return;
  }

  const btn = e.target;
  btn.closest("td").remove();
}

tableEl.addEventListener("click", onDeleteChecked);

//Search
const searchInputEl = document.getElementById("searchInputEl");

function searchTable() {
  let input, filter, trEl, tdEl, txtValue;
  input = document.getElementById("searchInputEl");
  filter = input.value.toUpperCase();
  let tableEl = document.getElementById("tableEl");
  trEl = tableEl.getElementsByTagName("tr");

  for (let i = 0; i < trEl.length; i++) {
    tdEl = trEl[i].getElementsByTagName("td")[0];
    if (tdEl) {
      txtValue = tdEl.textContent || tdEl.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        trEl[i].style.display = "";
      } else {
        trEl[i].style.display = "none";
      }
    }
  }
}
