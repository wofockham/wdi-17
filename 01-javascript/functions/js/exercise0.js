/*
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

var tellFortune = function (numKids, partnerName, geoLocation, jobTitle) {
  var fortune = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName +  " with " + numKids + " kids.";

  console.log(fortune);
};

tellFortune(5, 'Wayne', 'New Zealand', 'sheep shearer');
tellFortune(11, 'Mary', 'Blacktown', 'house cleaner');
tellFortune(0, 'Benno', 'Bennington', 'stair polisher');
