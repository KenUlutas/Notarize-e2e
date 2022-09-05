/// <reference types="cypress"/>

describe('Test Suit',()=>{
  

    it('Verify page title', ()=>{
        cy.visit('https://app.notarize.com/login')
        cy.login('kenulutas@gmail.com','67762777gF!')
        cy.title().should('contain','Notarize')
    })

    it('Verify Get-Started Page',()=>{
       
        cy.get('.SnZbzM0BwPonr3mkjHbm').should('contain.text','Welcome to Notarize')
        cy.get('.BI9cqsmvBxeh8lPai9AQ')
            .within(()=>{
                cy.get('div').eq(0).should('contain','Finish setting up your account')
                cy.get('.KJagBRKwZVD1mT2H_EeO > .qU0NN172zsM6WEWrJL9V > .cPCGqj5mSFWHYvch8_Bo').should('contain.text','Invite others to join your team')    
        })

    })

    it('Verify that documet name',()=>{
     
       // Landing to baseURL
        cy.visit('https://app.notarize.com/bundle/records?filter=all&page=1')
        //Valid Credentials
        cy.login('kenulutas@gmail.com','67762777gF!')
    //   Verifying File is visible
        cy.get('.SignerDashboard--body').should('be.visible')
     //   Verifying File name
        cy.get('.Ttn_nEXX0wRMzQha2H3M > :nth-child(1)')
        cy.get('[data-automation-id="document-bundle-name"]').should('have.text','KenDummyPDF.pdf')
    })

    
})