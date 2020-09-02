const fs = require('fs')

const visitas = () => {

  fs.readFile('contador.txt', (error, data) => {
    error ? console.log(`Se detecto el siguiente error ${error}`)
      :
      console.log(`${data}`);
    let visitas = data.toString().split(":")[1];
    visitas++;

    fs.writeFile('contador.txt', `visitas: ${visitas}`, (error) => {
      error ?
        console.log(`Se detecto el siguiente error ${error}`)
        :
        console.log('Escritura exitosa');
    })
  })
}

module.exports = visitas;