function jumble1(){
    console.log("akash")

    let img=document.createElement("img")
    // img.
}


let data=[
{
    img:"https://unsplash.com/blog/content/images/2022/04/Visuals-compressed-Blog--1.gif",
    p1:"Community",
    h2:"Meet Susan Wilkinson",
    p2:"Alex Begin"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/06/DeepMind--Blog--1.jpg",
    p1:"Announcements ",
    h2:"Unsplash ✕ DeepMind",
    p2:"Natalie Brennan"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1000/2022/05/Tim-portrait-recent.jpg",
    p1:"Announcements ",
    h2:"Meet the Unsplash Team: Tim Carbone",
    p2:"Natalie Brennan"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/05/Amy-Shamblen--Blog--1.jpg",
    p1:"Community ",
    h2:"Meet Amy Shamblen",
    p2:"Alex Begin "
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/06/A_look_back_at_May_-Blog-.jpeg",
    p1:"Announcements ",
    h2:"A look back on May",
    p2:"Annie Spratt"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/05/shingi-rice-NXbBSg5DUMc-unsplash--1-.jpg",
    p1:"Announcements",
    h2:"Pride in Open Photography",
    p2:"Alex Begin"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/05/The_Importance_of_Editing_-Blog--1.jpeg",
    p1:"Announcements ",
    h2:"How Editing Can Transform an Image",
    p2:"Alex Begin"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1000/2022/04/c7b46c89997b396fbb73d70392975263.jpeg",
    p1:"Announcements",
    h2:"Meet the Unsplash Team: Bruno Aguirre",
    p2:"Natalie Brennan"
},
{
    img:"https://unsplash.com/blog/content/images/2022/05/Color-of-Water-Winners--Blog--1.gif",
    p1:"Announcements",
    h2:"Top 15: Color of Water",
    p2:"Natalie Brennan"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/04/Frankie-Cordoba--Blog--2.jpg",
    p1:"Community",
    h2:"Meet Frankie Cordoba",
    p2:"Natalie Brennan"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/05/April-Round-up--Blog--1.jpg",
    p1:"Announcements",
    h2:"A look back on April",
    p2:"Annie Spratt"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/05/Motherhood--Blog--3.jpg",
    p1:"Community",
    h2:"Motherhood & Photography",
    p2:"Alex Begin"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1000/2022/05/alina-levkovich-MdrxZyATfLM-unsplash.jpg",
    p1:"Announcements",
    h2:"Fresh ways to capture Spring",
    p2:"Alex Begin"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1000/2022/04/Portrait.jpg",
    p1:"Announcements",
    h2:"Meet the Unsplash Team: Olly Ash",
    p2:"Natalie Brennan"
},
{
    img:"https://unsplash.com/blog/content/images/size/w1600/2022/04/Digital_Nomad_-Blog-.jpeg",
    p1:"Announcements",
    h2:"Digital Nomad",
    p2:"Natalie Brennan"
}

]

data.forEach(function(el){
    let img=document.createElement("img")
    img.src=el.img
    let p1=document.createElement("p")
    p1.innerText=el.p1
    let h2=document.createElement("h2")
    h2.innerText=el.h2

    let p2=document.createElement("p")
    p2.innerText=el.p2

    let div=document.createElement("div")
    div.setAttribute("class","shadow")

    div.append(img,p1,h2,p2)
    document.getElementById("last").append(div)

});



