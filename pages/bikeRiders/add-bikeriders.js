import {URL} from "../../settings.js"
import {handleHttpErrors} from "../../fetchUtils.js";
import {makeOptions} from "../../fetchUtils.js";

export async function addBikeRiderHandler() {
    document.getElementById("btn-add-bikerider").onclick = addBikeRider
}

function addBikeRider() {
    const bikeRider = {}
    console.log("Called addBikeRider")
    bikeRider.name = document.getElementById("name").value
    bikeRider.age = document.getElementById("age").value
    bikeRider.mountainPoints = document.getElementById("mountain-points").value
    bikeRider.sprintPoints = document.getElementById("sprint-points").value
    bikeRider.timeInMinutes = document.getElementById("time-in-minutes").value
    bikeRider.bikeTeamName = document.getElementById("bike-team-name").value


    const options = makeOptions("post", bikeRider)
    fetch(URL + "/bikeRiders",options).then(res => handleHttpErrors(res))
        .then(res => res.json())
        .then(bikeRider => {
            document.getElementById("bikerider-info-all").innerText = "new Bike Rider was created" + JSON.stringify(bikeRider.name)
        })
        .catch(e => console.error(e))


}