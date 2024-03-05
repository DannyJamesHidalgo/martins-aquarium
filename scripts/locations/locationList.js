import {getFish} from '../database.js'

export const TravelLocations = () => {
   
    const locations = getFish()
    
    let htmlString = ' <h1 id="harvest__header">Harvest Locations:</h1><article class="location__list">'
    for (const location of locations) {
        htmlString += `<section class="location__card">
        <div class="tips__quotes">${location.location}</div>
    </section>
`
}
htmlString += `</article>`

return htmlString
}