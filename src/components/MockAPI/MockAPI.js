const data = [
    {
        id:1,
        artist:"Drake",
        album:"Certified Lover Boy",
        title:"IMY2",
        length:"4:12",
        year:"2021",
        genre:"Pop",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
    },
    {
        id:2,
        artist:"The Weeknd",
        album:"After Hours",
        title:"After Hours",
        length:"6:01",
        year:"2020",
        genre:"R&B",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
    },
    {
        id:3,
        artist:"Bad Bunny",
        album:"YHLQMDLG",
        title:"La díficil",
        length:"2:43",
        year:"2020",
        genre:"Reggaeton",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
    },
    {
        id:4,
        artist:"Drake",
        album:"Certified Lover Boy",
        title:"IMY2",
        length:"4:12",
        year:"2021",
        genre:"Pop",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
    },
    {
        id:5,
        artist:"The Weeknd",
        album:"After Hours",
        title:"After Hours",
        length:"6:01",
        year:"2020",
        genre:"R&B",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
    },
    {
        id:6,
        artist:"Bad Bunny",
        album:"YHLQMDLG",
        title:"La díficil",
        length:"2:43",
        year:"2020",
        genre:"Reggaeton",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
    },
    {
        id:7,
        artist:"Drake",
        album:"Certified Lover Boy",
        title:"IMY2",
        length:"4:12",
        year:"2021",
        genre:"Pop",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
    },
    {
        id:8,
        artist:"The Weeknd",
        album:"After Hours",
        title:"After Hours",
        length:"6:01",
        year:"2020",
        genre:"R&B",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
    },
    {
        id:9,
        artist:"Bad Bunny",
        album:"YHLQMDLG",
        title:"La díficil",
        length:"2:43",
        year:"2020",
        genre:"Reggaeton",
        stock:10,
        initial:1,
        price:2,
        image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
    }
]

export default function getSongs() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}
