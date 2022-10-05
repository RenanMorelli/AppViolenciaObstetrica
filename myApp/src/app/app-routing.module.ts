import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'oquee',
    loadChildren: () => import('./oquee/oquee.module').then( m => m.OqueePageModule)
  },
  {
    path: 'quempode',
    loadChildren: () => import('./quempode/quempode.module').then( m => m.QuempodePageModule)
  },
  {
    path: 'direitos',
    loadChildren: () => import('./direitos/direitos.module').then( m => m.DireitosPageModule)
  },
  {
    path: 'exemplos',
    loadChildren: () => import('./exemplos/exemplos.module').then( m => m.ExemplosPageModule)
  },
  {
    path: 'prevenir',
    loadChildren: () => import('./prevenir/prevenir.module').then( m => m.PrevenirPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
