function loadApp() {
  cy.visit('/');
  cy.get('nav[aria-label="Desktop"]>ul>li').as('navitems');
}

function addTask(input: string) {
  cy.get('[data-cy="create-todo-input-caption"]')
    .type(`${input}`);
  cy.get('[data-cy="create-todo-button-add"]').click();
};

function formatDate(date) {
  let day = String(date.getDate());
  let month = String(date.getMonth() + 1); // Months start at 0!
  let year = date.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`
  }
  const duedate = month + "/" + day + "/" + year;

  return duedate;
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
      cy.get('@navitems').parent().find('a[href="/label/personal"]').contains('Personal')
      cy.get('@navitems').parent().find('a[href="/label/work"]').contains('Work')
      cy.get('@navitems').parent().find('a[href="/label/leisure"]').contains('Leisure')
      cy.get('@navitems').parent().find('a[href="/label/others"]').contains('Others')
    });
    it(`Contains priority fliter named 'Importance' includes 'High', 'Low', 'Medium', 'None'`, () => {
      cy.get('@navitems').contains('Importance').click()
      cy.get('@navitems').parent().find('a[href="/priority/high"').contains('High Priority');
      cy.get('@navitems').parent().find('a[href="/priority/medium"').contains('Medium Priority');
      cy.get('@navitems').parent().find('a[href="/priority/low"').contains('Low Priority');
      cy.get('@navitems').parent().find('a[href="/priority/none"').contains('None');
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

    it('Can set due Date by typing', () => {
      const today = formatDate(new Date());
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value = "${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.dueDate').click().type(`${today}`);
        });

      cy.reload();
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value = "${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.dueDate').children().find('input').should('have.value', `${today}`);
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
          cy.document().its('body').find('[data-value="Work"]').click();
        });

      cy.reload();
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value = "${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-item-labels').contains('Work');
        });
    });
    it(`Contains "Delete" Button - delete todo`, () => {
      addTask('go to gym');
      cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value="${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
          cy.get('.todo-item-expand').click();
          cy.get('.todo-delete').click();
        });
      cy.get('[data-cy="todo-items"]').children()
        .should('not.contain', `${task}`);
    });
  });
});

function setDueDate(task: string, count: number) {
  addTask(task);
  const date = formatDate(new Date().setDate(count));
  cy.get('[data-cy="todo-items"]').children()
    .find(`.todo-item-caption > input[value = "${task}"]`)
    .parentsUntil('[data-cy="todo-items"]', '.todo-item')
    .within(() => {
      cy.get('.todo-item-expand').click();
      cy.get('.dueDate').click().type(date); // MM/DD/YYYY format
    });
}

describe('Task Calender page', () => {
  beforeEach(loadApp);
  const Tasks = ['Do laundry', 'Buy Ticket for World cup Football', 'Do grocery shopping', 'Wish birthday', 'Order birthday gift', 'Buy playstation']
  beforeEach(() => {
    Tasks.map((task, index) => {
      setDueDate(task, index);
    });
    cy.visit('/calenderView');
  });

  it('Displays the dates in accending order', () => {
    cy.get('.dateHeader').contains('Unscheduled');
  });
})