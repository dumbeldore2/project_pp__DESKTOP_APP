const electron = require('electron');
const server = require('./server1');
const url = require('url');
const path = require('path');

const fs = require('fs');
var listjson1newitems = {};

var data = fs.readFileSync('./json2dbitems.json');
var json2 = {};
json2 = JSON.parse(data);

var final_object = [];



const {app, BrowserWindow , Menu , ipcMain} = electron;

let page1;

// Listen for app to be ready
app.on('ready',function(){
    
    //Create new window
    page1 = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });

    //load html into window
    page1.loadURL(url.format({
        pathname: path.join(__dirname, 'page1.html'),
        protocol: 'file:',
        slashes: true
    }));


    // build menu from the template 
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label: 'lijst',
        submenu:[
            {
                label: 'add Item'
            },
            {
                label: 'Clear Items'
            },
        ]
    }
];


//add dev tools if not in production
if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'devTools',
        submenu:[
            {
                label: 'Toggle devtoos',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
};


//random functie die de objecten in een list zet 
function fun_a(){
    //console.log(json2);
    //console.log(json2[0].account); klein testje

    for(i = 0 ; i < Object.keys(json2).length; i++){
        final_object[i] = json2[i].object;
    }
    console.log(final_object);
}

fun_a();

//catch boolean
ipcMain.on("key",function(e,item){
    //console.log(item);
    if(item == true){
        page2 = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            }
        });

        //load html into window
        page2.loadURL(url.format({
            pathname: path.join(__dirname, 'page2.html'),
            protocol: 'file:',
            slashes: true
        }));
        
        page2.webContents.on('did-finish-load', () => {
            page2.webContents.send('final_object',final_object);
        })
        
        page1.close();
    }
});

//catch input
ipcMain.on("input:page3",function(e,item){
    //console.log(item)
    listjson1newitems = item;
    console.log(listjson1newitems);
    
    var data = JSON.stringify(listjson1newitems);
    fs.writeFileSync('json1newitems.json',data,finish);
    require('./server3');
    require('./server1');
    
    function finish(err){
        console.log("gg")
    }
});