const { httpError } = require('../helpers/handleError');
const userModel = require('../models/users');
const PORT = process.env.PORT || 3600;
const URL_PUBLIC = process.env.URL_PUBLIC || '/';

const getItems = async (req, res) => {
    try {
        const listAll = [
            {
            "_id":1,
            "name":"Eternal Life",
            "album": "Grace",
            "cover": "https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg",
            "artist": {
                "name":"Jeff Buckley",
                "nickname":"Jeff Buckley",
                "nationality":"US"
            },
            "duration":{
                "start":0,
                "end": 333
            },
            "url":`${URL_PUBLIC}/track.mp3`
        },

        {
            "_id": 2,
            "name": "Instant Crush",
            "album": "Random Access Memories",
            "cover": "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png",
            "artist": {
            "name": "Daft Punk",
            "nickname": "Daft Punk",
            "nationality": "FR"
            },
            "duration": {
            "start": 0,
            "end": 289
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 2,
            "name": "Fireside",
            "album": "AM",
            "cover": "https://akamai.sscdn.co/tb/next/?url=%2Fuploadfile%2Fletras%2Falbuns%2F5%2F7%2Fc%2Fb%2F31278.jpg&w=1920&q=75",
            "artist": {
            "name": "Arctic Monkeys",
            "nickname": "Arctic Monkeys",
            "nationality": "UK"
            },
            "duration": {
            "start": 0,
            "end": 272
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 3,
            "name": "Run Your Mouth",
            "album": "Submarine",
            "cover": "https://i.scdn.co/image/ab67616d00001e02b19ac38a59cddd80da3cedcb",
            "artist": {
            "name": "The Marías",
            "nickname": "The Marías",
            "nationality": "US"
            },
            "duration": {
            "start": 0,
            "end": 216
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 4,
            "name": "Reckoner",
            "album": "In Rainbows",
            "cover": "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png",
            "artist": {
            "name": "Radiohead",
            "nickname": "Radiohead",
            "nationality": "UK"
            },
            "duration": {
            "start": 0,
            "end": 270
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 5,
            "name": "El Animal",
            "album": "El Nervio del Volcán",
            "cover": "https://upload.wikimedia.org/wikipedia/en/c/c0/El_nervio_del_volcan.jpg",
            "artist": {
            "name": "Caifanes",
            "nickname": "Caifanes",
            "nationality": "MX"
            },
            "duration": {
            "start": 0,
            "end": 270
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 6,
            "name": "When I'm Sixty Four",
            "album": "Sgt. Pepper's Lonely Hearts Club Band",
            "cover": "https://akamai.sscdn.co/letras/360x360/albuns/9/8/b/4/2662.jpg",
            "artist": {
            "name": "The Beatles",
            "nickname": "The Beatles",
            "nationality": "UK"
            },
            "duration": {
            "start": 0,
            "end": 270
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 7,
            "name": "Perdonar Es Divino",
            "album": "Bocanada",
            "cover": "https://akamai.sscdn.co/letras/360x360/albuns/1/2/5/7/2183651712605467.jpg",
            "artist": {
            "name": "Gustavo Cerati",
            "nickname": "Gustavo Cerati",
            "nationality": "AR"
            },
            "duration": {
            "start": 0,
            "end": 270
            },
            "url": `${URL_PUBLIC}/track.mp3`
        },
        {
            "_id": 8,
            "name": "Nutshell - Unplugged",
            "album": "Unplugged",
            "cover": "https://akamai.sscdn.co/letras/360x360/albuns/2/9/8/f/532.jpg",
            "artist": {
            "name": "Alice in Chains",
            "nickname": "Alice in Chains",
            "nationality": "US"
            },
            "duration": {
            "start": 0,
            "end": 270
            },
            "url": `${URL_PUBLIC}/track.mp3`
        }
        ]

                res.send({ data: listAll });
    } catch (e) {
        httpError(res, e);
    }
};

const getItem = (req, res) => {

};

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({data : resDetail})
    }catch(e){
        httpError(res, e)
    }
}

const updateItem = (req, res) => {

};

const deleteItem = (req, res) => {

};

module.exports = {getItems, getItem, updateItem, createItem, updateItem, deleteItem}