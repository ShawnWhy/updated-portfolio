



 const ProjectOneImage = "assets/images/meshicon.png";
const CodeQuizImage ="assets/images/codeQuizicon.png";
const WeatherDashImage = "assets/images/weathericon.png";

const redsquare = ".redSquare";
const blueSquare = ".blueSquare";
const goldSquare=".goldSquare";

 const projectOneAddress= "https://howarddaniels.github.io/the-daily-mesh/news.html";
 const codeQuizAddress="https://shawnwhy.github.io/CodeQuiz/";

 const weatherDashAddress= "https://shawnwhy.github.io/WeatherDash/";

 const projectOneDescription="a interactive website dedicated to obtaining current events, finiancial and weather information";
 const codeQuizDescription="a short quiz on basic coding knowledge";
const weatherDashDescription="an application that informs one of the weather in various locations of one's choosing";

var deployProject= function(event,square,image, address, description,number){
    this.square=square;
    this.image=image;
    this.address=address;
    this.description=description;
    this.number=number;
    event.stopPropagation();
    event.preventDefault();
    var eventTarget=event.target;
    if(eventTarget.getAttribute("value")=="on"){

    eventTarget.setAttribute("value","off");
    eventTarget.setAttribute("href",address);
    $(square).addClass("redSquareAnimation");
    var imageIcon = $("<img>")
    imageIcon.attr("src",image);
    setTimeout(() => {
        var projectDescription = $("div");
    projectDescription.addclass("biographyBar");
    projectDescription.html(description);
    $(`.row${number}`).append(projectDescription);
        
    }, 600);
}


}

$(".redsquare").on("mouseover",deployProject(event,ProjectOneImage,projectOneAddress,projectOneDescription,1));
