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
