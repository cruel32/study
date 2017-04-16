import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test2Component } from './test-component/test2.component';

const testRoutes:Routes = [
    {path:'test/:id', component:Test2Component}
];

const TotalRoutes:Routes = [
    ...testRoutes
];

export const testRoutingProviders:any = [

];

export const TestRoutingModule:ModuleWithProviders = RouterModule.forRoot(TotalRoutes);
