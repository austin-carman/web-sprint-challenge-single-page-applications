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


// test that you can submit the form

// In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.