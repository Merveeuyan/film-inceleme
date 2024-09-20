document.getElementById('review-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const movieTitle = document.getElementById('movie').value;
    const reviewText = document.getElementById('review').value;

    
    if (!movieTitle || !reviewText) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    
    await addReview(movieTitle, reviewText);

    
    document.getElementById('movie').value = '';
    document.getElementById('review').value = '';
});

async function addReview(movie, review) {
    const reviewList = document.getElementById('reviews-list');

    
    const newReview = document.createElement('li');
    newReview.textContent = `${movie}: ${review}`;
    
    
    reviewList.appendChild(newReview);
}