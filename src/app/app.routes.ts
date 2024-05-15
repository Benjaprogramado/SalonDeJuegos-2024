import { Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { QuienSoyComponent } from './componets/quien-soy/quien-soy.component';
import { ErrorComponent } from './componets/error/error.component';
import { LoginComponent } from './componets/login/login.component';
import { RegistryComponent } from './componets/registry/registry.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'quiensoy', component: QuienSoyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registry', component: RegistryComponent },
    // {
    //     path: 'products', component: ProductsComponent,
    //     // Al declarar un children es clave que le pongamos a este el <router-outlet /> en el html
    //     children:
    //         [
    //             {
    //                 path: ":id",
    //                 component: ProductDetailComponent
    //             }
    //         ]
    // },
    { path: '**', component: ErrorComponent },
];
