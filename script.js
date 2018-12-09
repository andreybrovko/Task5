 function addScript(src) {
    var element = document.createElement("script");
    element.src = src;
    document.head.appendChild(element);
}
 
function getVkImages(response) {
    console.log(response);
    console.log(response.response.items[0].sizes[8].url);

    for (var i = 0; i < 108; i++){

        var div = document.createElement('div');
        var className = "column demo cursor";
        if(i === 0) {
             className += " active";    
        }
        div.className = className;
        var j = 108 - i;
        div.innerHTML = "<img  src='" + response.response.items[i].sizes[2].url + "' onclick='currentSlide("+j+")'>";

        
        list1.appendChild(div);
        
        var div1 = document.createElement('div');
        var className = "mySlides";
        if(i === 0) {
             className += " show";    
        }
        div1.className = className;
        div1.innerHTML = "<img  src='" + response.response.items[i].sizes[8].url + "'>";

        list.insertBefore(div1, list.firstChild);
     }
}

function initGallery() {
    var getVkImagesRequest = "https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count=108";
    addScript(getVkImagesRequest + '&callback=getVkImages');
}

initGallery();

var slideIndex = 1;



function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {     
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");      
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 