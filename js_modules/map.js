export class Map {
  constructor(cities, prevButton, nextButton, mapDiv) {
    this.cities = cities;
    this.currentIndex = 0;
    this.prevBtn = this.grabElement(prevButton);
    this.nextBtn = this.grabElement(nextButton);
    this.map = this.grabElement(mapDiv);
    this.init();
  }

  deleteCityByIndex(indexNumber) {
    this.cities.shift(indexNumber);
  }

  addCity(city) {
    this.cities.push(city);
  }

  grabElement(element) {
    const domElement = document.getElementById(element);
    if (domElement) return domElement;
    else throw new Error(`Couldn't grab an element with ID: ${element}`);
  }

  init() {
    const { setMap, setButtons, nextBtn, prevBtn } = this;
    setMap();
    setButtons();
    prevBtn.addEventListener("click", () => {
      this.currentIndex--;
      setMap();
      setButtons();
    });
    nextBtn.addEventListener("click", () => {
      this.currentIndex++;
      setMap();
      setButtons();
    });
  }

  setMap = () => {
    const { cities, map, currentIndex } = this;
    map.src = cities[currentIndex];
  };

  setButtons = () => {
    const { nextBtn, prevBtn, cities, currentIndex } = this;
    nextBtn.disabled = false;
    prevBtn.disabled = false;
    if (currentIndex === 0) prevBtn.disabled = true;
    else if (currentIndex === cities.length - 1) nextBtn.disabled = true;
  };
}