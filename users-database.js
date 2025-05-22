/* THE DATABASE ARRAY:
==============================*/
const usersDatabase = [
//00001:_____
  {
    id:"001",
    plan:"Passive!",
    limit:30
  },
//00002:_____
  {
    id:"002",
    plan:"Active!",
    limit:60
  },
//00003:_____
  {
    id:"003",
    plan:"Passive!",
    limit:90
  }
];


/* FIND THE USER INDEX:
===============================*/
var userIndex = userDatabase.findIndex(function(obj) {
  return obj.id === userInfo.userID;
});


/* UPDATE USER INFO INSTANTLY:
===============================*/
(function userplanUpdate() {
  var user = userDatabase[userIndex];
  if (user && user.id===userInfo.userID) {
    userInfo.mentorship = user.plan;
    userInfo.maxLimit = user.limit;
    alert(JSON.stringify(userInfo));
  } else {
    console.log("Not Registered!")
  }
})();
//-- (end) ----->




// The End___

