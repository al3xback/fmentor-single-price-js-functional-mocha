import assert from 'assert';
import jsdom from 'jsdom';

import {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createCardEl,
	createMainEl,
	createFooterEl,
} from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it("should be able to create element via 'createElement' function", () => {
		const subtitleEl = createElement('p', 'highlight', 'Lorem ipsum');
		document.body.appendChild(subtitleEl);

		const isSubtitleElExist = !!document.querySelector('.highlight');
		assert.ok(isSubtitleElExist);
	});

	it("should be able to return element attribute data via 'createElementAttribute' function", () => {
		const titleData = createElementAttribute('title', 'necessary stuff');

		const expectedTitleData = {
			name: 'title',
			value: 'necessary stuff',
		};

		assert.deepEqual(titleData, expectedTitleData);
	});

	it("should be able to create header element via 'createHeaderEl' function", () => {
		const headerEl = createHeaderEl();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	it("should be able to create card element via 'createCardEl' function", () => {
		const cardEl = createCardEl();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		assert.ok(isCardElExist);
	});

	it("should be able to create main element via 'createMainEl' function", () => {
		const mainEl = createMainEl();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	it("should be able to create footer element via 'createFooterEl' function", () => {
		const footerEl = createFooterEl();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
