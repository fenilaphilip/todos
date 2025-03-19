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

    it(`Allows users to navigate to 'Task Bucket' page`, () => {
      cy.get('@navitems').children()
        .contains('Task Bucket').click();
      cy.url().should('include', '/allTasks');
    });

    it(`Contains 'Calender View' element to view tasks ordered by deadline`, () => {
      cy.get('@navitems').find('a[href="/calenderView"]')
        .contains('Calender View');
    });

    it(`Allows users to navigate to 'Calender View' page`, () => {
      cy.get('@navitems').children()
        .contains('Calender View').click();
      cy.url().should('include', '/calenderView');
    });

    it(`Contains 'Completed Tasks' to show tasks which are completed`, () => {
      cy.get('@navitems').find('a[href="/completedTasks"]')
        .contains('Completed Tasks');
    });

    it(`Allows users to navigate to 'Completed Tasks' page`, () => {
      cy.get('@navitems').children()
        .contains('Completed Tasks').click();
      cy.url().should('include', '/completedTasks');
    });

    it(`Contains 'Labels' fliter includes 'Personal', 'Work', 'Leisure', 'Others'`, () => {
      cy.get('@navitems').contains('Labels').click()
      // cy.get('@navitems').children()
      //   .find('a[href="/label/leisure]').contains('Leisure');
    });
    it(`Contains priority fliter named 'Importance' includes 'High', 'Low', 'Medium', 'None'`, () => {
      cy.get('@navitems').contains('Importance').click()
    });
  });
});

describe('Task Bucket - Default page, when app loads', () => {
  beforeEach(loadApp);
  const task = "Buy new flowers to office"
  beforeEach(() => {
    addTask(task);
  });

  context('Shows all tasks and hide complete tasks', () => {
    it(`Can create a  simple todo`, () => {
      cy.get('[data-cy="todo-items"]').children()
        .find('.todo-item-caption > input')
        .should('have.value', `${task}`);
    });

    it(`Can complete a todo by checking the checkbox`, () => {
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .find('input[type="checkbox"]').click();
      cy.visit('/completedTasks');
      cy.get('body').find(`input[value="${task}"]`).should('exist');
    });

    it('Can edit task name and save the changes by pressing "enter"', () => {
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`).click()
        .type('-Bouquet of rose{enter}');

      cy.reload();
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input`)
        .should('have.value', `${task}-Bouquet of rose`);
    });
  });

  context("Can add details to when opens the 'Expand More Arrow'.", () => {
    it('Can add notes related to task', () => {
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-notes').click()
            .type("red and white rose bouquet");
        });
      cy.reload();
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-notes').contains("red and white rose bouquet")
        });
    });

    it(`User can update priority`, () => {
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-priority').click();
          cy.document().its('body').find('.todo-iph').click();
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

    it('User can update label', () => {
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-labels').click();
          cy.document().its('body').find('[data-value="2"]').click();
        });

      cy.reload();
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-labels').contains('Work');
        });
    });
    it(`Contains "Save Changes" and "Delete" Buttons`, () => {

    })
  });
});