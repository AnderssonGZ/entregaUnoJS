//Obtener detalles de un Pokémon por nombre
async function obtenerDatosMostrarPersonaje(nombre){
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if(!respuesta.ok){
        throw new Error("Error al cargar datos");
    }

    let personaje = await respuesta.json();
    console.log("Personaje:", personaje);
}

obtenerDatosMostrarPersonaje("bulbasaur");

//Obtener habilidades de un Pokémon específico
async function obtenerHabilidadesPokemon(name){
    
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        let personaje = await respuesta.json();

        
        //console.log(personaje);
        
        console.log(`HABILIDADES-->${JSON.stringify(personaje.abilities)}`);
    } catch (error) {
        console.log("Error al obetener las habilidades")
    }
    
}

obtenerHabilidadesPokemon("bulbasaur");

//Obtener información sobre un tipo específico de Pokémon
async function obtenerInformacionTipo(tipo) {

    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);

        let personajesPorTipo = await respuesta.json();
        console.log(personajesPorTipo.pokemon);
    } catch (error) {
        console.log("Error al obtener el tipo");
    }
    
}

obtenerInformacionTipo("ground");

//Obtener una lista de los primeros 50 Pokémon
async function obtenerlListaPokemones() {

    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

        let personajes = await respuesta.json();
        console.log(personajes.results.slice(0,49));
        
    } catch (error) {
        console.log("Error",error);
    }

}

obtenerlListaPokemones();

//Obtener el nombre y el tipo de un Pokémon, así como el nombre y el tipo de su evolución
async function funcionCompuesta(id) {

    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let personaje = await respuesta.json();
        
        console.log(`POKEMON: ${personaje.name},TIPO: ${JSON.stringify(personaje.types)} personaje`);
    } catch (error) {
        console.log("error")
    }
    
}

funcionCompuesta(1);
