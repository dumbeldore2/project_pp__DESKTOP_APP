var list_a = [];
var totaal_list_a = 0;
var list_b = [];
var totaal_list_b = "";
var list_c = [];
var list_d = [];
var key = false;

function a(a,b , c ,d){
    list_a.push(a);
    list_b.push(b);
    list_c.push(c);
    list_d.push(d);

    totaal_list_a += list_a[list_a.length -1];
    totaal_list_b += list_b[list_b.length -1];

    //console.log(totaal_list_a);
    //console.log(totaal_list_b);
    //console.log(list_a.length);
    //console.log(list_d[0]);

    if(totaal_list_a == 30){key = true};
    if(totaal_list_b == "PP"){key = true};
    if(totaal_list_b == "HeP"){key = true};
    console.log(key);
}

function b(){
    if(key == true){
        window.open("page2.html","_self");
    } else {
        list_a = [];
        list_b = [];
    }
}

function c(){
    console.log(key);
    require('electron').ipcRenderer.send("key",key);
    //const { ipcRenderer } = require('electron');
    //ipcRenderer.send("key",key);
}

//require('electron').ipcRenderer.send("key",key);