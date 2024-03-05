import {getFish} from '../database.js'

export const CareTips = () => {
   
    const tips = getFish()
    
    let htmlString = '<h1 id="careTips__header">Care Tips:</h1><article class="careTip__list">'
    for (const tip of tips) {
        htmlString += `<section class="careTips__card"><ul>
        <li><div class="careTips__quotes">${tip.care_tips}</div></li></ul>
      
    </section>
`
}
htmlString += `</article>`

return htmlString
}