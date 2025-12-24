// renderer

import text from "./tes.txt?raw";

export class MainPages {
  constructor() {
    this.regex();
  }
  regex() {
    const regexArr = [/title: (.*?)\n/, /date: (.*?)\n/];
    this.match(regexArr);
  }
  match(regexArr: Array<RegExp>) {
    let specialTexts = [];
    for (let i = 0; i < regexArr.length; i++) {
      const special = text.match(regexArr[i]);
      if (special) {
        specialTexts.push(special[1].toString());
        const specialElem = document.createElement("pre");
        specialElem.textContent = specialTexts[i];
        document.body.append(text);
      }
    }

    // this.render(specialTexts, body);
  }
  render(specialTexts: Array<string>, bodyTexts: Array<string>) {
    for (let j = 0; j < specialTexts.length; j++) {
      for (let i = 0; i < bodyTexts.length; i++) {
        if (specialTexts[j] === bodyTexts[i]) {
          console.log(specialTexts[j], bodyTexts[i]);
        }
      }
    }
  }
}
