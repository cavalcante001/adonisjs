// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {
    async index() {
        return {response: 'Index do Painel'}
    }

    async usuarios() {
        return {response: 'Usuarios do painel'}
    }

    async admin() {
        return {response: 'rota admin'}
    }
}
