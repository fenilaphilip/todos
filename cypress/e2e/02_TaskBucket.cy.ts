import { loadApp, addTask } from "./customFunctions.cy";

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
      const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const today = formatter.format(new Date());

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
