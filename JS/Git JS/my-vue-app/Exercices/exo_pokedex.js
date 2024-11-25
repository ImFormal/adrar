const apiDiv = document.querySelector('.apiContact');
const contactApi =  async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);

    const dataTransformed = await response.json();
    console.log(dataTransformed);

    for(let i = 0; i < dataTransformed.results.length; i++){
        console.log(i);
        const p = document.createElement('p');
        p.innerHTML = `${dataTransformed.results[i].name}`;
        apiDiv.append(p);
    }
};
contactApi();