var final_object = [];

require('electron').ipcRenderer.on('final_object',(event,message) => {
    console.log(message);
    final_object = message;
    console.log(final_object.length);

    var ul = document.querySelector(".ul1");

    for(i = 0 ; i < final_object.length ; i ++){

        console.log(i);

        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href","page4.html");

        var div = document.createElement("div");
        div.setAttribute("class","object");

        var p = document.createElement("p");
        p.setAttribute("class","object_title");

        var img = document.createElement("img");
        img.setAttribute("src","facebook.png");
        img.setAttribute("class","object_img");

        div.appendChild(img);
        div.appendChild(p);
        a.appendChild(div);
        li.appendChild(a);
        ul.appendChild(li);

        //const item = document.createTextNode(final_object[i])
        p.textContent = final_object[i];
    }
})


