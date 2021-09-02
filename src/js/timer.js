class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.daysRefs = document.querySelector('[data-value="days"]');
        this.hoursRefs = document.querySelector('[data-value="hours"]');
        this.minsRefs = document.querySelector('[data-value="mins"]');
        this.secsRefs = document.querySelector('[data-value="secs"]');
        this.changeDate();
    }

    pad(value) {
        return String(value).padStart(2, '0');
      }

    changeDate() {
        setInterval(() => {
            const diffTime = this.targetDate - Date.now() ;
           
            const days = this.pad(Math.floor(diffTime / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((diffTime % (1000 * 60)) / 1000));

              if(diffTime > 0 ) {
                this.daysRefs.textContent = days +"   "+":";
                this.hoursRefs.textContent = hours +"   "+":"  ;
                this.minsRefs.textContent = mins +"   "+":";
                this.secsRefs.textContent = secs;
              } else {
                this.daysRefs.textContent = 0 +"   "+":";
                this.hoursRefs.textContent = 0 +"   "+":"  ;
                this.minsRefs.textContent = 0 +"   "+":";
                this.secsRefs.textContent = 0;
              }


        }, 1000);
    }
}
  const timer = new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('January 1, 2022'),
    });
    