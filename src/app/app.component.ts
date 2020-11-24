import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TEST-CUSTOM-COMPONENT';

  ngOnInit() :  void {
    //this runs when the comonent is rendered

    window.parent.postMessage ({type:'initialized'}, "*")
    window.parent.postMessage ({type:'sizeChange', data: {height: 300}}, "*")

  }
}
