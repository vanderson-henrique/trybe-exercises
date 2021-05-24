const fs = require('fs')

const DISK_PATH = './disk'

class SecondaryMemory {
  load (value) {
    const disk = fs.readdirSync(DISK_PATH)

    const nextFileName = `${DISK_PATH}/cel${disk.length}`

    fs.writeFileSync(nextFileName, value.toString());
  }

  get (index) {
    const fileName = `${DISK_PATH}/cel${index}`

    const data = fs.readFileSync(fileName);
    return parseFloat(data);
  }

  clean () {
    fs.rmdirSync(DISK_PATH, { recursive: true })
    fs.mkdirSync(DISK_PATH)
  }
}

module.exports = SecondaryMemory