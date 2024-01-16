import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/admin', 'PainelController.admin');

    Route.group(() => {
        Route.get('/', 'PainelController.index');
        Route.get('/usuarios', 'PainelController.usuarios');
    }).prefix('/painel/')
    
}).prefix('/api');