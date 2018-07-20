
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAoD22k-Q8uOJ72mT9OgmV1n3QJV2amdOQ",
            authDomain: "webshop-d6506.firebaseapp.com",
            databaseURL: "https://webshop-d6506.firebaseio.com",
            projectId: "webshop-d6506",
            storageBucket: "webshop-d6506.appspot.com",
            messagingSenderId: "459180105672"
          };
          firebase.initializeApp(config);
          var bigOne = document.getElementById('bigOne');
          var dbRef = firebase.database().ref().child('text');
          dbRef.on('value', snap => bigOne.innerText = snap.val());