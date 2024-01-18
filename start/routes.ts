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

Route.get('/create', async () => {
    const user = await User.createMany([
        {
            name: 'Maria',
            age: 130,
            password: '123@'
        }, {
            name: 'João',
            age: 130,
            password: '123s@'
        }]
    )

    return {
        objeto: user,
    };
})

Route.get('/read', async () => {
    // let users = await User.all();

    // let user = await User.first();

    // let user = await User.find(8);

    // let user = await User.findBy(`name`, 'João');

    let users = await User.query().where('age', 130).first();

    return users;
})

Route.get('/update', async () => {
    // Dados atualizados:
    let _json = {name: 'Paulo Atualizado 2', age: 5};
    let user = await User.query().where('id', 1).update({name: 'Teste'});
    // let user = await User.find(1);
    // if(user) {
    //     user.merge(_json);
    //     // user.name = 'Nome do Sicrano Atualizado';
    //     user.save();
    // }
    return user;
})