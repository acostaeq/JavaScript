function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert('Verifique os Dados e tente novamente , Erro!!')
    }else{

        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')


        if ( fsex [0].checked){
            genero = 'Homem'
            if (idade>=0 && idade < 10) {
                //CRiança
                img.setAttribute('src' , 'menino-bebe.jpg.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src' , 'jovem-homen.png.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src' , 'homem.jpg')
            }else {
                //Idoso
                img.setAttribute('src' , 'idoso.png.jpeg')
            }

        } else if (fsex [1].checked){
            genero = ' Mulher'

            if (idade>=0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'menina-bebe.jpg.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src' , 'jovem-mulher.jpg.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src' , 'mulher.jpeg')
            }else {
                //Idoso
                img.setAttribute('src' , 'idosa.jpg.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}