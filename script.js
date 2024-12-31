function insert_Row() {
  // Get the reference to the table
  const table = document.getElementById("sampleTable");

  // Create a new row (<tr>)
  const newRow = table.insertRow(0);  // Insert at position 1, just below the header row

  // Create the left cell (td) for the new row
  const cell1 = newRow.insertCell(0);  // Insert at position 0 (left cell)
  cell1.innerText = "New Cell1";  // Set the text content to "New Cell1"

  // Create the right cell (td) for the new row
  const cell2 = newRow.insertCell(1);  // Insert at position 1 (right cell)
  cell2.textContent = "New Cell2";  // Set the text content to "New Cell2"
}