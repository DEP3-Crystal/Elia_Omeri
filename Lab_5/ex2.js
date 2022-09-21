//-Create an object containing the information about a favorite movie. 
//The object should include title (string), duration (number) and actors (array of strings).
//-Create a function which receives the above object as a parameter and prints the information 
//about your favorite movie in the console, like below:

let movie = {
    title: 'Miracle in Cell No. 7',
    duration: 127,
    actors: ['Aras Bulut İynemli', 'Nisa Sofiya Aksongur']
}
function printMovie(movie) {
    return `"${movie.title}" running time is ${movie.duration} minutes. Starring: ${movie.actors[0]}, ${movie.actors[1]}, ${movie.actors[2]}, ${movie.actors[3]}"`;
}
console.log(printMovie(movie));