const electron = require('electron');
const server = require('./server1');
const url = require('url');
const path = require('path');
const fs = require('fs');
var listjson1newitems = {};

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
        
        page1.close();
    }
});

//catch input
ipcMain.on("input:page3",function(e,item){
    //console.log(item)
    listjson1newitems = item;
    //console.log(listjson1newitems);
    
    var data = JSON.stringify(listjson1newitems);
    fs.writeFileSync('json1newitems.json',data,finish);
    require('./server3');
    
    function finish(err){
        console.log("gg")
    }
});