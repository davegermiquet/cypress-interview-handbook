const Section1Test  = require('../objects/section-1')

describe('DOM Tables Example Test Cases', () => {
    it('Assert that the table is not visible', () => {
        Section1Test.actions.open_page(Section1Test.constants.web_site_url);
        //expect(Section1Test.actions.is_display(Section1Test.Section1.elements.tables.css_path.root_table)).to.equal(true);
    })
    it('After clicking the "Show table" button, assert the table is visible', () => {

    })
    it('Assert that the table is 5 columns wide', () => {


    })
    it('Assert that the table is 10 rows long, excluding the first (header) row', () => {


    })
    it('Assert that an admin has the ID of 1', () => {


    })
    it('Assert that at least 5 entries have the role "user"', () => {


    })
    it('Assert there are exactly 3 people older than 60 years old', () => {


    })
})
