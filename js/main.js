(function () {
  
   
    //  retrieving the elements from the page
    var theData   = document.querySelectorAll('.data-ref'),
        mdDetails = document.querySelector('.modelDetails'),
        priceInfo = document.querySelector('.priceInfo'),
        mdName    = document.querySelector('.modelName');
        
    //adding event handling and loop through all cars
    theData.forEach(function(Element, index){
        Element.addEventListener('click',changeInfo, false);
    });
    
    
    // function which change the class
     function changeInfo () {
       
         let trigFile = carData[this.id];
        mdName.firstChild.nodeValue = trigFile.modelName;
        priceInfo.firstChild.nodeValue = trigFile.priceInfo;
        mdDetails.firstChild.nodeValue = trigFile.modelDetails;
        
         
    // opacity changes for active and nonactive classes     
         theData.forEach(function(vehicle){
             vehicle.classList.add('nonActive');
         });
         
         this.classList.remove("nonActive");
     }
    
    
})();
