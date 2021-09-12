import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform:Platform) {
    this.platform.backButton.subscribe(
      ()=>{
        navigator["app"].exitApp();
      },
    )
    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(()=>{

    });
  }
}
