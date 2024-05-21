document.querySelector('#meme-form').addEventListener('submit', function(e) {
    e.preventDefault();

const topText = document.querySelector('#top-text').value;
const bottomText = document.querySelector('#bottom-text').value;
const imageUpload = document.querySelector('#image-upload');
const imageUrl = URL.createObjectURL(imageUpload.files[0]);

createMeme(topText, bottomText, imageUrl);

//clear form after meme is created
this.reset();
});

function createMeme(topText, bottomText, imageUrl) {
    const memeContainer = document.querySelector('#meme-container');

    const memeDiv = document.createElement('div');
    const topTextDiv = document.createElement('div');
    topTextDiv.textContent = topText;
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.textContent = bottomText;
    const memeImage = document.createElement('img');
    memeImage.src = imageUrl;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Meme';

    // Append all elements
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(memeImage);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteButton);
    memeContainer.appendChild(memeDiv);

    // Delete meme
    deleteButton.addEventListener('click', function () {
        memeDiv.remove();
    });
}

