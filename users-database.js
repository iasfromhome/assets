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
===================================*/
if (typeof userInfo !== "undefined" && userInfo.userID) {
  var userIndex = usersDatabase.findIndex(function(obj) {
    return obj.id === userInfo.userID;
  });

  if (userIndex !== -1) {
    (function userplanUpdate() {
      var user = usersDatabase[userIndex];
      userInfo.mentorship = user.plan;
      userInfo.maxLimit = user.limit;
    })();
  } else {
    console.log("User is not registered!.");
  }
} else {
  console.log("User info is missing!");
}
//-- (end) ----->




// The End___

