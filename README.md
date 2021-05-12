# project_pp__DESKTOP_APP

Dit zijn de Codes die moeten gedaan worden voor er aan het programma echt gewerkt kan worden , deze tut was wel goed
https://www.youtube.com/watch?v=kN1Czs0m1SU&t=2311s

dit zijn de titorials die helpen bij het conecteren naar de mongodb
https://www.youtube.com/playlist?list=PLaxxQQak6D_dHXuCYHwgyHwhs225vUX6d

dit is een belangrijke website voor als je een require error krijgt in u html scripts
https://stackoverflow.com/questions/55093700/electron-5-0-0-uncaught-referenceerror-require-is-not-defined
gebruik deze drie ook momenteel werken deze bij electron boven de 12
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,

1) om u project deftig aan te maken 

npm init

npm install --save electorn

npm install --save mongoose

------------------------------------------------------------CHANGE-----------------------------------------------------  
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
------------------------------------------------------------TO------------------------------------------------------------
"scripts": {
    "start": "electron ."
},
