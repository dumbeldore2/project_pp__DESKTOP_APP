var final_object = [];

require('electron').ipcRenderer.on('final_object',(event,message) => {
    console.log(message);
    final_object = message;
    console.log(final_object.length);

    var ul = document.querySelector(".ul2");

    for(i = 0 ; i < final_object.length ; i ++){

        console.log(i);

        var li = document.createElement("li");
        var a = document.createElement("a");
        var div = document.createElement("div");
        var p = document.createElement("p");

        div.appendChild(p);
        a.appendChild(div);
        li.appendChild(a);
        ul.appendChild(li);

        //const item = document.createTextNode(final_object[i])
        p.textContent = final_object[i];
    }
})


