import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class HomeController {
    async index({view}) {
        return view.render('painel.homepage', {
            usuario: 'paulo.v.gomes',
            sistema: 'caravelas'
        });
    }

    async sobre() {
        return 'Sobre Nós'
    }
}
