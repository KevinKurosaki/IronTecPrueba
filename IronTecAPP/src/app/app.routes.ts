import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {FormComponent} from "./form/form.component";
import {TableComponent} from "./table/table.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
];

/** Router module for root URL component */
export const AppRoutes = RouterModule.forRoot(routes, {
    useHash: true
});