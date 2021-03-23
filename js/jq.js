function bookSearch() {
  var search = document.getElementById("search").value;
  document.getElementById("results").innerHTML = "";
  table = document.getElementById("results-table");
  console.log(search);
  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function (data) {
      for (i = 0; i < data.items.length; i++) {
        results.innerHTML += "<td>" + data.items[i].volumeInfo.title + "</td>";
      }
    },
    type: "GET",
  });
}
document
  .getElementById("button-search")
  .addEventListener("click", bookSearch, false);
