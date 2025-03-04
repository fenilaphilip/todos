describe('Testing Todos app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('TopNavbar', () => {
    it(`Contains App name 'Todos'`, () => {
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

    it(`Allows users to navigate to create page`, () => {
      cy.get('[data-cy="sideNav"]').children()
        .contains('Create new Task').click();
      cy.url().should('include', '/create');
    });

    it(`Allows users to navigate to todos page`, () => {
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

  context('Creating new Todo', () => {
    it(`Accepts form inputs`, () => {
      cy.get('[data-cy="CreateTodoForm"]').find("#newTaskInput")
        .type('Watch cricket match with friends');
      cy.get('[data-cy="CreateTodoForm"]').find("#inputMoreInfo")
        .type('beer, pizza, popcorn');
    });
  });
});