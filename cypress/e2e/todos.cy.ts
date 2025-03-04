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
    it(`Contains 'Create New Todo' element `, () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('Create new Task')
        .should('have.attr', 'href')
        .and('equal', '/create');
    });

    it(`Contains 'View All Tasks' element`, () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('View All Tasks')
        .should('have.attr', 'href')
        .and('equal', '/todos');
    })

    it(`Directing to new url '/create'`, () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('Create new Task').click();
      cy.url().should('include', '/create');
    });

    it(`Directing to new url '/todos'`, () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('View All Tasks').click();
      cy.url().should('include', '/todos');
    })
  });
});


describe('Create Page', () => {
  beforeEach(() => {
    cy.visit('/create');
  });

  context('Accepting form inputs', () => {
    it.only(`Caption todo`, () => {

    });

  });
});