export default class appService {
  constructor(text) {
    this.text = text;
  }
  //method
  log() {
    console.log("appService", this.text);
  }
}
