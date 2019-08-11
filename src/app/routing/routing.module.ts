import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { InfoComponent } from "../info/info.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "info/:id", component: InfoComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
