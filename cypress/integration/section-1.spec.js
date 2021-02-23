const Section1Test  = require('../objects/section-1')
const expected_data = require('../fixtures/expected_data.json').tables.expect_data
const command = Section1Test.actions.commands;
const expectation = Section1Test.actions.assert_test;
const pageElement = Section1Test.elements.tables.css_path;

describe('DOM Tables Example Test Cases', () => {
    before(() => {
        command.open_page(Section1Test.constants.web_site_url);
    })
    it('Assert that the table is not visible', () => {
        expectation.is_not_visible(pageElement.root_table);
    })
    it('After clicking the "Show table" button, assert the table is visible', () => {
        command.click(pageElement.button_table_toggle);
        expectation.is_visible(pageElement.root_table);
    })
    it('Assert that the table is 5 columns wide', () => {
        expectation.child_elements(command.size(pageElement.row_headers_class,'th'),expected_data.amount_of_columns);
    })
    it('Assert that the table is 10 rows long, excluding the first (header) row', () => {
        expectation.child_elements(command.size(pageElement.rows_parent,'tr'),expected_data.amount_of_rows);
    })
    it('Assert that an admin has the ID of 1', () => {
        command.get_id_of_admin(pageElement.rows_parent,pageElement.role_column).should('eq','blah')
    })
    it('Assert that at least 5 entries have the role "user"', () => {


    })
    it('Assert there are exactly 3 people older than 60 years old', () => {


    })
})
