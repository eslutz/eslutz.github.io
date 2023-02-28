import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  countdown: number = 10;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
    this.countdown--;
      if (this.countdown === 0) {
        this.router.navigateByUrl('/home')
      }
    }, 1000);
  }
}
