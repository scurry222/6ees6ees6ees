class HoneyMakerBee extends Bee {
  constructor() {
    super(Bee);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney = () => {
    this.honeyPot += 1;
  }
  giveHoney = () => {
    if (this.honeyPot > 0) {
      this.honeyPot -= 1;
    }
  }
};
