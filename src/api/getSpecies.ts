export const getSpecies = async () => {
    const query = `
        query {
            species {
                scientific_name
                local_names
            }
        }
    `;

    const response = await fetch(
        "https://dragonsgraphqlapi-jonasmyrenas.vercel.app/api",
        {
            method: "POST",
            headers: {
                authorization: "Bearer superSecret123",
            },
            body: JSON.stringify({ query }),
        }
    );

    const { data } = await response.json();
    return data;
};
