/// <reference types="cypress" />
import 'cypress-xpath'; // Ensure cypress-xpath is imported

describe('Youtube Search', () => {
  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/');
  });

  // 1. Length of Path
  // it('verify youtube', () => { 
  //   cy.xpath('//input[@name="search_query"]',{ includeShadowDom: true }).type('Honey Singh Songs');
  //   cy.xpath('//button[@id="search-icon-legacy"]',{ includeShadowDom: true }).click();
  //   cy.wait(10000);

  //   // cy.xpath('//a[contains(text(),"T-Series")]')
  //   //   .its('length')
  //   //   .then((count) => {
  //   //     cy.log(count);
  //   //   });
  // });

  // 2. Verify Elements on YouTube
  //it('elements present on youtube', () => {
   // cy.xpath("//span[text()='Home']",).should('be.visible');
   // cy.xpath("//span[text()='Shorts']").should('be.visible');
    // cy.xpath("//tp-yt-paper-item/yt-formatted-string[text()='Subscriptions']").should('be.visible');
    // cy.xpath("//yt-formatted-string[text()='You']").should('be.visible');
    // cy.xpath("//yt-formatted-string[text()='History']").should('be.visible');
    // cy.xpath("//yt-formatted-string[text()='Playlists']").should('be.visible');
    // cy.xpath("//yt-formatted-string[text()='Your videos']").should('be.visible');
    // cy.xpath("//yt-formatted-string[text()='Your courses']").should('be.visible');
    // cy.xpath("//tp-yt-paper-item/yt-formatted-string[text()='Watch later']").should('be.visible');
    // cy.xpath("//tp-yt-paper-item/yt-formatted-string[text()='Liked videos']").should('be.visible');
    // cy.xpath("//tp-yt-paper-item/yt-formatted-string[text()='Your clips']").should('be.visible');
  //});

    // 3.verify the radio button 
it('radio button clickable or not',()=> {
  cy.xpath('//input[@id="male"]').click();
  cy.xpath('//input[@id="sunday"]').click();
  cy.xpath('//select[@id="country"]').select('india')
  cy.xpath('//select[@id="colors"]').select('green')
  cy.xpath('//input[@id="datepicker"]').click()
  cy.xpath('//a[contains(@class,"ui-state-default ui-state-highlight")]').click()
  cy.xpath('//input[@id="txtDate"]').click()
  cy.xpath('//a[@class="ui-state-default ui-state-hover"]').click()
})
});

