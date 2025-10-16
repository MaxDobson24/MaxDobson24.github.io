// This code runs when you click the search button
function handleSearch() {
  const query = document.querySelector('input').value;
  if (query.trim() === "") {
    alert("Please enter something to search for!");
  } else {
    alert("You searched for: " + query);
  }
}