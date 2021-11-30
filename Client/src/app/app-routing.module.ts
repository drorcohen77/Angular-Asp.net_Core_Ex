import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyAComponent } from "./Components/company-a/company-a.component";
import { CompanyBComponent } from "./Components/company-b/company-b.component";
import { CompanyCComponent } from "./Components/company-c/company-c.component";
import { HomeComponent } from "./Components/home/home.component";


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'company_a', component: CompanyAComponent },
    { path: 'company_b', component: CompanyBComponent },
    { path: 'company_c', component: CompanyCComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}