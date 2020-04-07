export default class View {
  constructor() {
    this.box = null;
  }

  creatingGameBox(box) {
    const size = box * 2;
    for (let i = 1; i <= size; i += 1) {
      this.boxGame = '';
    }
  }
}
