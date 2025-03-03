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
      cy.get('[data-cy="SideNav"]').children()
        .should('have.length', 2)
        .contains('Create new Task')
        .should('have.attr', 'href').and('equal', '/create');

      cy.get('[data-cy="SideNav"]').children()
        .contains('View All Tasks')
        .should('have.attr', 'href')
        .and('equal', '/todos');
    })
  });

});