const os = require('os');

const plataform = os.platform();
const arch = os.arch();
const release = os.release();

console.log(`Este computador roda na plataforma: ${plataform}. Com a arquitetura ${arch}. E a versão ${release}.`);


const cpu = os.cpus();

console.log(`Este computador possui uma CPU com ${cpu.length} cores, do modelo ${cpu[0].model} com a capacidade de ${cpu[0].speed / 1000} GHz.`);

const mem = os.totalmem();

const memRAM = (Math.round(mem / 1e+9)*100)/100

console.log(`A memória RAM deste computador é de ${memRAM} GB.`);