import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";



export const containers = [
    HomeComponent,
    LoginComponent
];

export const routes:Routes = [
    {
        path: "", component:HomeComponent, children: [
            {path: "admin", loadChildren: "../../../app/features/admin/admin.module#AdminModule"}
        ]
        
    },
    {path: "login", component: LoginComponent}
];