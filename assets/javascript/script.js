
    


function iconHover(event){
    event.preventDefault();
    event.stopPropagation();
    
    $(".redSquare").addClass("redSquareAnimation");   
    var portraitImage=$("<img>");

    portraitImage.addClass("align-middle");
    portraitImage.attr("src","assets/images/selfportrait.jpg");
    $(".redSquare").append(portraitImage);
    $(".redSquare").attr("style", "position:relative; z-index:-1");
    var biographyContainer = $("<div>");
   biographyContainer.addClass("biographyText biographyBar");
    $(".profileContainer").append(biographyContainer);
    setTimeout(function(){ var biographySubContainer = $("<div>");
    biographySubContainer.html("<p>Shawn Yu is an Aspiring Front-end Back-end Developer and visual developer.</p>");
    // biographySubContainer.addClass("col-md-12");
    $(".biographyText").append(biographySubContainer);},600);
    setTimeout(function(){

    var biographyContainer2 = $("<div>");
    biographyContainer2.addClass("biographyText2 biographyBar");
     $(".profileContainer").append(biographyContainer2);
    },1600);

    setTimeout(function(){ var biographySubContainer2 = $("<div>");
    
    biographySubContainer2.html("<p>He is a former teacher and commercial artist.</p>");
    // biographySubContainer2.addClass("col-md-12");
    $(".biographyText2").append(biographySubContainer2);},1800);

createSquare();

}
function createSquare(){
    setTimeout(function(){
    var squareContainer = $("<div>");
    squareContainer.addClass("biographyBar");
    
    $(".profileContainer").append(squareContainer);
    setTimeout(function(){
    var resumeSquare = $("<a>");
    resumeSquare.addClass("resumeSquare");
    resumeSquare.attr("value","on");
    squareContainer.append(resumeSquare);},100)
setTimeout(function(){
    var gitHubSquare = $("<a>");
    gitHubSquare.addClass("gitHubSquare");
    gitHubSquare.attr("value","on");
    squareContainer.append(gitHubSquare);},200)
    var linkedInSquare = $("<a>");
setTimeout(function(){
    linkedInSquare.addClass("linkedInSquare");
    linkedInSquare.attr("value","on");
    squareContainer.append(linkedInSquare);},300)
},2400)
}
function resumeHover(event){
    event.preventDefault();
    event.stopPropagation();
    var thisThing=event.target;
    
    if(thisThing.getAttribute("value")=="on"){
    $(".resumeSquare").attr( "value","off");
    var iconA = $("<img>");
    iconA.attr("src","assets/images/CVlogo.png" );
    $(".resumeSquare").append(iconA);
        $(".resumeSquare").attr( "href","resume.html");}}
    function linkedInHover(event){

    event.preventDefault();
    event.stopPropagation();
    var thisThing=event.target;
    if(thisThing.getAttribute("value")=="on"){
        $(".linkedInSquare").attr( "value","off");

    var iconB = $("<img>");
    iconB.attr("src","assets/images/linkednlogo.png" );
    $(".linkedInSquare").append(iconB);
    $(".linkedInSquare").attr("href","https://www.linkedin.com/in/shawn-yu-4377b411");}}

    function gitHubHover(event){
        event.preventDefault();
        event.stopPropagation();
        var thisThing=event.target;
       
        if(thisThing.getAttribute("value")=="on"){
            $(".gitHubSquare").attr( "value","off");

       var iconC = $("<img>");
    iconC.attr("src","assets/images/git logo.png" );
    $(".gitHubSquare").append(iconC);
 $(".gitHubSquare").attr("href","https://github.com/ShawnWhy");}}
    






$(".redSquare").on("mouseover",iconHover);
$(document).on("mouseover",".resumeSquare",resumeHover);
$(document).on("mouseover",".linkedInSquare",linkedInHover);
$(document).on("mouseover",".gitHubSquare",gitHubHover);