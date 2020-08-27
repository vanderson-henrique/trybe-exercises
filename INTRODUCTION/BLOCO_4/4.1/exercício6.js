const peçaXadrez1 = "RAINHA";
let peçaXadrez = peçaXadrez1.toLowerCase();

switch(peçaXadrez){
    case "cavalo":
        console.log("Movimento em L e pode pular outras peças.");
        break;
    case "rei":
        console.log("Movimento em qualquer direção, uma casa por vez");
        break;
    case "rainha":
        console.log("Movimento em qualquer direção, várias casas por vez, mas não pode pular outras peças");
        break;
    case "torre":
        console.log("Movimento na vertical e horizontal e não pode pular outras peças.");
        break;
    case "bispo":
        console.log("Movimento diagonal e não pode pular outras peças.");
        break;
    case "peao":
        console.log("Muvimenta uma casa para frente.");
        break;

}