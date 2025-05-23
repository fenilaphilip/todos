import { loadApp } from "./customFunctions.cy";

describe('Testing Todos app', () => {
    beforeEach(() => {
        loadApp();
        cy.get('nav[aria-label="Desktop"]>ul>li').as('navitems');
    });

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
            cy.get('@navitems').parent().find('a[href="/label/Personal"]').contains('Personal')
            cy.get('@navitems').parent().find('a[href="/label/Work"]').contains('Work')
            cy.get('@navitems').parent().find('a[href="/label/Leisure"]').contains('Leisure')
            cy.get('@navitems').parent().find('a[href="/label/Others"]').contains('Others')
        });
        it(`Contains priority fliter named 'Importance' includes 'High', 'Low', 'Medium'`, () => {
            cy.get('@navitems').contains('Importance').click()
            cy.get('@navitems').parent().find('a[href="/priority/High"').contains('High');
            cy.get('@navitems').parent().find('a[href="/priority/Medium"').contains('Medium');
            cy.get('@navitems').parent().find('a[href="/priority/Low"').contains('Low');
        });
    });
});