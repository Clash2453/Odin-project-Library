describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/pages/index.html')

    cy.get('#createButton').click();

    cy.get('#title').type('Epic book');

    cy.get('#author').type('Epic author');

    cy.get('#pages').type('52');

    cy.get('#read').type('no');

    cy.get('#notes').type('s;akgioahrtioahsogfo;isdahriwaeroisadjf');

    cy.get('#add-button').click();

    cy.get('.bookCover').click().should('have.class', 'hidden');

    cy.get('#info-card').should('not.have.class', 'hidden');

    cy.get('#close-button').click();

    cy.get('#info-card').should('have.class', 'hidden');

    cy.get('.bookCover').should('not.have.class', 'hidden');

    cy.get('#createButton').click();

    cy.get('#title').type('Epic book 2')
        .should('have.value', 'Epic book 2');

    cy.get('#author').type('Epic author 2');

    cy.get('#pages').type('53');

    cy.get('#read').type('yes');

    cy.get('#add-button').click();
  })
})