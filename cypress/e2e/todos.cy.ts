describe('Testing Todos app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('TopNavbar', () => {
    it('Contains App name', () => {
      cy.get('[data-cy="topNav"]').contains('Todos');
    })
  });

  context('SideNavbar', () => {
    it('Contains create and view tasks', () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('Create new Task')
        .should('have.attr', 'href')
        .and('equal', '/create');

      cy.get('[data-cy="sideNav"]').children()
        .contains('View All Tasks')
        .should('have.attr', 'href')
        .and('equal', '/todos');
    });

    it(`Changing url's by selecting sideNavbar elements`, () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('Create new Task').click();

      cy.url().should('include', '/create');
      cy.url().then(url => {
        cy.log(url);
      });

      cy.get('[data-cy="sideNav"]').children()
        .contains('View All Tasks').click();

      cy.url().should('include', '/todos');
      cy.url().then(url => {
        cy.log(url);
      });
    });

  });

});