
export function loadApp() {
    cy.visit('/');
}

export function addTasks(input: string[]) {
    input.forEach(addTask);
}

export function addTask(input: string) {
    cy.get('[data-cy="create-todo-input-caption"]')
        .type(`${input}`);
    cy.get('[data-cy="create-todo-button-add"]').click();
};

export function setDueDate(task: string, date: string) {
    cy.get('[data-cy="todo-items"]').children()
        .find(`.todo-item-caption > input[value = "${task}"]`)
        .parentsUntil('[data-cy="todo-items"]', '.todo-item')
        .within(() => {
            cy.get('.todo-item-expand').click();
            cy.get('.dueDate').click().type(date); // MM/DD/YYYY format
            cy.get('.todo-item-expand').click();
        });
}