describe('User can see single article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/6', {
      fixture: 'article.json',
    });
    cy.viewport('iphone-x');
    cy.visit('/');
  });
  it('is expected to display selected article', () => {
    cy.get('[data-testid=article-6]').click();
    cy.get('[data-testid=title]').should(
      'contain',
      'Canada SWAT team molest the Queen'
    );
    cy.get('[data-testid=body]').should('exist');
    cy.get('[data-testid=image]').should('exist');
    cy.get('[data-testid=date]').should('contain', '2021-05-25');
    cy.get('[data-testid=author]').should('contain', 'Mr. Fake');
  });
});
