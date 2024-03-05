let database = {
    
    fish:  [
        
        
            { 
                id: 1, 
                name: "Salmon", 
                location: "Pacific Ocean", 
                care_tips: "Provide ample swimming space and ensure clean, well-oxygenated water.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Oncorhynchus", 
                length: 59, // Rounded to the nearest whole number
                lengthAsString: "Up to 59 inches", // Added new property with rounded inches
                food: "Small fish, crustaceans, and insects"
            },
            { 
                id: 2, 
                name: "Tuna", 
                location: "Atlantic Ocean", 
                care_tips: "Keep in large tanks with plenty of open space, provide a varied diet, and maintain water quality.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Thunnini", 
                length: 98, // Rounded to the nearest whole number
                lengthAsString: "Up to 98 inches", // Added new property with rounded inches
                food: "Small fish, squid, and crustaceans"
            },
            { 
                id: 3, 
                name: "Cod", 
                location: "North Sea", 
                care_tips: "Maintain cold water temperatures and provide a balanced diet rich in protein.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Gadus", 
                length: 47, // Rounded to the nearest whole number
                lengthAsString: "Up to 47 inches", // Added new property with rounded inches
                food: "Small fish, mollusks, and crustaceans"
            },
            { 
                id: 4, 
                name: "Trout", 
                location: "Freshwater Streams", 
                care_tips: "Ensure clean, well-oxygenated water with a strong current and provide a varied diet.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Oncorhynchus", 
                length: 24, // Rounded to the nearest whole number
                lengthAsString: "Up to 24 inches", // Added new property with rounded inches
                food: "Insects, crustaceans, and small fish"
            },
            { 
                id: 5, 
                name: "Salmon", 
                location: "Pacific Ocean", 
                care_tips: "Provide ample swimming space and ensure clean, well-oxygenated water.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Oncorhynchus", 
                length: 59, // Rounded to the nearest whole number
                lengthAsString: "Up to 59 inches", // Added new property with rounded inches
                food: "Small fish, crustaceans, and insects"
            },
            { 
                id: 6, 
                name: "Tuna", 
                location: "Atlantic Ocean", 
                care_tips: "Keep in large tanks with plenty of open space, provide a varied diet, and maintain water quality.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Thunnini", 
                length: 98, // Rounded to the nearest whole number
                lengthAsString: "Up to 98 inches", // Added new property with rounded inches
                food: "Small fish, squid, and crustaceans"
            },
            { 
                id: 7, 
                name: "Cod", 
                location: "North Sea", 
                care_tips: "Maintain cold water temperatures and provide a balanced diet rich in protein.", 
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Gadus", 
                length: 47, // Rounded to the nearest whole number
                lengthAsString: "Up to 47 inches", // Added new property with rounded inches
                food: "Small fish, mollusks, and crustaceans"
            },
            {
                id: 5,
                name: "Guppy",
                location: "Amazon River",
                care_tips: "Keep in warm water with plenty of plants for hiding spots.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Poecilia reticulata",
                length: 2,
                lengthAsString: "Up to 2 inches",
                food: "Flakes, live, or frozen food"
            },
            {
                id: 6,
                name: "Angelfish",
                location: "South America",
                care_tips: "Provide a large tank with stable water conditions and plenty of hiding spots.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Pterophyllum",
                length: 6,
                lengthAsString: "Up to 6 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 7,
                name: "Betta",
                location: "Southeast Asia",
                care_tips: "Keep in warm water and avoid putting two male bettas together.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Betta splendens",
                length: 3,
                lengthAsString: "Up to 3 inches",
                food: "Pellets, live, or frozen food"
            },
            {
                id: 8,
                name: "Goldfish",
                location: "China",
                care_tips: "Provide a large tank with good filtration and avoid overfeeding.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Carassius auratus",
                length: 10,
                lengthAsString: "Up to 10 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 9,
                name: "Discus",
                location: "Amazon River",
                care_tips: "Maintain stable water conditions and avoid sudden changes.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Symphysodon",
                length: 8,
                lengthAsString: "Up to 8 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 10,
                name: "Molly",
                location: "Central America",
                care_tips: "Provide a tank with plenty of plants and regular water changes.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Poecilia",
                length: 4,
                lengthAsString: "Up to 4 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 11,
                name: "Cichlid",
                location: "Central and South America, Africa",
                care_tips: "Keep in a spacious tank with hiding spots and stable water parameters.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Cichlidae",
                length: 5,
                lengthAsString: "Up to 5 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 12,
                name: "Swordtail",
                location: "Central America",
                care_tips: "Provide a well-planted tank with plenty of swimming space.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Xiphophorus hellerii",
                length: 3,
                lengthAsString: "Up to 3 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 13,
                name: "Neon Tetra",
                location: "South America",
                care_tips: "Keep in schools in a well-established tank with soft, acidic water.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Paracheirodon innesi",
                length: 1.5,
                lengthAsString: "Up to 1.5 inches",
                food: "Flakes, small pellets, and live food"
            },
            {
                id: 14,
                name: "Plecostomus",
                location: "South America",
                care_tips: "Provide plenty of hiding spots and driftwood for grazing.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Hypostomus plecostomus",
                length: 15,
                lengthAsString: "Up to 15 inches",
                food: "Algae wafers, vegetables, and sinking pellets"
            },

            {
                id: 15,
                name: "Zebra Danio",
                location: "Eastern India",
                care_tips: "Prefers a well-planted tank with plenty of swimming space.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Danio rerio",
                length: 2.5,
                lengthAsString: "Up to 2.5 inches",
                food: "Flakes, small pellets, and live food"
            },
            {
                id: 16,
                name: "Rainbowfish",
                location: "Australia, New Guinea",
                care_tips: "Keep in schools in a tank with plenty of open swimming space.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Melanotaenia",
                length: 4,
                lengthAsString: "Up to 4 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 17,
                name: "Koi",
                location: "Japan",
                care_tips: "Provide a large pond with good filtration and aeration.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Cyprinus rubrofuscus",
                length: 18,
                lengthAsString: "Up to 18 inches",
                food: "Pellets, vegetables, and live food"
            },
            {
                id: 18,
                name: "Piranha",
                location: "South America",
                care_tips: "Keep in a species-only tank with secure lids and strong filtration.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Serrasalmus",
                length: 12,
                lengthAsString: "Up to 12 inches",
                food: "Meat, fish, and insects"
            },
            {
                id: 19,
                name: "Corydoras Catfish",
                location: "South America",
                care_tips: "Keep in schools and provide soft substrate and hiding spots.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Corydoras",
                length: 3,
                lengthAsString: "Up to 3 inches",
                food: "Bottom feeder tablets, sinking pellets, and live food"
            },
            {
                id: 20,
                name: "Oscar",
                location: "South America",
                care_tips: "Requires a large tank with hiding spots and strong filtration.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Astronotus ocellatus",
                length: 14,
                lengthAsString: "Up to 14 inches",
                food: "Pellets, live fish, and worms"
            },
            {
                id: 21,
                name: "Killifish",
                location: "Africa, North and South America",
                care_tips: "Keep in pairs or small groups with plenty of plants for hiding.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Cyprinodontidae",
                length: 2,
                lengthAsString: "Up to 2 inches",
                food: "Flakes, small pellets, and live food"
            },
            {
                id: 22,
                name: "Bala Shark",
                location: "Southeast Asia",
                care_tips: "Requires a large tank with plenty of open swimming space.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Balantiocheilos melanopterus",
                length: 12,
                lengthAsString: "Up to 12 inches",
                food: "Flakes, pellets, and live food"
            },
            {
                id: 23,
                name: "Electric Blue Jack Dempsey",
                location: "Central America",
                care_tips: "Provide hiding spots and a soft substrate.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Rocio octofasciata",
                length: 10,
                lengthAsString: "Up to 10 inches",
                food: "Pellets, live food, and vegetables"
            },
            {
                id: 24,
                name: "Redtail Catfish",
                location: "South America",
                care_tips: "Requires a very large tank with strong filtration.",
                img_url: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
                species: "Phractocephalus hemioliopterus",
                length: 40,
                lengthAsString: "Up to 40"
            }
        
        
        
        
            
        ],

        TravelTips:[{
            id: 1,
            tip: "Pack light and smart. Bring versatile clothing and only essentials to avoid overpacking.",
          },
          {
            id: 2,
            tip: "Research your destination beforehand. Learn about local customs, transportation options, and must-see attractions.",
          },
          {
            id: 3,
            tip: "Stay hydrated and take care of your health. Carry a reusable water bottle and prioritize sleep and nutrition.",
          },
          {
            id: 4,
            tip: "Keep important documents safe. Make digital copies of your passport, ID, and travel insurance, and store them securely.",
          },
          {
            id: 5,
            tip: "Be open-minded and flexible. Embrace new experiences, try local cuisine, and be willing to adapt to unexpected situations.",
          }



        ]
        
    
};

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
export const getTips = () => {
    return database.TravelTips.map( TravelTips => ({...TravelTips}))
}



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishData = getFish()
    const holyFish = []

    for (const fish of fishData) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }

    }

    return holyFish
}

export const soldierFish = () => {
    const fishData = getFish()
    const soldiers = []

    for ( const fish of fishData) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish);
        }

    }
  return soldiers
}

export const nonHolyFish = () => {
   const fishData = getFish()
   const regularFish =[]
   
    
   for ( const fish of fishData) { 
      if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        regularFish.push(fish);
      }
    return regularFish
 }
}


/* write a function to return/hold the database to be used in the main.js



remember to us the export const arrow function*/