class ExtendedClock extends Clock{

    constructor(template, precision){
        super(template);
        this.precision = precision;
    }

    start(){
        this.render();
        this.timer = setInterval(this.render, this.precision);
    }
}

// let extendedClock = new ExtendedClock("h:s:m", 2000);
// extendedClock.start();
