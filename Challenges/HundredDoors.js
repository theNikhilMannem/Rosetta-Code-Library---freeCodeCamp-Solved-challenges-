/*

-> This problem statement is from https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors , where I solved this challenged and saved my code here.

There are 100 doors in a row that are all initially closed. You make 100 passes by the doors.
The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

*/


function getFinalOpenedDoors(numDoors) {
  
  // Creating an Array filled with numbers 1 to 100 (inclusive).
  let doors = Array(100).fill().map((eachDoor, index) => (
    {
      doorNum: index + 1,
      isOpen: false,
    }
  ))

  // Loop to iterate through all the 100 doors once.
  for (let eachPass = 0; eachPass < doors.length; eachPass++) {

    // Loop to iterate through each door for every pass and incrementing the doors to pass through based on the number of the pass (outer loop variable (eachPass)).
    for (let eachDoor = eachPass; eachDoor < doors.length; eachDoor += eachPass + 1) {

      // Toggling the door: closing if it is open and vice versa.
      if (doors[eachDoor].isOpen) {
        doors[eachDoor].isOpen = false
      }
      else {
        doors[eachDoor].isOpen = true
      }

    }

  }

  // Returning the door numbers that are open: first, filtering the doors that are open, and then, mapping the value of doorNum of each door object from the doors array into the returning array.
  return doors.filter(eachDoor => eachDoor.isOpen).map(eachDoor => eachDoor.doorNum)

}

console.log(getFinalOpenedDoors(100))
