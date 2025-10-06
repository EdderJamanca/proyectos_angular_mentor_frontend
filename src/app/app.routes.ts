import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'home',
                loadComponent: () => import('./Components/home/home.component')
            },
            {
                path:'about',
                loadComponent:()=>import('./Components/about/about.component')
            },
            {
                path:'recipes',
                loadComponent:() => import('./Components/recipes/recipes.component')
            },
            {
                path:'recipe/:id',
                loadComponent:() => import('./Components/detail-recipes/detail-recipes.component')
            }
        ]
    },
    {
        path: 'error404',
        loadComponent: ()=>import('./Components/error404/error404.component')
    },
    { path: '**', redirectTo: 'error404' }
];
