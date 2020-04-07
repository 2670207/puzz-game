export default class Model {
  constructor() {
    this.configuration = localStorage.getItem('config') || { box: 4 };
  }
}
