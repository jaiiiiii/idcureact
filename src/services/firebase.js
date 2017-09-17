import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyD8lFCdXXUejl4D4e_nUBszPkgPR16tkbY",
    authDomain: "myfirstreactapp-d027c.firebaseapp.com",
    databaseURL: "https://myfirstreactapp-d027c.firebaseio.com",
    projectId: "myfirstreactapp-d027c",
    storageBucket: "myfirstreactapp-d027c.appspot.com",
    messagingSenderId: "900206989425"
  }

 
  const auth = firebase.auth
  const provider = new firebase.auth.FacebookAuthProvider()

  function init (){
      return firebase.initializeApp(config);
  }

  async function login () {
      //login to facebook
      const result = await auth().signInWithPopup(provider)
      return result
  }

  async function logout () {
      //logout from facebook
      const result =await auth().signOut()
  }

 function autologin(callback){
     auth().onAuthStateChanged((x)=>callback(x))
  }

  //export as object {}
  export {
      init,
      login,
      logout,
      autologin
  }