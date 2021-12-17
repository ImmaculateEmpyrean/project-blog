//It is imperative that the key to a object is the same as the name field of the object.. the code is written expecting that this is the case.. and I dont really plan on writing substantial debugging code 

export let searchList = {
    "Koi to Senkyo to Chocolate": {
        name:"Koi to Senkyo to Chocolate",
        aliases:["Koichoco","Love, Election & Chocolate","Love Election and Chocolate","Love, Elections & Chocolate"],
        postLink: "/koiChoco",
        developer: ['sprite','Vridge Inc.'],
        img: require("@/assets/img/koiChoco.jpg"),
        tags:[
            "Romance",
            "Drama",
            "Action",
            "Fantasy"
        ]
    },
    "White Album 2": {
        name:"White Album 2",
        aliases:["WHITE ALBUM2 -i.c.-","WA2ic", "WHITE ALBUM2 -c.c.-","WA2cc"],
        postLink: "/whiteAlbum2",
        developer: ["Leaf","Sting"],
        img: require("@/assets/img/whiteAlbum2.jpg"),
        tags:[
            "Romance",
            "Drama"
        ]
    },
    "ef - a fairy tale of two": {
        name: "ef - a fairy tale of two",
        aliases: ["ever forever", "eternal feather", "emotional flutter", "two", "only two", "two stories", "the fairy tale is not just one", "but are only two."],
        postLink: "/ef",
        developer: ["Minori"],
        img: require("@/assets/img/EfATaleOfTwo.jpg"),
        tags:[
            "Romance",
            "Drama",
            "Thriller",
        ]
    },
    "Phenomeno - Mitsurugi Yoishi wa Kowagaranai": {
        name: "Phenomeno - Mitsurugi Yoishi wa Kowagaranai",
        aliases: [],
        postLink: "/phenomeno",
        developer: ["Nitro Plus"],
        img: require("@/assets/img/phenomeno.jpg"),
        tags:[
            "Horror",
            "Thriller",
        ]
    },
    "Cartagra ~Tsuki Kurui no Yamai~": {
        name: "Cartagra ~Tsuki Kurui no Yamai~",
        aliases: ["Karutagura ~Tsuki-gurui no Yamai~"],
        postLink: "/cartagra",
        developer: ["Innocent Grey"],
        img: require("@/assets/img/cartagra.jpg"),
        tags:[
            "Romance",
            "Drama",
            "Horror",
            "Thriller"
        ]
    },
    "Clannad": {
        name: "Clannad",
        aliases: [""],
        postLink: "/clannad",
        developer: ["Key"],
        img: require("@/assets/img/clannad.png"),
        tags:[
            "Romance",
            "Drama",
            "Comedy"
        ]
    },
    "Crescendo ~Eien da to Omotte Ita Ano Koro~": {
        name: "Crescendo ~Eien da to Omotte Ita Ano Koro~",
        aliases: ["Crescendo ~Eien Datta Ano Koro~"],
        postLink: "/crescendo",
        developer: ["D.O"],
        img: require("@/assets/img/crescendo.png"),
        tags:[
            "Romance",
            "Drama"
        ]
    },
    "Kara no Shoujo - The Second Episode": {
        name: "Kara no Shoujo - The Second Episode",
        aliases: ["Kara no Shoujo 2","Uro no Shoujo", "KnS2"],
        postLink: "/kns2",
        developer: ["Innocent Grey"],
        img: require("@/assets/img/karaNoShojo2.jpg"),
        tags:[
            "Drama",
            "Horror",
            "Thriller"
        ]
    }
}

export let generatePublisherList = function(){
    let publishers = new Set();
    
    let searchListKeys = Object.keys(searchList);
    searchListKeys.forEach(function(key){
        let element = searchList[key]
        element.developer.forEach(function(developer){
            publishers.add(developer)
        })
    });

    return [...publishers];
} 