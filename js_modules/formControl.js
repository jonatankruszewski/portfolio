"use strict";
import { grabElement } from "./handler.js";
export class FormControl {
  constructor(formName, buttonId) {
    this.formName = formName;
    this.nodeList = this.grabFormElements(formName);
    this.filteredNodes = this.filterNodes();
    this.button = grabElement(buttonId);
    this.init();
  }

  init() {
    const { button, printValues, filteredNodes, formName, checkFields } = this;
    button.disabled = true;
    const form = document.forms[formName];
    form.addEventListener("submit", printValues);
    for (let element of filteredNodes) {
      element.addEventListener("input", checkFields);
    }
  }

  grabFormElements(formName) {
    let nodeList = document.forms[formName].elements;
    return nodeList
      ? nodeList
      : () => {
          throw Error(`Couldn't grab the form name`);
        };
  }

  filterNodes() {
    const { nodeList } = this;
    return Array.prototype.filter.call(nodeList, (element) => {
      let n = element.nodeName.toLowerCase();
      return n === "input" || n === "textarea" || n === "select";
    });
  }

  checkFields = (e) => {
    const { filteredNodes, button } = this;
    button.disabled = !Array.prototype.every.call(
      filteredNodes,
      (element) => element.value
    );
  };

  printValues = () => {
    const form = document.forms[this.formName].reset();
  };
}
