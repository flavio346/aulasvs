new Vue({
    el: '#desafio',
    data: {
        nome: "flavio borges",
        idade: "28",
        link: "https://pbs.twimg.com/profile_images/752518047785680896/UDRhCmtb.jpg"
       },
    methods: {
        aleatorio(){
            numero = Math.random(1)
            return numero
        }
    },   
})