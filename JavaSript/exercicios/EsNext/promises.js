//
function falarDepoisDe(segundos, frase) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Nossa Mentira!').then(frase => frase.concat('?!?')).then(outrafrase=>console.log(outrafrase))
//\\