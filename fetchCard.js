// Using async fetch function to call on a pokemon name from the given data
async function fetchCardsByName(pokemonName) {
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`;
    try {
    // Making fetch request
        const response = await fetch(url, {headers: {'X-Api-Key': process.env.POKEMON_API_KEY || '' // DONT FORGET TO ENTER YOUR ENV LATER
          }});
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
        // Converting response to JSON
        const data = await response.json();
            console.log(`Found ${data.data.length} cards for "${pokemonName}":`);
        data.data.forEach(card => {
            console.log(`${card.name} - Set: ${card.set.name}`);
          });
        } catch (error) {
        // Print a helpful error message
            console.error('Error Somewhere Write more code to be specific', error.message);
          }
        }
        fetchCardsByName('mankey');