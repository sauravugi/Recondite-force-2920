
 function append(data){
    

        data.map(function(el){
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.img;
        
            div.append(img);
            document.getElementById("append").append(div);
        })
        
        }


export  {append};