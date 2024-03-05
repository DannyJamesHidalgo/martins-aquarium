
import {getTips} from '../database.js'

export const TravelTips = () => {
   
    const tips = getTips()
    
    let htmlString = '<h1 id="TravelTips__header">Travel Tips:</h1><article class=" travelTip__list">'
    for (const tip of tips) {
        htmlString += `<section class="tips__card"><ul>
        <li><div class="tips__quotes">${tip.tip}</div></li></ul>
      
    </section>
`
}
htmlString += `</article>`

return htmlString
}
