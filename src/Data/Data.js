 const Data=[{
    id:1,
    nombre:"British-Mile",
    img:"https://i.pinimg.com/originals/56/6f/c6/566fc6d90496153ee8889ccc492066b6.jpg",
    category:"British",
    stock:25
},
{
    id:2,
    nombre:"British-Bitter",
    img:"https://cultocervecero.com/wp-content/uploads/2018/08/Taller-de-Cerveza-Bitter-Ale.png",
    category:"British",
    stock:9
},
{
    id:3,
    nombre:"British-Pale Ale",
    img:"https://cdn.shopify.com/s/files/1/1103/5152/products/cerveza-adnams-jack-brand-mosaic-pale-ale_grande.png?v=1529630294",
    category:"British",
    stock:3
},
{
    id:4,
    nombre:"Deutsch-Altbier",
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/092/868/products/paleale_01-c72e8fc7aba997df6515122017064393-480-0.png",
    category:"Deutsch",
    stock:16
},
{
    id:5,
    nombre:"Deutsch-Holsch",
    img:"https://loopulo.com/wp-content/uploads/2020/04/ballast-point-california-kolsch-loopulo-01.jpg",
    category:"Deutsch",
    stock:12
},
{
    id:6,
    nombre:"Lager-Pilsen",
    img:"http://www.mercaderiasperu.com/assets/uploads/0cb6dacd1edf36894c65f9d014413292.jpg",
    category:"Lager",
    stock:7
},
{
    id:7,
    nombre:"Lager-Münchner Hell",
    img:"https://www.bierstars.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/h/p/hp_flasche05_muenchner_hell_freigestellt_112017.png",
    category:"Lager",
    stock:5
},
{
    id:8,
    nombre:"Lager-Bock",
    img:"https://minicerveceria.com/108-home_default/cerveza-double-bock.jpg",
    category:"Lager",
    stock:15
},
{
    id:9,
    nombre:"Beer-wheat",
    img:"https://minicerveceria.com/97-thickbox_default/cerveza-de-trigo.jpg",
    category:"Wheat",
    stock:23
},
{   id:10,
    nombre:"Lager-Amber",
    img:"https://jumboargentina.vteximg.com.br/arquivos/ids/217361-512-512/Cerveza-Imperial-Amber-Lager-Cerveza-Imperial-Amber-Lager-1-L-2-27172.jpg?v=636383819554500000",
    category:"Lager",
    stock:19
},
]

const getFetch= new Promise((res,rej)=>{
    let condition=true
    if(condition){
        setTimeout(() => {
            res(Data)
            
        }, 2000);
    }
    else{
        rej(console.log("No hay datos"))
    }
})

export default getFetch;