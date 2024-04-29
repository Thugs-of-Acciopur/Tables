const table_container = document.getElementById('table-container');


let tableWrapper = document.createElement('table');



// lets create th: 
let thead = document.createElement('thead');
tableWrapper.append(thead);
// lets create tr:
let tr = document.createElement('tr');
thead.append(tr);

let headingOfTable = ["id", "name", "phone", "website", "company"];

headingOfTable.forEach((heading)=>{
   let theading = document.createElement('th');
    theading.innerText = heading;
    tr.append(theading);
})




// lets create tbody: 
let tbody = document.createElement('tbody');

// multiple row will be reuired 
// each row will need tds

// I want 3 rows in my tbable body and each rows with its uniqe data

let tableData = {
    0: ["1", "Leanne Graham", "1-770-736-8031 x56442", "hildegard.org", "Romaguera-Crona"],
    1: ["2", "Ervin Howell", "010-692-6593 x09125", "anastasia.net", "Deckow-Crist"],
    2: ["3", "Clementine Bauch", "1-463-123-4447", "ramiro.info", "Romaguera-Jacobson"]
}

// for(let row = 0; row<=2; row++){

// }


for(let row in tableData){
    let tableRow = document.createElement('tr');
    for(let data of tableData[row]){
          // tds  
          // adds tds to tr
    }

    // tr to tbody
}




table_container.append(tableWrapper);