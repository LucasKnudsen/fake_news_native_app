describe('User can navigate to backyard articles', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  describe('Unsuccesfully with no location given', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyards', {
        backyard_articles: [],
      });
      cy.visit('/');
      cy.get('[data-testid=drawer-menu]').click();
      cy.contains('Backyard Articles').click();
    });
    it('is expected to show no article message', () => {
      cy.get('[data-testid=no-backyard-message]').should(
        'contain',
        'No backyard available at this moment'
      );
    });
  });
});
