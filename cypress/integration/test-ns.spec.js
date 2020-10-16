describe('BS', () => {
    it('Test test', () => {
        expect(true).to.equal(true)
    })
})

describe('Local', () => {
    it('page successfully loads', () => {
      cy.visit('/index.html')
    })
    it('button click should toggle visibility', () => {
        cy.get('button').click()
        cy.get('#useless-paragraph').should('not.be.visible')
        cy.get('button').click()
        cy.get('#useless-paragraph').should('be.visible')
    })
})

 