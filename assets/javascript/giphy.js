//Some global variables before we start coding
var topics = ["Baseball" , "Football" , "BasketBall" , "Hockey" , "Golf" , "Soccer"];
//we first want to make the container reactive to the click event
document.querySelector("#container").addEventListener("click" , function(event) {
  //Out of time could not complete the add a button feature
  let exist = false;

  //if(topics.indexOf(("sportSearch").value.trim()) !== -1) {
    exist = true;
  //}
  //if(exist = true) {
    //alert("There is already a button for this!");
  //} 
  


  //We are seeing if the browser can support fetch command.
  if(window.fetch) {
    //storing the value of dataset sports in the button
    if(event.target.tagName == "BUTTON") {
      var sport = event.target.dataset.sports
      //This is a var to get the api itself and sending it parameters on what to pull.
      var queryURL = `https://api.giphy.com/v1/gifs/search?q="${sport}&api_key=LSLq3tnjyYxCRRP5WmWRntKPPOXEYSlW&limit=10`;
     //This is to request information from the queryURL server
    fetch(queryURL, {
      method: "GET"
    })
      //This is the AJAX data that should come back to me
      .then(function(response) {
        return response.json(); 
      })
      .then(function (response) {

        console.log(queryURL);

        console.log(response);
        //Setting the AJAX data returned to "result"
        var result = response.data;
        //Looping function for every result
        for(i = 0; i < result.length; i++) {
          //let pic of result
          
          //Making sure that images with a pg-13 or r rated tag will be removed
          if(result.rating !== "r" && result.rating !== "pg-13") {
            
            //Creating a div to fit our gifs
            var sportsDiv = document.createElement("div");
            //Storing the rating of the gif
            var rating = result[i].rating;

            //this creates a "p" tag and are creating text for that p value
            var p = document.createElement("p");
            p.innerText = `Rating: ${rating}`;
            var animated = result[i].images.original.url;
            var still = result[i].images.original_still.url;
            //Creating the image tag
            var sportsImage = document.createElement("img");
            //Giving each of the images specific tags for the play and pause.
            //sportsImage.setAttribute({
              //"src": response.images.original_still.url,
              //"data-still": response.images.original_still.url,
              //"data-animate": response.images.original.url,
              //"data-state": "still",
              //"class": "gif"
            
            sportsImage.setAttribute("src" , still);
            sportsImage.setAttribute("data-still" , still);
            sportsImage.setAttribute("data-animate" , animated);
            sportsImage.setAttribute("data-state" , "still");
            sportsImage.setAttribute("data-state" , "animate");
            //sportsImage.classList.add("pause");
            sportsImage.setAttribute("class" , "gif");
            
              
            
            
            //Apending the paragraph and image tags to our sports div
            sportsDiv.appendChild(p);
            sportsDiv.appendChild(sportsImage);
            //prepending the div to the container
            let gifsContainer = document.querySelector("#gifs");
            gifsContainer.insertBefore(sportsDiv , gifsContainer.firstChild);
            
          }

          //$(document).on("click" , "gifs" , function(sportsDiv) {

            //var currentState = $(this).attr("data-state");
            //var animate = $(this).attr("data-animate");
            //var still = $(this).attr("data-still");

            //if(currentState == "still") {
              //$(this).attr("data-state" , "animate")
              //$(this).attr("src" , animate);
            //}
            //else if (currentState == "animate") {
              //$(this).attr("data-state" , "still")
              //$(this).attr("src" , still);
            //}
          //});
          //This is our event listener to 
          document.getElementById("gifs").addEventListener("click",  function(event) {
            if(event.target.tagName == "img".toUpperCase()) {
              console.log("TagName" , event.target.tagName);
              let currentImg = event.target;
              console.log(currentImg);
              var state = currentImg.dataset.state
              console.log(state);
              
              //document.getElementById("gifs").setAttribute("data-state")
              
              //this will play the gif but will not pause it :(
              if(state === "still") {
                console.log("stateBefore" , state);
                
                //var newSports = sportsImage.setAttribute("data-animate" , sportsImage);
                currentImg.setAttribute("src" , currentImg.dataset.animate);
                currentImg.setAttribute("data-state" , "animate")
                console.log("stateAfter" , state);
              }

              else {
                //var newSports = sportsImage.setAttribute("data-still" , sportsImage);
                currentImg.setAttribute("src" , currentImg.dataset.still);
                currentImg.setAttribute("data-state" , "still");
                console.log("finalState" , state);
              }

          }

          });

        }

        

























    















      });





























    }












  }
  //This is in case the browser does not support the fetch method
  else {
    //This is to create a new xhr object
    const xhr = new XMLHttpRequest();
    //Setting up a "GET" request to the queryURL
    xhr.open("GET", queryURL);
































  }
    
})