import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'O que é?', url: '/oquee', icon: 'help' },
    { title: 'Quem pratica?', url: '/quempode', icon: 'person' },
    { title:  'Meus direitos', url: '/direitos', icon: 'book' },
    { title: 'Exemplos da violência', url: '/exemplos', icon: 'warning' },
    { title: 'Como me prevenir?', url: '/prevenir', icon: 'hand-left' },
    { title: 'Contatos', url: '/contatos', icon: 'call' },
  ];
  
  constructor(private router : Router, private platform : Platform) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.router.navigateByUrl('splash')
    });
  }
}
