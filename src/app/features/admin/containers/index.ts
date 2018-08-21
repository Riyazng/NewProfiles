import { AdmDashboardComponent } from "./adm-dashboard/adm-dashboard.component";
import { Routes } from "@angular/router";


export const containers = [
    AdmDashboardComponent
];

export const routes:Routes = [
    {path: "dashboard", component: AdmDashboardComponent}
];