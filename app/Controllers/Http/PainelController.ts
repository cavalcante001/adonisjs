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

    async index({request}) {
        return {
            response: 'Index do painel',
            ip: request.ip(),
            ips: request.ips(),
            method: request.method(),
            language: request.language(),
            qs: request.qs(),
            url: request.url(),
            completeuRL: request.completeUrl(),
            input: request.all(),
            only: request.only(['idade']),
            except: request.except(['idade']),
            headers: request.headers(),
        }
    }

    async usuarios() {
        return {
            user: this.users
        }
    }

    async usuarioById({ params }) {
        if (!params['id']) {
            return this.users;
        }
        let myRequestedUserId = +params['id'];
        let myUser = this.users.find(user => user.id === myRequestedUserId);

        if (myUser) {
            return myUser;
        } else {
            return { error: "Nenhum usuário encontrado" }
        }

    }

    async usuarioBySlug({ params }) {
        let myRequestedUserId = params['slug'];
        let myUser = this.users.find(user => user.slug === myRequestedUserId);

        if (myUser) {
            return myUser;
        } else {
            return { error: "Nenhum usuário encontrado" }
        }
    }

    async docs({params}) {
        return params['*'][0];
    }
}
