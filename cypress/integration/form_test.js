describe('form app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3004/pizza');
    });

    it('sanity test', () => {
        expect(1+3).to.equal(4);
    });

    it('test name input', () => {
        cy.get('input[name="name"]').should('have.value','').type('Austin');
        cy.get('input[name="name"]').should('have.value','Austin');
        cy.get('input[name="instructions"]').should('have.value','').type('special instructions');
        cy.get('input[name="instructions"]').should('have.value','special instructions');
    })
    
    it('test toppings', () => {
        cy.get('input[name="pepperoni"]').should('not.be.checked');
        cy.get('input[name="bacon"]').should('not.be.checked');
        cy.get('input[name="mushrooms"]').should('not.be.checked');
        cy.get('input[name="pineapple"]').should('not.be.checked');
        
        cy.get('input[name="pepperoni"]').check();
        cy.get('input[name="bacon"]').check();
        cy.get('input[name="mushrooms"]').check();
        cy.get('input[name="pineapple"]').check();
        
        cy.get('input[name="pepperoni"]').should('be.checked');
        cy.get('input[name="bacon"]').should('be.checked');
        cy.get('input[name="mushrooms"]').should('be.checked');
        cy.get('input[name="pineapple"]').should('be.checked');
        
        cy.get('input[name="pepperoni"]').uncheck();
        cy.get('input[name="bacon"]').uncheck();
        cy.get('input[name="mushrooms"]').uncheck();
        cy.get('input[name="pineapple"]').uncheck();
        
        cy.get('input[name="pepperoni"]').should('not.be.checked');
        cy.get('input[name="bacon"]').should('not.be.checked');
        cy.get('input[name="mushrooms"]').should('not.be.checked');
        cy.get('input[name="pineapple"]').should('not.be.checked');
    });
    
    it('submit form', () => {
        cy.get('input[name="name"]').type('Austin');
        cy.get('input[name="instructions"]').type('special instructions');

        cy.get('input[name="pepperoni"]').check();
        cy.get('input[name="bacon"]').check();
        cy.get('input[name="mushrooms"]').check();
        cy.get('input[name="pineapple"]').check();

        cy.get('button[id="order-button"]').click();

        cy.get('input[name="name"]').should('have.value','')
        cy.get('input[name="instructions"]').should('have.value','')

        cy.get('input[name="pepperoni"]').should('not.be.checked');
        cy.get('input[name="bacon"]').should('not.be.checked');
        cy.get('input[name="mushrooms"]').should('not.be.checked');
        cy.get('input[name="pineapple"]').should('not.be.checked');
    })

})



