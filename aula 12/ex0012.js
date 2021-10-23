

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12 ){
    console.log('Este Horário corresponde a parte da manhã , Bom Dia!!')
}else {

    if(hora <= 18 ){
        console.log('Este horário pertence a parte da Tarde , Boa Tarde!!')
}else {

    console.log('Este Horário Pertence a parte da Noite , Boa Noite !')
}
}
