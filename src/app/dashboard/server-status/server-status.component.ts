import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online'| 'offline'| 'unknown'>('online');
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    
  }

  ngOnInit() {
    this.interval =  setInterval(() => {
      const rnd = Math.random(); // 0 - 999999

      if (rnd < 0.5) {
        this.currentStatus.set('offline');
      } else if (rnd < 0.9 ) {
        this.currentStatus.set('online');
      } else {
          this.currentStatus.set('unknown');
        }
    }, 5000) 
  }

  ngOnDestroy(){
    clearTimeout(this.interval);
  }

}
