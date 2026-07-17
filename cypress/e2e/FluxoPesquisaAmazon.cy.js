describe('Fluxo pesquisa Amazon', () => {
  it('Abrir página Amazon', () => {
    cy.visit('https://www.amazon.com.br')
    
     cy.get('[id="twotabsearchtextbox"]', { timeout: 30000 }).type('presente')
     cy.get('[id="nav-search-submit-button"]').click()
     cy.get('h2:contains("Resultados")', { timeout: 30000 }).should('be.visible')
     cy.screenshot('resultado')
  })
})
