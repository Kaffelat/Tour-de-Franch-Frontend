import {URL} from "../../settings.js"
import {handleHttpErrors} from "../../fetchUtils.js";
const bikeRiderURL = URL+"/bikeRiders"

export async function getBikeRiders() {
    try{
        const bikeRiders = await fetch(bikeRiderURL).then(res=>handleHttpErrors(res))
        console.log(bikeRiders)
        const rows = bikeRiders.map(c=>`
        <tr>
          <td>${c.id}</td>
          <td>${c.name}</td>
          <td>${c.age}</td>
          <td>${c.timeInMinutes}</td>
          <td>${c.mountainPoints}</td>
          <td>${c.sprintPoints}</td>
          <td>${c.bikeTeamName}</td>
          <td><button id="delete-${c.id}">delete</button></td>
        </tr>
     `).join("")
        document.getElementById("tbl-body").innerHTML = rows
        document.getElementById("tbl-body").onclick=del
    } catch(err){
        console.log(err.message)
    }

}
function del(evt){
    const id = evt.target.id
    fetch("").then()
    alert(id)

}

export async function sortBikeRidersHandler(){
    document.getElementById("btn-sort").onclick = sortBikeRiders
}

function sortBikeRiders(){

    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table-bikerider-data")
    switching = true

    while(switching){
        switching = false
        rows = table.rows

        for (i=1; i<(rows.length - 1); i++){
            shouldSwitch = false
            x = rows[i].getElementsByTagName("TD")[3]

            y = rows[i +1].getElementsByTagName("TD")[3]

            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i])
            switching = true
        }
    }
}