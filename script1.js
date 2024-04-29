const container = document.getElementById('table-container');


let table_js = document.createElement('table');
table_js.className = "dynamic-table";

// lets create thead: 

// let thead = document.createElement('thead');

const header  = table_js.createTHead() // thead

// lets create tr:

// let tr = document.createElement('tr');

const firstRow = header.insertRow(0);
firstRow.className = "first-row";


let headingOfTable = ["id", "name", "phone", "website", "company"];
//  let count = 0
headingOfTable.forEach((heading) => {
         const cell =  firstRow.insertCell(-1) 
         cell.innerText = heading;
})
// const tbody = table_js.createTBody();
function addNewRow(row_data){
     // lets find tbody
    const tbody = table_js.querySelector('tbody') || table_js.createTBody(); 
    const newRow = tbody.insertRow(0);
    
    row_data.forEach((heading) => {
        const cell =  newRow.insertCell(-1) 
        cell.innerText = heading;
  })
}

addNewRow(["1", "Leanne Graham", "1-770-736-8031 x56442", "hildegard.org", "Romaguera-Crona"])

addNewRow(["2", "Ervin Howell", "010-692-6593 x09125", "anastasia.net", "Deckow-Crist"])




container.append(table_js);