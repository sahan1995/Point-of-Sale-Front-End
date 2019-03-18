import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'ModernPOS';

  public hide = function () {
    document.getElementById("myP").style.display = "none";

  }
}

