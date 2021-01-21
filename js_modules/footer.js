"use strict";

import { grabElement } from "./handler.js";
export default class Footer {
  constructor(languages, footerClass) {
    this.footerClass = footerClass;
    this.languages = languages;
    this.composedString = "This Website has been created with: ";
    this.createString();
    this.setFooter();
  }

  deleteLanguageByIndex(indexNumber) {
    this.languages.shift(indexNumber);
  }

  addLanguage(language) {
    this.languages.push(language);
  }

  createString() {
    let { languages, composedString } = this;
    languages.forEach((language, index) => {
      composedString += language;
      if (index < languages.length - 2) composedString += `, `;
      else if (index === languages.length - 2) composedString += ` and `;
      else composedString += `.`;
    });
    this.composedString = composedString;
  }

  setFooter() {
    let { composedString, footerClass } = this;
    try {
      grabElement(footerClass).innerText = composedString;
    } catch (error) {
      console.error(error);
    }
  }
}
