const sits = [
    {
        id: 1,
        reserved: false
    },
    {
        id: 2,
        reserved: false
    },
    {
        id: 3,
        reserved: false
    },
    {
        id: 4,
        reserved: false
    },
    {
        id: 5,
        reserved: false
    },
    {
        id: 6,
        reserved: false
    },
    {
        id: 7,
        reserved: false
    },
    {
        id: 8,
        reserved: false
    },
    {
        id: 9,
        reserved: false
    },
    {
        id: 10,
        reserved: false
    },
    {
        id: 11,
        reserved: false
    },
    {
        id: 12,
        reserved: false
    },
    {
        id: 13,
        reserved: false
    },
    {
        id: 14,
        reserved: false
    },
    {
        id: 15,
        reserved: false
    },
    {
        id: 16,
        reserved: false
    },
    {
        id: 17,
        reserved: false
    },
    {
        id: 18,
        reserved: false
    },
    {
        id: 19,
        reserved: false
    },
    {
        id: 20,
        reserved: false
    }
]

const generateSits = (sits) => {
    let arr = []
    for (let [key, value] of Object.entries(sits)) {
        if(Math.random() < 0.35) value = true
        else value = false
        arr.push({id : key, reserved : value})
      }
    return arr  
}

let generatedSits = generateSits(sits)

export default generatedSits