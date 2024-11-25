const apiDiv = document.querySelector('.apiContact');

const generatePokemon = async () => {
    try {
        const response = await fetch('https://tyradex.vercel.app/api/v1/pokemon');
        
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données.");
        }

        const dataTransformed = await response.json();
        
        if (!dataTransformed || dataTransformed.length === 0) {
            throw new Error("Aucun Pokémon n'a été trouvé.");
        }

        dataTransformed.forEach(pokemonData => {
            const card = document.createElement('div');
            card.classList.add('pokemonCard');
            
            const img = document.createElement('img');
            img.src = pokemonData.sprites?.regular || '';
            img.alt = pokemonData.name?.fr || 'Unknown Pokémon';
            card.append(img);   

            const title = document.createElement('h2');
            title.innerHTML = pokemonData.name?.fr || 'Unknown Pokémon';
            card.append(title);

            const descContainer = document.createElement('div');
            
            const type = document.createElement('p');
            type.innerHTML = `Type : ${pokemonData.types ? pokemonData.types.map(type => type.name).join(", ") : 'Inconnu'}`;
            
            const poids = document.createElement('p');
            poids.innerHTML = `Poids : ${pokemonData.weight || 'Inconnu'}`;
            
            const taille = document.createElement('p');
            taille.innerHTML = `Taille : ${pokemonData.height || 'Inconnu'}`;

            descContainer.append(type);
            descContainer.append(poids);
            descContainer.append(taille);
            
            card.append(descContainer);

            apiDiv.append(card);
        });

    } catch (error) {
        apiDiv.innerHTML = `<p class="error-message">Erreur : ${error.message}</p>`;
    }
};

generatePokemon();
