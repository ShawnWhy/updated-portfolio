
const numberTest=1


 const projectOneImage = "assets/images/meshicon.png";
const codeQuizImage ="assets/images/codeQuizicon.png";
const weatherDashImage = "assets/images/weathericon.png";

const redsquare = ".redSquare";
const blueSquare = ".blueSquare";
const goldSquare=".goldSquare";

 const projectOneAddress= "https://howarddaniels.github.io/the-daily-mesh/news.html";
 const codeQuizAddress="https://shawnwhy.github.io/CodeQuiz/";

 const weatherDashAddress= "https://shawnwhy.github.io/WeatherDash/";

 const projectOneDescription="a interactive website dedicated to obtaining current events, finiancial and weather information";
 const codeQuizDescription="a short quiz on basic coding knowledge";
const weatherDashDescription="an application that informs one of the weather in various locations of one's choosing";

var deployProject= function(square,image, address, description,number){
    this.square=square;
    this.image=image;
    this.address=address;
    this.description=description;
    this.number=number;
    // event.stopPropagation();
    // event.preventDefault();
    this.operation=function(){
    var eventTarget=event.target;
    if(eventTarget.getAttribute("value")=="on"){

    eventTarget.setAttribute("value","off");
    eventTarget.setAttribute("href",address);
    $(square).addClass("portfolioSquareAnimation");
    var imageIcon = $("<img>")
    imageIcon.attr("src",image);
    $(square).append(imageIcon);
    setTimeout(() => {
        var projectDescription = $("<div>");
    projectDescription.addClass("portfolioInfoBar");
    console.log(number);
    console.log(projectOneDescription);
    console.log(square);
    console.log(address);
    console.log(projectOneImage);
    console.log(projectOneAddress);

    $(".row"+ number.toString()).append(projectDescription);
    setTimeout(() => {
        projectDescription.html(description);

        
    }, 700);
        
    }, 600);
}}}
var redSquareHover= new deployProject(redsquare,projectOneImage,projectOneAddress,projectOneDescription,numberTest);
var blueSquareHover = new deployProject(blueSquare, codeQuizImage, codeQuizAddress, codeQuizDescription,2);
var goldSquareHover = new deployProject(goldSquare, weatherDashImage, weatherDashAddress, weatherDashDescription, 3);

// var deployProject =function(){
//     // event.stopPropagation();
//     console.log(event);
//     event.preventDefault();


// $(".redsquare").on("mouseover",deployProject(ProjectOneImage,projectOneAddress,projectOneDescription,1))
$(".redsquare").on("mouseover",function(event){
    console.log(event); 
    event.stopPropagation();
    event.preventDefault();
    redSquareHover.operation();
    
});

$(".blueSquare").on("mouseover",function(event){
    console.log(event); 
    event.stopPropagation();
    event.preventDefault();
    blueSquareHover.operation();
    
});
$(".goldSquare").on("mouseover",function(event){
    console.log(event); 
    event.stopPropagation();
    event.preventDefault();
    goldSquareHover.operation();
    
});


