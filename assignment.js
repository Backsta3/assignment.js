// feetToMile :

function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
    
}
var result = feetToMile(5380);
console.log("Miles-", result);

// woodCalculator :

function woodCalculator(Chair, Table, Bed) {
    var woodsChair = Chair * 1 ;
    var woodsTable = Table * 3 ;
    var woodsBed = Bed * 5 ;
    var totalWoods = woodsChair + woodsTable + woodsBed ;
    return totalWoods ;
}
var result2 = woodCalculator(14, 5, 12);
console.log( "Total woods-", result2);

// brickCalculator :

// For example:  Nineteens Floors;

function brickCalculator(tenFloors, fifteenFeets, nineFloors, twelveFeets) {
    var everyFloor1 = fifteenFeets * 1000 ;
    var tenFloorsBricks = tenFloors * everyFloor1 ;
    var everyFloor2 = twelveFeets * 1000 ;
    var nineFloorsBricks = nineFloors * everyFloor2 ;
    var totalBricks = tenFloorsBricks + nineFloorsBricks ;

    return totalBricks ;
}
var result3 = brickCalculator(10, 15, 9, 12);
console.log("Total Bricks-", result3);

// tinyFriend :

function tinyFriend(friends){ 
    var minName = friends.length;
      for (var i=0; i<friends.length; i++) {
          var currentName = friends[i];
          if (currentName.length<= minName) {
            minName = currentName.length;
            var smallName = currentName;

            }
        

        }
      return smallName ;  
    
}
var resultName = tinyFriend (['Rohm', 'Mj', 'Jefar']);
console.log("The shortest name is -", resultName);
