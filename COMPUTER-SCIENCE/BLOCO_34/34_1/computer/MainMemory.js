class MainMemory {
  constructor () {
    this.loadedMemory = []
  }

  load (value) {
    this.loadedMemory.push(value.toString());
  }

  get (index) {
    return parseFloat(this.loadedMemory[index]);
  }

  clean () {
    this.loadedMemory = []
  }
}

module.exports = MainMemory