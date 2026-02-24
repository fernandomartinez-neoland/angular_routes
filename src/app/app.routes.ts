import { Routes } from '@angular/router';
import { App } from './app';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'servicios',
                component: ServiciosComponent
            },
            {
                path:'contacto',
                component:ContactoComponent
            }
        ]

    }
];
