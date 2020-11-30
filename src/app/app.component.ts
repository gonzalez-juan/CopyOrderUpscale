import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Copy order';
  
  event: String = '';
  
  ngOnInit() :  void {
    //this runs when the comonent is rendered

    window.parent.postMessage ({type:'initialized'}, "*")
    window.parent.postMessage ({type:'sizeChange', data: {height: 300}}, "*")

    window.addEventListener (
      "message",
      event => {
        console.log("event", event.data.keys.orderId)
        this.handleEvent(event.data.keys.orderId)
      }
    )

  }

  handleEvent(messageEvent: any) {
    this.event = messageEvent
  }
  
  clicked() {
    alert (this.event)
  }

 
}

