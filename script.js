var database = firebase.database();
database.ref('path/to/your/data').set({
  yourDataKey: 'yourDataValue'
});

var readRef = database.ref('path/to/your/data');
readRef.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});