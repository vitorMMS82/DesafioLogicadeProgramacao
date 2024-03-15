const nota01 = 9;
const nota02 = 10;
const nota03 = 3;


const media = (nota01 + nota02 + nota03) / 3

if (media >= 7) {
    console.log(`O aluno foi aprovado com média final de: ${
        media}`)
} else if (media <=4){
    console.log (`O aluno foi reprovado com média final de: ${
        media}`)
} else {
    console.log (`O aluno está de recuperação com média final de: ${media}`)
}

