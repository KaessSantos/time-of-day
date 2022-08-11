
let data = new Date()
let hora = data.getHours()
let res = document.querySelector('#res')
let foto = document.querySelector('#foto')
let msg = document.querySelector('#msg')
let cont = document.querySelector('.container')

if(hora > 00 && hora <= 12){
    res.innerHTML = `Bom dia agora são ${hora}:00 horas da manhã !`
    cont.style.background = '#f3d3c4'
    msg.innerHTML = `Que seu dia seja especial! Que tenha as mãos de Deus para te sustentar, sorrisos para te iluminar e amor para te guiar! Bom Dia! `

}else if(hora > 12 && hora <= 18){
    res.innerHTML = `Boa tarde agora são ${hora}:00 horas da tarde.`
    foto.setAttribute('src', 'img/photo-tarde.png')
    cont.style.background = '#b4d6ea'
    msg.innerHTML = `Boa tarde, meus amigos! Vamos que vamos pois ainda temos muito o que viver neste lindo dia. Continuemos com muito foco, coragem e fé!`

}else{
    res.innerHTML = `Boa noite agora são ${hora}:00 horas`
    cont.style.background = '#41241c'
    res.style.color = '#fff'
    foto.setAttribute('src', 'img/photo-noite.png')
    msg.innerHTML = `Que Deus nos livre de tudo aquilo que chega para tirar a nossa paz, que seja uma noite de paz e conexão com a fé.`
    msg.style.color = '#fff'
}