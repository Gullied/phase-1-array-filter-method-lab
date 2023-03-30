// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

 function findMatching (drivers,str){
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase() )
 }
 console.log(findMatching(drivers, "zuzu"));

 function fuzzyMatch(drivers, str){
    return drivers.filter(driver => driver.toLowerCase().startsWith(str.toLowerCase()) )
 }
 console.log(fuzzyMatch(drivers,"B"));

 const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(driver,str){
     return driver.filter(drive => drive.name === str)
    

}
console.log(matchName(driver, "Bobby"))