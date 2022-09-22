document.getElementById("story-button").addEventListener("click", makeStory);
//Diana visited the beautiful Barcelona
function makeStory(){
    let places = document.getElementById("places").value;
    let characteristics = document.getElementById("characteristics").value;
    let people = document.getElementById("people").value;
    let story=people.concat(` visited the ${characteristics}  ${places} .`);
    document.getElementById("story").textContent=story;
    console.log(story);
}