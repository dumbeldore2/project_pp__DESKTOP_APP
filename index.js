const electron = require('electron');
const url = require('url');
const path = require('path');

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
    console.log(item);
    if(item == true){
        page1.close();
    }
});