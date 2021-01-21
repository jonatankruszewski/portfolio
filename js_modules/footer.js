"use strict";
export class Footer {
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

  grabElement(element) {
    const domElement = document.getElementById(element);
    if (domElement) {
      return domElement;
    } else {
      throw new Error(`Couldn't grab an element with ID: ${element}`);
    }
  }

  setFooter() {
    let { composedString, footerClass, grabElement } = this;
    try {
      grabElement(footerClass).innerText = composedString;
    } catch (error) {
      let footerText = (document.createElement("p").innerText = composedString);
      let footer = document.getElementsByTagName("footer")[0];
      if (footer) {
        footer.append(footerText);
      } else {
        throw new Error(error);
      }
    }
  }
}
