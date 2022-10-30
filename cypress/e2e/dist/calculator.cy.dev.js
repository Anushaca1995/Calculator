"use strict";

describe('Addition', function () {
  it('passes', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[onclick="getNumber(1)"]').click();
    cy.get('[onclick="getSymbol((symbols[0]))"]').click();
    cy.get('[onclick="getNumber(3)"]').click();
    cy.get('.result').click();
    cy.get('.calcans').click().should('have.value', 4);
  });
});
describe('Subtraction', function () {
  it('passes', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[onclick="getNumber(4)"]').click();
    cy.get('[onclick="getSymbol((symbols[1]))"]').click();
    cy.get('[onclick="getNumber(1)"]').click();
    cy.get('.result').click();
    cy.get('.calcans').click().should('have.value', 3);
  });
});
describe('Multiplication', function () {
  it('passes', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[onclick="getNumber(4)"]').click();
    cy.get('[onclick="getSymbol((symbols[2]))"]').click();
    cy.get('[onclick="getNumber(2)"]').click();
    cy.get('.result').click();
    cy.get('.calcans').click().should('have.value', 8);
  });
});
describe('Division', function () {
  it('passes', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[onclick="getNumber(4)"]').click();
    cy.get('[onclick="getSymbol((symbols[3]))"]').click();
    cy.get('[onclick="getNumber(2)"]').click();
    cy.get('.result').click();
    cy.get('.calcans').click().should('have.value', 2);
  });
});
describe('Check multiple decimal points', function () {
  it('passes', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get("[onclick=\"getNumber('.')\"]").click();
    cy.get("[onclick=\"getNumber('.')\"]").click();
    cy.get('.calcans').click().should('not.have.value', '..');
  });
});
describe('Check multiple operators', function () {
  it('passes', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[onclick="getSymbol((symbols[0]))"]').click();
    cy.get('[onclick="getSymbol((symbols[0]))"]').click();
    cy.get('.calcans').click().should('not.have.value', '++');
  });
});