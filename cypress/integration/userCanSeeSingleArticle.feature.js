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
    cy.get('[data-testid=image]').should(
      'have.attr',
      'src',
      'https://fake-news-2021-production.s3.eu-north-1.amazonaws.com/8qyugtquxtipimwl9ejs6ksp570o?response-content-disposition=inline%3B%20filename%3D%22article_image.jpg%22%3B%20filename%2A%3DUTF-8%27%27article_image.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUYRJY36EVBTLAPKU%2F20210526%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20210526T152843Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=07339d360ea975d188283c855c7dab1aa70c3fd0f5898e2cf84ff2dc43290de5'
    );
    cy.get('[data-testid=date]').should('contain', '2021-05-25');
    cy.get('[data-testid=category]').should('contain', 'Science');
  });
});
