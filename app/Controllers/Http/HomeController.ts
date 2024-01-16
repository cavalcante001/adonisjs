import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class HomeController {
    async index({ view }) {
        let dados = {
            usuarios: [
                {
                    nome: 'Paulo Gomes',
                    tecnologias: ['html, css, javascript'],
                    admin: true,
                }, 
                {
                    nome: 'José da silva',
                    tecnologias: ['javascript, php, python'],
                    admin: false
                }
            ],
            script: console.log('chega até aqui')
        }
        return view.render('painel/homepage', dados);
    }

    async sobre() {
        return 'Sobre Nós'
    }
}
