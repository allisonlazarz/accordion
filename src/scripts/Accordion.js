const CLASSNAMES = {ACTIVE: 'isOpen'};
class Accordion {
    constructor(element) {
        this.activeId;
        this.element = element;
        this.init();
    }

    init() {
        this.getElements();
        this.bindEvents();
    }

    getElements() {
        this.accordionHeaders = [...this.element.querySelectorAll('[data-js-accordion-header]')];
        this.accordionBodies = [...this.element.querySelectorAll('[data-js-accordion-body]')];
    }

    bindEvents() {
        this.accordionHeaders.forEach(accordion => {
            accordion.addEventListener('click', this.handleAccordionHeaderClick.bind(this));
        });
    }

    getAccordionElements(id) {
        const currentHeader = this.accordionHeaders.find(header => header.dataset.accordionId === id);
        const currentBody = this.accordionBodies.find(body => body.dataset.accordionId === id);
        return [currentHeader, currentBody];
    }

    setAccordionState(id, state) {
        const action = state === 'open' ? 'add' : 'remove';
        this.activeId = state === 'open' ? id : null;
        this.getAccordionElements(id).forEach(element => element.classList[action](CLASSNAMES.ACTIVE));
    }

    handleAccordionHeaderClick(event) {
        event.preventDefault();
        const clickedId = event.target.dataset.accordionId;
        if (this.activeId && clickedId !== this.activeId) {
            // CLOSE - when clicking different accordion menu than is currently open
            this.setAccordionState(this.activeId, 'close');
        }
        if (clickedId === this.activeId) {
            // CLOSE - when clicking the same accordion menu that is currently open
            this.setAccordionState(clickedId, 'close');
        } else {
            this.setAccordionState(clickedId, 'open');
        }
    }
}

export default Accordion;
