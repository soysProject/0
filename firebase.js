(function() {
	const config = {
    apiKey: "AIzaSyCXHZ2sC1KZC2ZML1nDwuZ6bLKZB9vlmxo",
    authDomain: "acfun-soys.firebaseapp.com",
    databaseURL: "https://acfun-soys.firebaseio.com",
    projectId: "acfun-soys",
    storageBucket: "acfun-soys.appspot.com",
    messagingSenderId: "401139272318"
};
	firebase.initializeApp(config);
	  const Dbar = document.getElementById('vtitle');

  
  const dbRefHtml = firebase.database().ref().child('vtitle');
   
  dbRefHtml.on('value', snap=> Dbar.innerText = snap.val());;
}());
