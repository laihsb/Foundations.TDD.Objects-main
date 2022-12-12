/* Write your code here! */
// `getCohort({cohort:number, name: string})` takes an object as a parameter and returns the cohort of that object.
function getCohort(cohort, name){
  for(let number in cohort){
  return cohort[number];
}
for(let string in name){
  return name[string];
  
}
}


/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  getCohort,
  // increment,
  // findHerbivores,
  // findCarnivores,
  // merge,
  // checkout,
  // analyzeFrequencies,
  // compareObjects,
};
