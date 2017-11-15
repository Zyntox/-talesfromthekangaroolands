var post = (function(){
  var pageIndex = document.getElementById('page-index');
  var finalPage = document.getElementById('final-page');
  var sectionList = document.getElementById('story-slider');
  var sectionWidth = sectionList.children[0].offsetWidth;
  var textSliderPosition = 0;
  var imageSlider = document.getElementById('image-slider');
  var imageWidth = imageSlider.children[0].offsetWidth;
  var imageSliderPosition = 0;


  if(window.attachEvent) {
      window.attachEvent('onresize', function() {
        sectionWidth = sectionList.children[0].offsetWidth;
        imageWidth = imageSlider.children[0].offsetWidth;
      });
  }
  else if(window.addEventListener) {
      window.addEventListener('resize', function() {
        sectionWidth = sectionList.children[0].offsetWidth;
        imageWidth = imageSlider.children[0].offsetWidth;
      }, true);

      window.addEventListener('keydown', function(event){
        var code = event.keyCode || event.which;
        console.log(code);
        if (code === 39){
          post.goToNextSection();
        } else if (code === 37){
          post.goToPreviousSection();
        }
      });


  }
  else {
      //The browser does not support Javascript event binding
  }


  var updatePageIndex = function(type){
    if (type == "increment"){
      if(( parseInt(pageIndex.innerHTML) != parseInt(finalPage.innerHTML) )){
        pageIndex.innerHTML = (parseInt(pageIndex.innerHTML) + 1);
      }
    } else if (type == "decrement"){
      if ( parseInt(pageIndex.innerHTML) != 1){
        pageIndex.innerHTML = (parseInt(pageIndex.innerHTML) - 1);
      }
    }
  }

  var goToImage = function(type){
    if(type == "next"){
      if(imageSliderPosition != (imageWidth * (imageSlider.children.length - 1))){
        imageSliderPosition += imageWidth;
      }
    } else if (type == "previous"){
      if (imageSliderPosition != 0){
          imageSliderPosition -= imageWidth;
      }
    }
    imageSlider.style.right = imageSliderPosition+ 'px';
  }





  return {
    goToNextSection: function(){
      if(textSliderPosition != (sectionWidth * (parseInt(finalPage.innerHTML) - 1)) ) {
        textSliderPosition += sectionWidth;
        sectionList.style.right = textSliderPosition + 'px';
        updatePageIndex("increment");
        goToImage("next");
      }
    },
    goToPreviousSection: function(){
      if (textSliderPosition != 0){
        textSliderPosition -= sectionWidth;
        sectionList.style.right = textSliderPosition + 'px';
        updatePageIndex("decrement");
        goToImage("previous");
      }
    }
  }

})()
