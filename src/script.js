async function search() {
    const form = document.getElementById('searchForm');
    const formData = new FormData(form);

    try {
      const response = await fetch('http://localhost:3000/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'AIzaSyCYge6cXhLuz3iSoP2UAxahosMBMkjJcWI',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        const results = await response.json();
        filterAndDisplayResults(results);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  }

  function filterAndDisplayResults(data) {
    var resultContainer = document.getElementById('resultContainer');
    var resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';
    if (data && data.length > 0) {
      var headers = data[0];
      var headerRow = resultTable.insertRow();
      for (var i = 0; i < headers.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = headers[i];
        headerRow.appendChild(th);
      }
      for (var j = 1; j < data.length; j++) {
        var rowData = data[j];
        var row = resultTable.insertRow();
        for (var k = 0; k < headers.length; k++) {
          var cell = row.insertCell(k);
          var cellValue = rowData[k] ? rowData[k].toString() : '';
          cell.innerHTML = cellValue.toLowerCase();
        }
      }
      resultContainer.style.display = 'block';
    } else {
      resultContainer.style.display = 'none';
    }
  }