import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { StoresComponent } from "./store/stores.component";
import { StoreDetailComponent } from "./store/store-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/stores", pathMatch: "full" },
    { path: "stores", component: StoresComponent },
    { path: "store/:id", component: StoreDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
