const getFileName = () => {
  let filenameIndex = window.location.pathname.split("/");
  let name = filenameIndex[filenameIndex.length - 1].toLowerCase();
  return name;
};

const grabElement = (element) => {
  const domElement = document.getElementById(element);
  if (domElement) return domElement;
  else throw new Error(`Couldn't grab an element with ID: ${element}`);
};

export default getFileName;
export { grabElement}