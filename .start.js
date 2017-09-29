const stat = require('fs').stat;
const exec = require('child_process').exec;

(function install() {
    stat('./node_modules/', (err, stats) => {
      if (err) {
        console.log("Instalando las dependencias, por fabor aguarde....");
        exec('npm install');
      }
    })
  })();
