document.getElementById("yearInput").value = Number(new Date().getFullYear())
document.getElementById("monthInput").value = Number(new Date().getMonth()+1)

function createTable(year, month) {
  let numberOfDays = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month-1, 0).getDay();
  console.log(firstDay)

  //create table
  let table = document.createElement("table");
  table.id = "table"
  document.body.appendChild(table);

  //create rows
  for (let i = 1; i < 7; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    //create columns
    for (let i = 1; i < 8; i++) {
      let td = document.createElement("td");
      tr.appendChild(td);

      let input = document.createElement("input");
      input.className = "daysInCalendar"
      td.appendChild(input);
    }
  }

  //create headrow
  const weekday = new Array(7);
  weekday[0] = "Mo";
  weekday[1] = "Tu";
  weekday[2] = "We";
  weekday[3] = "Th";
  weekday[4] = "Fr";
  weekday[5] = "Sa";
  weekday[6] = "Su";
  let firstRow = table.firstChild;
  let headRow = table.insertBefore(document.createElement("tr"), firstRow);
  for (let i = 0; i < weekday.length; i++) {
    let th = document.createElement("th");
    let thInput = document.createElement("label");
    thInput.innerHTML = weekday[i];
    th.appendChild(thInput);
    headRow.appendChild(th);
  }

  //fill it
  let rows = table.childNodes;

  let j = 0;
  let i = 1;
  for (i; i <= numberOfDays; i++) {
    j++;
    for (j; j <= 6; j++) {
      if (i > numberOfDays) break
      for (let k = 0; k < 7; k++) {
        if (i == 1) {
          k = firstDay;
          console.log("k" +k)
        }

        let tds = rows[j].childNodes;
        let td = tds[k];

        td.firstChild.value = i;
        
        i++;
        if (i > numberOfDays) break
        //console.log(td);

      }
      
    }
  }

  return table;
}

let monthInput = document.getElementById("monthInput");
let yearInput = document.getElementById("yearInput");
let button = document.getElementById("okButton");

button.onclick= function() {
  if (monthInput.value > 12 || monthInput.value < 1 || yearInput.value<1000) {
    window.alert("Please insert month 1-12 or/and year bigger than 1000");
  }

  else {

  
  let oldTable = document.getElementById("table");
  if (oldTable) {
    oldTable.parentNode.removeChild(oldTable);
  }  
  document.getElementById("current").innerHTML = "Month: " + monthInput.value + " Year: " + yearInput.value;
  createTable(yearInput.value, monthInput.value)
  }

  let filled = document.getElementsByClassName("daysInCalendar");
  for (let i = 0; i<filled.length; i++) {
    if (filled[i].value) {
      filled[i].style.backgroundColor="azure"
    }
    else {
      filled[i].style.borderColor="lightgray"
    }
  }
};

