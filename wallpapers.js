

import { append } from "./prodimport.js";



let data = [ 
    {
    img: "https://images.unsplash.com/photo-1600017751108-6df9a5a7334e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658211177392-0befed8d1965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1618859867043-79afc5c6c581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657615873009-20729d827eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658334439475-4a1cb7b31bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1645161109166-1528024f2fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658236252834-4e3d4a22ee6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658236252726-4b6840da3191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658279967815-388645755042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658233126994-e383874733ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658270103946-cd2af3a4392a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658197567564-bba88dce845f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658197567564-bba88dce845f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1658197566869-d2c36e424d67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
},
{
    img: "https://images.unsplash.com/photo-1657811763824-8f42e2d5c657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1652961989677-a236d38f63f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    img: "https://images.unsplash.com/photo-1654737178110-977669b9bcdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}


]


append(data);