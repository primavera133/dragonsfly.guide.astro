export const getSpecie = async (scientific_name: string) => {
    const query = `
        query {
            specieFromScientificName ( scientific_name: "${scientific_name}") {
                local_names
                description
            }
        }
    `
    const response = await fetch("https://dragonsgraphqlapi-jonasmyrenas.vercel.app/api", {
        method: "POST",
        headers: {
            "authorization": "Bearer superSecret123"
        },
        body: JSON.stringify({query})
    });

    const { data } = await response.json();
    
    return data
}