import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './../templates/app.template.html',
  styleUrls:  ['./../css/app.component.css']
})
export class AppComponent  {
  nameBoxHead = 'Target Indicator Demo';
  moneyNeed = 0;
  curentValue = 0;
  targetValue = 15;
  counterInterval = {};
  progressTotal = '0%';
  targetBg = 'linear-gradient(to top, #666666, #8e8e8e)';

  constructor() {
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
    fetch('http://alex.devel.softservice.org/testapi/')
    .then(function(response) {
      return response.json();
    }).then((json) => {
      this.curentValue = json.balance_usd;
      this.initValue();
      this.counter();
    }).catch(function(ex) {
      console.log('parsing failed', ex);
    })
  }
}
