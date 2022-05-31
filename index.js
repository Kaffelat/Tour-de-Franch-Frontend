import { renderTemplate, setActive, showPage } from "./utils.js"
import {getBikeRiders, sortBikeRidersHandler} from "./pages/bikeRiders/bikeriders.js";
import {addBikeRiderHandler} from "./pages/bikeRiders/add-bikeriders.js";

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
        //Here you can execute JavaScript for the selected page
        case "page-bikeriders": {
            getBikeRiders()
            sortBikeRidersHandler()
            break
        }
        case "add-bikeRider": {
            addBikeRiderHandler()
            break
        }

    }
}
 document.getElementById("menu").onclick = renderMenuItems;
 showPage("page-about") //Set the default page to render