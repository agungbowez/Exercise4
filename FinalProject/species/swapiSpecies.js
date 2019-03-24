const url = 'https://swapi.co/api/species/';


function fetchDataSwapi(url) {

    return fetch(url).then((response) => response.json());

}


function rowTable(data) {

    const row = document.createElement('tr');


  //deklarasi key api swapi

    const { 
 
		name,
	 	classification,
		designation, 
		average_heigt, 
		skin_colors, 
		hair_colors, 
		average_lifespan, 
		homeworld, 
		language,
		people,
		films,
		created,
		edited,
		url
	} = data;

    row.appendChild(element('td', name))
    row.appendChild(element('td',classification))
    row.appendChild(element('td',designation))
    row.appendChild(element('td', average_heigt))
    row.appendChild(element('td', skin_colors))
    row.appendChild(element('td', hair_colors))
    row.appendChild(element('td', average_lifespan))
    row.appendChild(element('td', homeworld))
    row.appendChild(element('td', language ))
    row.appendChild(element('td', people,))
    row.appendChild(element('td', films))
    row.appendChild(element('td', created ))
    row.appendChild(element('td', edited ))
    row.appendChild(element('td', url ))


 return row;

}



function element(a,b,c) {

    const A = document.createElement(a);
    const content = document.createTextNode(b);

    A.appendChild(content);

    if (c) {
       A.classList.add(c);
    }

    return A;

}

const viewTablePlanets = document.getElementById('tablePlanets').getElementsByTagName('tbody')[0];
      
fetchDataSwapi(url).then((data) => {

      data.results.forEach(result => {
      const row = rowTable(result);
      viewTablePlanets.appendChild(row);
   });

});


function filteringTable() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablePlanets");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tablePlanets");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}