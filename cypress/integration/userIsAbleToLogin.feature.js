describe('Visitor is able to login', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/**', {
      fixture: 'article.json',
    });
    cy.intercept(
      'POST',
      'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
      {
        fixture: 'visitorLogin.json',
      }
    );
    cy.visit('/');
    cy.get('[data-testid=article]').first().click();
  });

  describe('successfully to view a specific article', () => {
    it('is expected to prompt user to log in', () => {
      cy.get('[data-testid=login-header]').should(
        'contain',
        'Please log in to read this article'
      );
      cy.get('[data-testid=email-input]').type('bob.kramer@hotmail.com');
      cy.get('[data-testid=password-input]').type('password');
      cy.get('[data-testid=login-submit]').click();
    });
  });
});
