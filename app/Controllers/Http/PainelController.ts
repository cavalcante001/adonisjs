// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {
    protected users = [{
        id: 1,
        name: 'Paulo Gomes'
    }, {
        id: 2,
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

    async usuario({params}) {
        let myRequestedUserId = +params['id'];
        let myUser = this.users.find(user => user.id === myRequestedUserId);

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
