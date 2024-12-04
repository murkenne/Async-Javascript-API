// Task 2: Fetching Characters Using Fetch API
async function fetchHeroData() {
    const apiUrl = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=4ab805c65c4402360e4572c3a376eb0c&hash=314f1d00a835e607982461ad239a7481';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.data.results; // Return the list of heroes
    } catch (error) {
        console.error("Error fetching hero data:", error);
    }
}

// Task 3: Updating User Interface Dynamically
async function handleData() {
    const container = document.getElementById("container");
    container.innerHTML = ''; // Clear existing content

    try {
        const heroes = await fetchHeroData();
        
        heroes.forEach(hero => {
            const imageUrl = `${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`;
            // Use only name and description properties
            container.innerHTML += `
                <div class="hero-card">
                    <h3>${hero.name}</h3>
                    <img src="${imageUrl}" alt="${hero.name} image"/>
                    <p>${hero.description || "No description available"}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error updating UI:", error);
    }
}


handleData();
//setInterval(handleData, 5000);

