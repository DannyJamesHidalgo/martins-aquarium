// Import the function that returns a copy of the fish array
import {getFish} from '../database.js'
const fishDatabase = getFish()












export const FishList = (fishesArray) => {
    // Invoke the function that you imported from the database module
   

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="FishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishesArray) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div class="fish__name"><h3>${fish.name}</h3></div>  
            <div><img  class="fish__image" src="${fish.img_url}">  </img></div>
            <div class="card__text">
            <div class="fish__species"><strong>species</strong>:${fish.species}</div>
            <div class="fish__length"><strong>length:</strong>${fish. lengthAsString}</div>
            <div class="fish__location"><strong>location:</strong>${fish.location}</div>
            <div class="fish__diet"><strong>diet:</strong>${fish.food}</div>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}




//build three function that iterate throig