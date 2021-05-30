describe('User can see a list of articles', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });
  describe('successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
        fixture: 'articles.json',
      });
      cy.visit('/');
    });
    it('is expected to display a hero section', () => {
      cy.get('[data-testid=hero-article]')
        .first()
        .within(() => {
          cy.get('[data-testid=title]').should(
            'contain',
            'Earth is a frisbee being thrown by God'
          );
          cy.get('[data-testid=category]').should('contain', 'Aliens');
        });
    });
    it('is expected to display a list of 6 articles', () => {
      cy.get('[data-testid=article]').should('have.length', 6);
    });
    it('is expected to display title, date, and author of article', () => {
      cy.get('[data-testid=article]')
        .first()
        .within(() => {
          cy.get('[data-testid=title]').should(
            'contain',
            'Canada SWAT team molest the Queen'
          );
          cy.get('[data-testid=date]').should('contain', '2021-05-25');
          cy.get('[data-testid=author]').should('contain', 'By Mr. Fake');
        });
    });
  });
  describe('Unsuccesfully, no articles', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
        articles: [],
      });
      cy.visit('/');
    });
    it('is expected to show no article message', () => {
      cy.get('[data-testid=no-articles-message]').should(
        'contain',
        'No articles available at this moment'
      );
    });
  });
});
