const Seection1 = {
  constants: {
      web_site_url: "http://localhost:2555/section-1"
  },

  /**
   * Element object, containing variabls needing to define, or tests needed to run
   */
  elements: {
      tables : {
          css_path: {
              button_to_show_path: "#table-toggle-button",
              root_table: "#alaya-table",
              row_headers_class:"[data-test=table-header]",
              rows_parent: "#alaya-table > tbody",
              id_column: "th:nth-child(1)",
              role_column: "th:nth-child(5)",
              dob_column: "th:nth-child(4)"
          },
          expection_tests: {
          }
      }
   },

  /**
    * Actions to perform for the particular tests
   */
  actions: {
    /**
     * Common functions required for each tests
     */
    open_page(page_url) {
        cy.visit(page_url);
    },
    is_displayed(element_to_check) {
       return cy.get(element_to_check).visible
    },
    size(element_to_check,tag_to_check) {
       return cy.get(element_to_check).find(tag_to_check).length
    },
    role_count(role_to_look) {
        let role_count = 0;
        cy.get(elements.tables.css_path.row_parent + "> tr").each((el, index, $list) => {
            if (role_to_look === cy.get(elements.tables.css_path.role_column).innerText) {
                role_count = role_count + 1
            }
        });
       return role_count;
  },
  get_id_of_admin(){
    let id = "";
    cy.get(elements.tables.css_path.row_parent + "> tr").each((el, index, $list) => {
        if ("admin" === cy.get(elements.tables.css_path.role_column).innerText) {
           id = cy.get(elements.tables.css_path.id_column).innerText
        }
     })
    return id;
  },
 },
}
module.exports =  Seection1