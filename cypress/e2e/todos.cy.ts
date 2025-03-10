function loadApp() {
  cy.visit('/');
  cy.get('nav[aria-label="Desktop"]>ul>li').as('navitems');
}

function addTask(input: string) {
  cy.get('[data-cy="create-todo-input-caption"]')
    .type(`${input}`);
  cy.get('[data-cy="create-todo-button-add"]').click();
};

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
    });

    it(`Allows users to navigate to 'Completed Tasks' page`, () => {
      cy.get('@navitems').children()
        .contains('Completed Tasks').click();
      cy.url().should('include', '/completedTasks');
    });
  });
});

describe('Task Bucket - Default page, when app loads', () => {
  beforeEach(loadApp);

  context('Shows all tasks', () => {
    it(`Can create a  simple todo`, () => {
      const task = "Buy new flowers to office"
      addTask(task);

      cy.get('[data-cy="todo-items"]').children()
        .find('.todo-item-caption > input')
        .should('have.value', `${task}`);
    });

    it(`Can complete a todo`, () => {
      const task = 'Send Invitation for Birthday party';
      addTask(task);

      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .find('input[type="checkbox"]').click();
      cy.visit('/completedTasks');
      cy.get('body').find(`input[value="${task}"]`).should('exist');
    });

    it(`User can update priority`, () => {
      const task = 'Order birthday cake.';
      addTask(task);

      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-priority').click();
          cy.document().its('body').find('.todo-iph').click();
          cy.get('.todo-save').click();
        });

      cy.reload();
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-priority').contains('High')
        });
    });
  });
});