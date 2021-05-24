const os = require('os');

const memTotal = os.totalmem();
const memFree = os.freemem();

const memRAM = (Math.round(memTotal / 1e+9)*100)/100;
const memRAMFree = (Math.round(memFree / 1e+9)*100)/100;

const memUsed = (Math.round((memTotal - memFree) / 1e+9 )*100)/100;

setInterval(() => {
  console.log(`Memória RAM utilizada: ${memUsed} X Memória RAM Total: ${memRAM}`)
}, 1000);

