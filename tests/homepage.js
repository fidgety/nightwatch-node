module.exports = {
    'Happy path' : function (browser) {
        browser
            .url('http://www.laterooms.com')
            .waitForElementVisible('#txtSearch', 1000)
            .setValue('#txtSearch', 'Manchester')
            .waitForElementVisible('.search-autocomplete-options', 1000)
            .click('.search-autocomplete-options li')
            .click('.search-form__button-holder button')
            .pause(500)
            .waitForElementVisible('body', 1000)
            .expect.element('h1').text.to.equal('Manchester Hotels');

        browser.click('li.hotel a')
            .pause(1500)
            .waitForElementVisible('.room-details', 3000)
            .click('.hotel-header__price-booking a')
            .expect.element('.room-reservation__book-btn').to.have.attribute('disabled');

        browser.click('.room-details button')
            .expect.element('.room-reservation__book-btn').to.not.have.attribute('disabled');

        browser.end();
    }
};