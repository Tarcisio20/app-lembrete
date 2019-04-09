import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'primary-page', loadChildren: './primary-page/primary-page.module#PrimaryPagePageModule' },
  { path: 'cadastro-page', loadChildren: './cadastro-page/cadastro-page.module#CadastroPagePageModule' },
  { path: 'sobre-page', loadChildren: './sobre-page/sobre-page.module#SobrePagePageModule' },
  { path: 'lembrete', loadChildren: './lembrete/lembrete.module#LembretePageModule' },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
