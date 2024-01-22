import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public prixAchats: string = '';
  public sommePayee: number = 0;
  public renduMonnaie: any;
  public objetRenduMonnaie: any = null;

  calculerSommePayee() {
    console.log(this.prixAchats);
    const prixArray = this.prixAchats
      .split(',')
      .map((item) => parseFloat(item.trim()));
    console.log(prixArray);

    prixArray.forEach((prix) => {
      this.sommePayee += prix;
    });
    console.log(this.sommePayee);
  }

  calculerRenduMonnaie() {
    console.log(this.sommePayee);
    if (this.sommePayee > 0) {
      console.log(this.sommePayee);
      console.log(this.simulerRenduMonnaie(this.sommePayee));
      return this.simulerRenduMonnaie(this.sommePayee);
    }
    return null;
  }

  simulerRenduMonnaie(renduTotal: number): any {
    const coupures = [10, 5, 1];
    const renduMonnaieSimule: any = {};
    coupures.forEach((coupure) => {
      const nombreCoupures = Math.floor(renduTotal / coupure);
      if (nombreCoupures > 0) {
        renduMonnaieSimule[coupure] = nombreCoupures;
        renduTotal -= nombreCoupures * coupure;
      }
    });

    this.objetRenduMonnaie = renduMonnaieSimule;
    return renduMonnaieSimule;
  }
}
