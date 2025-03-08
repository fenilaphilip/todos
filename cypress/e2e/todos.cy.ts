function loadApp() {
  cy.visit('/');
  cy.get('nav[aria-label="Desktop"]>ul>li').as('navitems');
}

describe('Testing Todos app', () => {
  beforeEach(loadApp);

  context('TopNavbar', () => {
    it(`Contains App name 'TODOS'`, () => {
      cy.get('.MuiStack-root > .MuiTypography-root').contains('TODOS');
    });
  });

  context('SideNavbar', () => {
    it(`Contains 'Task Bucket' element to view all tasks`, () => {
      cy.get('@navitems').find('a[href="/allTasks"]')
        .contains('Task Bucket');
    });

    it(`Contains 'Calender View' element to view tasks ordered by deadline`, () => {
      cy.get('@navitems').find('a[href="/calenderView"]')
        .contains('Calender View');
    });

    it(`Contains 'Completed Tasks' to show tasks which are completed`, () => {
      cy.get('@navitems').find('a[href="/completedTasks"]')
        .contains('Completed Tasks');
    });

    it(`Allows users to navigate to 'Task Bucket' page`, () => {
      cy.get('@navitems').children()
        .contains('Task Bucket').click();
      cy.url().should('include', '/allTasks');
    });

    it(`Allows users to navigate to 'Calender View' page`, () => {
      cy.get('@navitems').children()
        .contains('Calender View').click();
      cy.url().should('include', '/calenderView');
    })

    it(`Allows users to navigate to 'Completed Tasks' page`, () => {
      cy.get('@navitems').children()
        .contains('Completed Tasks').click();
      cy.url().should('include', '/completedTasks');
    })
  });
});


describe('Create Page', () => {
  beforeEach(loadApp);
  context('Creating new Todo', () => {
    it(`Can create a simple todo`, () => {
      // When 
      cy.get('[data-cy="create-todo-input-caption"]')
        .type('Watch cricket match with friends');
      cy.get('[data-cy="create-todo-button-add"]').click();
      // Then
      cy.get('[data-cy="todo-items"]').children()
        .find('.todo-item-caption > input')
        .should('have.value', 'Watch cricket match with friends');
    });
  });
});

