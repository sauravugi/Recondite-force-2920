

import { append } from "./prodimport.js";


let data = [ 
    {
    img: "https://images.unsplash.com/photo-1658217456399-8e5cf10c128a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658217456319-fd8b6fb12b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1569363301992-9e84da2e35d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658217456324-ac603a39ba15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657925426569-ad97ff77fe4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657222656001-05b4172dd0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657851613794-13616dbcc247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657533987073-764666d9b47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657534259309-01618b7b3497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657553839385-6c25d074d781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657534197589-8adb4874a8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1653349418502-9ed3b5bd2924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658240364743-4706c0ef1a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1656685088143-45e0c4d7e510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657104996708-044ef9812f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1656736759699-75d8beb059a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657110575461-e48b13299c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
}


]


append(data);