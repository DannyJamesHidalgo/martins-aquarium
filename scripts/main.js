/*import { getFish } from "./database.js"
import {}
on this paig we will be excuting the functions that are buil on other modules to then push it to the html paige 

*/


import { getFish,mostHolyFish,soldierFish,nonHolyFish} from './database.js'
import {FishList} from './fish/FishList.js'
import {TravelTips} from './locations/travelTips.js'
import {CareTips} from './fish/careTips.js'

import {TravelLocations} from './locations/locationList.js'
  const holyFish = mostHolyFish()
const soldierfish = soldierFish()
const regularfish = nonHolyFish()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const holyFishHTMLElement = document.querySelector(".holyFish__container")
holyFishHTMLElement.innerHTML = FishList(holyFish)

const soldierFishHTMLElement = document.querySelector(".solderFish__container")
soldierFishHTMLElement.innerHTML = FishList(soldierfish)

const regularfishFishHTMLElement = document.querySelector(".regulafish__container")
regularfishFishHTMLElement.innerHTML = FishList(regularfish)
// const childHTMLElement = document.querySelector('')


const allTipstipsHTMLElement = document.querySelector(".ALL__Tips")
allTipstipsHTMLElement.innerHTML = TravelTips()

const harvestlocationsHTMLElement = document.querySelector(".ALL__Locations")
harvestlocationsHTMLElement.innerHTML = TravelLocations()

const careTipsHTMLElement = document.querySelector(".Care_tips")
careTipsHTMLElement.innerHTML = CareTips()

