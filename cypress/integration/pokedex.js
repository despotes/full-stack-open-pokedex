describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Can click on a Pokemon and visit its page', function() {
    cy.contains('ivysaur').click()

    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('ivysaur')
  })


  it('<PokemonPage /> contain the right image', function() {
    cy.get('.pokemon-image')
      .should('have.attr', 'style', 'background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png");')
  })

  it('<PokemonPage /> contains all attributes stats', function() {
    cy.contains('speed')
    cy.contains('special defense')
    cy.contains('special attack')
    cy.contains('defense')
    cy.contains('attack')
    cy.contains('hp')
  })

  it('<PokemonPage /> contains corrispective Hidden Abilities', function() {
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })

  it('Can go to the next Pokemon', function() {
    cy.contains('Next').click()

    cy.url().should('include', '/pokemon/venusaur')
    cy.contains('venusaur')
  })

  it('Can go to the previous Pokemon', function() {
    cy.contains('Previous').click()

    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('ivysaur')
  })

  it('Can go back to Home', function() {
    cy.contains('Home').click()
    cy.contains('bulbasaur')
    cy.contains('mewtwo')
  })
})