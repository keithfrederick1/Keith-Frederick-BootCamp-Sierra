/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// input: Array of animal objects, string anmal name
//output: animal object or null
// conditions: animal object name must match name given
//edgecases:


function search(animals, name){
    for (let i = 0; i < animals.length; i++){
        if ( animals[i].name === name){
            return animals[i];
        } else {
            return null;
        }
    }
        

}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//inputs: array of animal objects, given animal name, replacement animal object
//outputs: replaced animal name in array
//conditions: if the name given matches name property, replace the whole object w replacement
//edgecases:


function replace(animals, name, replacement){
    for (let i = 0; i < animals.length; i++){
        if( animals[i].name === name){
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            return animals.splice(i,1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){// array of animals and object for new animal
    if (animal.name.length > 0 && animal.species.length > 0){// if they type something in
        for( let i = 0; i < animals.length; i++){//loop thru the animals array checking if the name prop matches the name input
            if (animals[i].name.toLowerCase() !== animal.name.toLowerCase()){// if it matches none, add it to animals
                animals.push(animal);
           
            } else if (animals[i].name.toLowerCase() === animal.name.toLowerCase()){
                return "That User exists already.Please choose another name."
            }// if it matches, return "That user exists"
        }
    } else {// if they dont type anything and try to continue
        return "Sorry, that input is invalid."
    }
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
