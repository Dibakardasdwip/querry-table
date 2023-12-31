// Formatting function for row details - modify as you need
function format(d) {
  // `d` is the original data object for the row
  return (
    "<dl>" +
    "<dt>Full name:</dt>" +
    "<dd>" +
    d.name +
    "</dd>" +
    "<dt>Extension number:</dt>" +
    "<dd>" +
    d.extn +
    "</dd>" +
    "<dt>Extra info:</dt>" +
    "<dd>And any further details here (images etc)...</dd>" +
    "</dl>"
  );
}

let table = new DataTable("#example", {
  ajax: "objects.txt",
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: null,
      defaultContent: "",
    },
    { data: "name" },
    { data: "position" },
    { data: "office" },
    { data: "Age" },
    { data: "Start date" },
    { data: "salary" },
    { data: "salary" },
  ],
  order: [[1, "asc"]],
});

// Add event listener for opening and closing details
table.on("click", "td.dt-control", function (e) {
  let tr = e.target.closest("tr");
  let row = table.row(tr);

  if (row.child.isShown()) {
    // This row is already open - close it
    row.child.hide();
  } else {
    // Open this row
    row.child(format(row.data())).show();
  }
});

$("#example").DataTable({
  select: {
    selector: "td:not(:first-child)",
    style: "os",
  },
});

$(document).ready(function () {
  $(this)
    .find("[data-fa-i2svg]")
    .toggleClass("fa-minus-square")
    .toggleClass("fa-plus-square");
});
