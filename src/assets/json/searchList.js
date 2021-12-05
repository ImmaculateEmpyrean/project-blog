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
            "Friendship",
            "Male Protagonist",
            "Multiple Endings",
            "Only Good Endings",
            "Central Heroine"
        ]
    },
    "White Album 2 ~Introductory Chapter~": {
        name:"White Album 2 ~Introductory Chapter~",
        aliases:["WHITE ALBUM2 -i.c.-","WA2ic"],
        postLink: "/whiteAlbum2Intro",
        developer: ["Leaf","Sting"],
        img: require("@/assets/img/whiteAlbum2.jpg"),
        tags:[
            "Romance",
            "Dramatic Love Triangle",
            "Kinetic Novel",
            "Male Protagonist"
        ]
    },
    "White Album 2 ~Closing Chapter~": {
        name:"White Album 2 ~Closing Chapter~",
        aliases:["WHITE ALBUM2 -c.c.-","WA2cc"],
        postLink: "/whiteAlbum2ClosingChapter",
        developer: ["Leaf","Sting"],
        img: require("@/assets/img/whiteAlbum2ClosingChapter.jpg"),
        tags:[
            "Romance",
            "Journalist Protagonist",
            "Multiple Endings",
            "Dramatic Love Triangle",
            "Adult Heroine",
            "Male Protagonist"
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
            "Multiple Protagonists",
            "Mystery"
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
            "Kinetic Novel",
            "Male Protagonist",
            "Mystery"
        ]
    },
    "Cartagra ~Tsuki Kurui no Yamai~": {
        name: "Cartagra ~Tsuki Kurui no Yamai~",
        aliases: ["Karutagura ~Tsuki-gurui no Yamai~"],
        postLink: "/cartagra",
        developer: ["Innocent Grey"],
        img: require("@/assets/img/cartagra.jpg"),
        tags:[
            "Detective Work",
            "Multiple Endings",
            "Crime",
            "Horror"    
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
            "Family",
            "Unlockable Epilogue",
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
            "High School",
            "Male Protaganist"
        ]
    },
    "Kara no Shoujo - The Second Episode": {
        name: "Kara no Shoujo - The Second Episode",
        aliases: ["Kara no Shoujo 2","Uro no Shoujo", "KnS2"],
        postLink: "/kns2",
        developer: ["Innocent Grey"],
        img: require("@/assets/img/karaNoShojo2.jpg"),
        tags:[
            "Mystery",
            "Detective Work",
            "Male Protagonist"
        ]
    }
}