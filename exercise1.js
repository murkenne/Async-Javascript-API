async function fetchUserProfile() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const userData = {
        name: 'John',
        age: 30,
        email: 'john@example.com'
    };
    
    return userData;
}


async function displayUserProfile() {
    try {

        const userProfile = await fetchUserProfile();
        
        const userProfileElement = document.getElementById("userProfile");
        userProfileElement.innerHTML = `
        <h2>User Profile</h2>
        <p><strong>Name: </strong> ${userProfile.name}</p>
        <p><strong>Age: </strong> ${userProfile.age}</p>
        <p><strong>Email: </strong> ${userProfile.email}</p>
        `
        
        userProfileElement.style.boxShadow = "30px 10px 8px rgba(0, 0, 0, 0.2)";
        userProfileElement.style.padding = "20px";
        userProfileElement.style.margin = "10px";
        userProfileElement.style.borderRadius = "10px"; // Rounded corners
        userProfileElement.style.backgroundColor = "blue";
        userProfileElement.style.width = "300px";
        
        const container = document.getElementById("container");
        container.style.display = "flex";
        container.style.flexDirection = "column"; // Optional: stack children vertically
        container.style.alignItems = "center"; // Center vertically
        container.style.height = "100vh"; // Ensure full viewport height

        
    } catch (error) {
        console.error('Error fetching user profile.', error);
        const userProfileElement = document.getElementById("userProfile");
        userProfileElement.innerHTML = '<h2>Error loading user profile</h2>'

    }
}


document.addEventListener("DOMContentLoaded", displayUserProfile);


