// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('get_admin_id',(locator,column) => {

    function findElement(current_row,column_number) {
        return current_row.get('th').eq(column_number).then((element_to_check) => {
            if (element_to_check.text().trim() === 'admin') {
                return current_row;
            }
            else {
                return current_row.next('tr');
            }
        });
    }
   return cy.get(locator).get('tr').then((initial_row) => {
        found_element = findElement(cy.wrap(initial_row),column)
        found_element.get('th').eq(column_number).then((element_to_check) => {

        });
    });
})