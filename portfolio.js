"use strict";
import Footer from "./js_modules/footer.js";
import getFileName, { grabElement } from "./js_modules/handler.js";
import animate from './js_modules/animation.js'

(() => {
  const codingLanguages = ["HTML", "CSS", "JavaScript"];
  const GITHUB_URL = "https://api.github.com/users/jonatankruszewski";
  const currentFile = getFileName();
  const cities = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483378695!2d-58.503338591054835!3d-34.61580373603523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sil!4v1590927131591!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36000.310797113794!2d12.55880475770515!3d55.671262366039464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen%2C%20Denmark!5e0!3m2!1sen!2sil!4v1611256868521!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722647863!2d2.2770202328073363!3d48.85883773936031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sil!4v1590928869946!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13776.265956351994!2d35.4744003483689!3d30.320626558521965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15016930021ab6b1%3A0xe43a697bc3a3e0b9!2sWadi%20Musa%2C%20Jordan!5e0!3m2!1sen!2sil!4v1611256999839!5m2!1sen!2sil"
  ];
  
  new Footer(codingLanguages, "footer-languages");

  switch (currentFile) {
    case "index.html":
    case "":
      import("./js_modules/githubFetch.js").then((module) => {
        new module.GithubFetch(GITHUB_URL, "profile-image", "my-name");
      });
      animate("#nav", "#animate")
      break;
    case "contact.html":
      import("./js_modules/formControl.js").then((module) => {
        new module.FormControl("contact-form", "form-button");
      });
      animate("#nav", "#animate");
      break;
    case "about.html":
      import("./js_modules/map.js").then((module) => {
        new module.Map(cities, "prev", "next", "map");
      });
      animate("#nav", "#animate");
      break;
    default:
      throw new Error(`Unexpected pathname at window.location: ${currentFile}`);
  }
})();
