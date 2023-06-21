import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'tiposdevo',
    loadChildren: () => import('./tiposdevo/tiposdevo.module').then( m => m.TiposdevoPageModule)
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
    path: 'avaliar',
    loadChildren: () => import('./avaliar/avaliar.module').then( m => m.AvaliarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
