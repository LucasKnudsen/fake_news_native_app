describe('User can see single article', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/**', {
      fixture: 'article.json',
    });
    cy.visit('/');
  });
  it('is expected to display selected article', () => {
    cy.get('[data-testid=article]').first().click();
    cy.get('[data-testid=title]').should(
      'contain',
      '‘It is a trap!’: Inside the QAnon attack that never happened'
    );
    cy.get('[data-testid=body]').should('exist');
    cy.get('[data-testid=image]').should('exist');
    cy.get('[data-testid=date]').should('contain', '2021-05-25');
    cy.get('[data-testid=author]').should('contain', 'Mr. Fake');
  });
});
