import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'descriptionProf',
  templateUrl: '../../../app/components/descriptionProf/descriptionProf.html',
  providers: [HttpService]
})

export class DescriptionProfComponent {
  getData: string;
  text = 'http://ip.jsontest.com/';

  constructor (private _httpService: HttpService) { }

  onTestGet() {
    this._httpService.getDate(this.text)
        .subscribe(
          data => this.getData = JSON.stringify(data),
          error => alert(error),
          () => console.log("Finished")
        );
  }
}
