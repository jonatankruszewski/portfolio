const getFileName = () => {
  let filenameIndex = window.location.pathname.split("/");
  let name = filenameIndex[filenameIndex.length - 1].toLowerCase();
  return name;
};

export default getFileName;