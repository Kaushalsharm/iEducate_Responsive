const accessKey = 'uAAemp4ID-Yv0ucsxIO7N5SK72NIff2PqH2A32TZYqc';
const query = 'education,books,laptop'; // Multiple terms separated by comma
const endpoint = `https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`;

// Select the <img> elements
const imgElements = [
    document.getElementById('randomImage1'),
    document.getElementById('randomImage2'),
    document.getElementById('randomImage3')
];

imgElements.forEach(imgElement => {
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming data is an object with the random photo details
            const randomPhotoUrl = data.urls.regular;
            imgElement.src = randomPhotoUrl;
            imgElement.alt = data.alt_description; // Set alt description dynamically
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
        });
});



burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-res');
    navlist.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
})

// const images= document.querySelector(".imgfluid");
// const URL = "https://api.unsplash.com/photos/?client_id=uAAemp4ID-Yv0ucsxIO7N5SK72NIff2PqH2A32TZYqc";

// fetch(URL)
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     this.images
// })