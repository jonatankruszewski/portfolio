"use strict";
export class GithubFetch {
  constructor(url, profileImageID, userNameID) {
    this.url = url;
    this.profileImageID = profileImageID;
    this.userNameID = userNameID;
    this.fetchedInfo;
    this.init();
  }

  grabElement(element) {
    const domElement = document.getElementById(element);
    if (domElement) return domElement;
    else throw new Error(`Couldn't grab an element with ID: ${element}`);
  }

  replaceImage = () => {
    const { grabElement, profileImageID, fetchedInfo, spinElement } = this;
    try {
      const profileImage = grabElement(profileImageID);
      profileImage.src = fetchedInfo.avatar_url;
      profileImage.addEventListener("click", spinElement);
    } catch (error) {
      console.warn(error);
    }
  };

  spinElement = (e) => {
    e.target.removeEventListener("click", this.spinElement);
    e.target.classList.add("spin");
    setTimeout(() => {
      e.target.classList.remove("spin");
      e.target.addEventListener("click", this.spinElement);
    }, 1000);
  };

  replaceUserName = () => {
    const { grabElement, userNameID, fetchedInfo } = this;
    const userName = grabElement(userNameID);
    try {
      userName.innerText = fetchedInfo.name;
    } catch {
      const newUserName = document.createElement("h1");
      newUserName.innerText = fetchedInfo.name;
      const card = document.getElementById("card");
      try {
        card.insertBefore(newUserName, card.childNodes[1]);
      } catch (error) {
        console.warn(error);
      }
    }
  };

  init() {
    const { fallBack, fetchedInfo, replaceImage, replaceUserName, url } = this;

    fetch(url)
      .then((response) => {
        return response.ok ? response.json() : fallBack();
      })
      .then((data) => {
        this.fetchedInfo = data;
        replaceImage();
        replaceUserName();
      })
      .catch((error) => {
        fetchedInfo = fallBack();
        replaceImage();
        replaceUserName();
        console.warn(
          `${error.name}. Error message: ${error.message}. Cathing and executing handling. Additional information: ITC Rocks.`
        );
      });
  }

  fallBack() {
    return {
      name: "ITC",
      avatar_url:
        "data:image/png;base64,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",
    };
  }
}
