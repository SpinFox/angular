import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './../templates/app.template.html',
  styleUrls:  ['./../css/app.component.css']
})
export class AppComponent  {
  nameBoxHead: string;
  moneyNeed: number;
  curentValue: number;
  targetValue: number;
  counterInterval: any;
  progressTotal: string;
  targetBg: string;

  constructor() {
    this.nameBoxHead = 'Target Indicator Demo';
    this.moneyNeed = 0;
    this.curentValue = 0;
    this.targetValue = 15;
    this.counterInterval = {};
    this.progressTotal = '0%';
    this.targetBg = 'linear-gradient(to top, #666666, #8e8e8e)';
    this.initValue();
  }
  counter() {
    let intervalInit = false;
    this.counterInterval = setInterval(() => {
      if (!intervalInit) {
        intervalInit = true;
        return;
      }
      this.curentValue = Math.round((this.curentValue + 0.2) * 10) / 10;
      this.progressTotal = Math.round(100 * (this.curentValue / this.targetValue)) + '%';
      this.moneyNeed = Math.round((this.targetValue - this.curentValue) * 10) / 10;
      if (this.curentValue >= this.targetValue) {
        clearInterval(this.counterInterval);
        this.targetBg = 'linear-gradient(to top, #00A910, #16dd2a)';
      }
    }, 2000)
  }

  initValue() {
    this.curentValue = Math.round((this.curentValue) * 10) / 10;
    this.progressTotal = Math.round(100 * (this.curentValue / this.targetValue)) + '%';
    this.moneyNeed = Math.round((this.targetValue - this.curentValue) * 10) / 10;
  }

  ngOnInit() {
    window['fetch']('http://alex.devel.softservice.org/testapi/')
    .then(function(response: any) {
      return response.json();
    }).then((json: any) => {
      this.curentValue = json.balance_usd;
      this.initValue();
      this.counter();
    }).catch(function(ex: any) {
      console.log('parsing failed', ex);
    })
  }
}
