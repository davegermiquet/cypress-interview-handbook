const Section1 = {
  constants: {
      web_site_url: "http://localhost:2555/section-1"
  },

  /**
   * Element object, containing variabls needing to define, or tests needed to run
   */
  elements: {
      tables : {
          css_path: {
              button_table_toggle: "#table-toggle-button",
              root_table: "#alaya-table",
              row_headers_class:'tr[data-test="table-header"]',
              rows_parent: "#alaya-table > tbody",
              id_column: "th:nth-child(1)",
              role_column: "th:nth-child(5)",
              dob_column: "th:nth-child(4)"
          }
      }
   },

  actions: {
    /**
     * Common functions required for each tests
     */
    commands : {
    open_page(page_url) {
        cy.visit(page_url);
    },
    click(element_to_use){
        cy.get(element_to_use).click();
     },
    size(element_to_check,tag_to_check) {
        return cy.get(element_to_check).find(tag_to_check).its('length');
    },
    role_count(role_to_look) {
        let role_count = 0;
  },
   get_id_of_admin(locator_of_rows){
       return cy.get_admin_id(locator_of_rows,4);
    }
 },
 assert_test:{
     is_visible(element_to_check) {
         cy.get(element_to_check).should('be.visible');
     },
     is_not_visible(element_to_check) {
         cy.get(element_to_check).should('not.be.visible');
     },
     child_elements(size_of_elements,size) {
        size_of_elements.should('eq',size);
    }
  }
     }
}
module.exports =  Section1