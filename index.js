const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow , Menu} = electron;

let page1;

// Listen for app to be ready
app.on('ready',function(){
    
    //Create new window
    page1 = new BrowserWindow({});

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