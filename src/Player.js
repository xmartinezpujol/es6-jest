class Player {
  constructor(name) {
    this.name = name;
    this.getName = this.getName.bind(this);
  }

  getName() {
    return this.name;
  }
}

export default Player;
