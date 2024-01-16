// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {
    protected users = [{
        id: 1,
        slug: 'steve',
        name: 'Paulo Gomes'
    }, {
        id: 2,
        slug: 'jobs',
        name: 'Fulano do Sicrano'
    }
    ];

    async index() {
        return { response: 'Index do Painel' }
    }

    async usuarios() {
        return {
            user: this.users
        }
    }

    async usuarioById({params}) {
        let myRequestedUserId = +params['id'];
        let myUser = this.users.find(user => user.id === myRequestedUserId);

        if(myUser) {
            return myUser;
        } else {
            return {error: "Nenhum usuário encontrado"}
        }
    }

    async usuarioBySlug({params}) {
        let myRequestedUserId = params['slug'];
        let myUser = this.users.find(user => user.slug === myRequestedUserId);

        if(myUser) {
            return myUser;
        } else {
            return {error: "Nenhum usuário encontrado"}
        }
    }

    async admin() {
        return { response: 'rota admin' }
    }
}
