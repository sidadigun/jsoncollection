var imageData = [
  {
    "image": "0fe0f8de-2ae4-4492-8af5-9b16306cbeed.jpeg",
    "title": "1970",
    "description": "November"
  },
  {
    "image": "NOVA MAGAZINE 1965-1975.jpeg",
    "title": "1968",
    "description": "July"
  },
  {
    "image": "Nova Magazine.jpeg",
    "title": "1975",
    "description": "February"
  },
  {
    "image": "Nova May 1971 - Amanda Lear - The Duffy Archive.jpeg",
    "title": "1971",
    "description": "May"
  },
  {
    "image": "Nova UK August 1970 British Original Vintage Rare Retro Fashion Magazine Birthday Gift Present.jpeg",
    "title": "1970",
    "description": "August"
  },
  {
    "image": "The fearless women’s mag that played by none of the rules.jpeg",
    "title": "1970",
    "description": "September"
  },
];

function displayImages() {
  var gallery = document.getElementById('imageGallery');

  // Loop through the JSON data and create image elements
  imageData.forEach(function(item) {
    var imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    var image = document.createElement('img');
    image.src = item.image;

    var title = document.createElement('h3');
    title.textContent = item.title;

    var description = document.createElement('p');
    description.textContent = item.description;

    imageItem.appendChild(image);
    imageItem.appendChild(title);
    imageItem.appendChild(description);

    gallery.appendChild(imageItem);
  });
}


window.onload = displayImages;