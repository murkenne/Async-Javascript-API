async function fetchRandomImages() {
    const apiUrl = 'https://picsum.photos/200/300';

    try {
        const response = await fetch(apiUrl);
        const imageUrl = response.url;
        return imageUrl;

    } catch (error) {
        console.error("Error recovering Image!", error);
        return null;
        
    }
}

const handleImages = async () => {
    const imageContainer = document.getElementById("images")

    try {
        const imageUrl1 = await fetchRandomImages();
        const imageUrl2 = await fetchRandomImages();

        imageContainer.innerHTML = `
        <img src="${imageUrl1}" alt= "image1">
        <img src="${imageUrl2}" alt= "image2">
        `
        
    } catch (error) {
        console.error("Error handling images", error);
        
    }
};

const updateImages = () => {
    handleImages();
};


updateImages();
setInterval(updateImages, 5000);