import Accordion from './Accordion';

class App {
    constructor() {
        this.init();
    }

    init() {
        this.getElements();
        this.buildAccordion(this.accordion);
    }

    buildAccordion(accordions) {
        accordions.forEach(accordion => new Accordion(accordion));
    }

    getElements() {
        this.accordion = document.querySelectorAll('[data-js-accordion]');
    }
}
export default App;
