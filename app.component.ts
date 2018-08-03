import { Component } from '@angular/core';
import { trigger , state , style , transition , animate , keyframes } from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations:[
  //   trigger('myAwesomeAnimate' , [
  //     state('small' , style({
  //       transform:'scale(1)', backgroundColor: 'red' ,transition: '2s'
  //     })),
  //     state('large' , style({
  //       transform:'scale(1.2)', overflow: 'hidden', width: '50%' ,transition: '2s',
  //       backgroundColor: 'green'
  //     })),
  //     //we can add there our css code with in transition
  //     transition('small <=> large' , animate('900ms ease-in' , style({
  //       transform: 'translateY(40px) '
  //     }))),
  //   ])
  // ]

  animations:[
    trigger('myAwesomeAnimate' , [
      state('small' , style({
        transform:'scale(1)' , backgroundColor: 'red'
      })),
      state('large' , style({
        transform:'scale(1.2)' , backgroundColor: 'green'
      })),
      //we can add there our css code with in transition
      transition('small <=> large' , animate('300ms ease-in' , keyframes([
        style({opacity :0 , transform: 'translateX(-75%)' , offset: 0 }),
        style({opacity :1 , transform: 'translateX(-335px)' , offset: .5 }),
        style({opacity :1 , transform: 'translateY(0)' , offset: 1 })
      ]))),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state:string='small';
  animate(){
    this.state =(this.state==='small' ? 'large'  :  'small');
  }
}
