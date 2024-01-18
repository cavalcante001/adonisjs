/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User';
// CRUD

// CREATE
// READ
// UPDATE
// DELETE
Route.get('/', async () => {
    // Dados de um formulário
    let _json = {
        name: 'Paulo Gomes',
        password: '1234',
        age: 24
    }
    
    const user = await User.create({
        name: 'Maria',
        age: 130,
        password: '123@'
    })

    return {
        objeto: user,
        persistido: user.$isPersisted
    };
})