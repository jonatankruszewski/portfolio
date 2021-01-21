"use strict";
import { Footer } from "./js_modules/footer.js";
import { Handler } from "./js_modules/handler.js";

(() => {
  const codingLanguages = ["HTML", "CSS", "JavaScript"];
  const GITHUB_URL = "https://api.github.com/users/jonatankruszewskiITC";
  const currentFile = new Handler().fileName;

  new Footer(codingLanguages, "footer-languages");
  switch (currentFile) {
    case "index.html":
    case "":
      import("./js_modules/githubFetch.js").then((module) => {
        new module.GithubFetch(GITHUB_URL, "profile-image", "my-name");
      });
      break;
    case "contact.html":
      import("./js_modules/formControl.js").then((module) => {
        new module.FormControl("contact-form", "form-button");
      });
      break;
    case "about.html":
      const cities = [
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483378695!2d-58.503338591054835!3d-34.61580373603523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sil!4v1590927131591!5m2!1sen!2sil",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722647863!2d2.2770202328073363!3d48.85883773936031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sil!4v1590928869946!5m2!1sen!2sil",
      ];
      import("./js_modules/map.js").then((module) => {
        new module.Map(cities);
      });
      break;
    default:
      throw new Error(`Unexpected pathname at window.location: ${currentFile}`);
  }
})();

