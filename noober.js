// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Retrieve the name and surname of the passenger from ride, store it in memory

  let name = ride.passengerDetails.first
  let name2 = ride.passengerDetails.last 


 // Retrieve the phone of the passenger from ride, store it in memory

  let phone2 = ride.passengerDetails.phoneNumber

 // Retrieve pick up location from ride, store it in memory

  let pickuploc1 = ride.pickupLocation.address
  let pickuploc2 = ride.pickupLocation.city
  let pickuploc3 = ride.pickupLocation.state
  let pickuploc4 = ride.pickupLocation.zip

 // Retrieve drop off location from ride, store it in memory

  let dropoffloc1 = ride.dropoffLocation.address
  let dropoffloc2 = ride.dropoffLocation.city
  let dropoffloc3 = ride.dropoffLocation.state
  let dropoffloc4 = ride.dropoffLocation.zip

 // Retrieve number of passengers from ride, store it in memory

  let numberpassengers = ride.numberOfPassengers

// Retrieve Noober purple from ride, store it in memory

  let purple = ride.purpleRequested

// Write all the information in a human-readable format, to the JavaScript console and using the conditional for the 
// level service
  
  if (purple == true) { console.log(`Noober Purple Passenger: ${name} ${name2}`)} 
  else if (numberpassengers > 3) { console.log(`Noober XL Passenger: ${name} ${name2}`)}
  else { console.log(`Noober X Passenger: ${name} ${name2}`)} 
  console.log(`Phone Number: ${phone2}`)
  console.log(`Pick up Location: ${pickuploc1} ${pickuploc2} ${pickuploc3} ${pickuploc4}`)
  console.log(`Drop off Location: ${dropoffloc1} ${dropoffloc2} ${dropoffloc3} ${dropoffloc4}`)
  console.log(`Number of passangers: ${numberpassengers}`)
  console.log(`Noober purple: ${purple}`)

  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
