export class Handler {
  constructor() {
    this.fileName = this.getFileName();
  }

  getFileName = () => {
    let filenameIndex = window.location.pathname.split("/");
    let name = filenameIndex[filenameIndex.length - 1].toLowerCase();
    return name;
  };
}