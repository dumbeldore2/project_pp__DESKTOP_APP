var final_object = [];

require('electron').ipcRenderer.on('final_object',(event,message) => {
    console.log(message);
})