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
];

// for (let i in data) {
//   let row = (
//     <tr>
//       <td>{data[i].name}</td>
//       <td>{data[i].Price}</td>
//       <td>{data[i].is_available}</td>
//     </tr>
//   );

//   let table = document.getElementById("table-data");
//   table.append(row);
// }

let root = document.getElementById("root");
data.forEach((element) =>
  root.insertAdjacentHTML(
    "beforebegin",
    `<tr><td>${element.name}</td><td>${element.Price}</td><td>${element.is_available}</td></tr>`
  )
);
