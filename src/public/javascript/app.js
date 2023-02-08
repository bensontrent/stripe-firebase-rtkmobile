/* global firebase, firebaseui, Stripe */

/**
 * Replace with your publishable key from the Stripe Dashboard
 * https://dashboard.stripe.com/apikeys
 */
const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51Le2P5LH6KKgKRTnhxNC2afJTTzhCEY0kimg1TV867LPMxPB4pk7sUNGbns0R2Z5ECzcwW8eHhpJjDwj7V3R1SBX00qfrw4KDX";

/**
 * Your Firebase config from the Firebase console
 * https://firebase.google.com/docs/web/setup#config-object
 */
const firebaseConfig = {
  apiKey: "AIzaSyBtdMq1AnlopsCo6Rml3hL6PxnUiELl3g4",
  authDomain: "rtkmobile-66a04.firebaseapp.com",
  projectId: "rtkmobile-66a04",
  storageBucket: "rtkmobile-66a04.appspot.com",
  messagingSenderId: "606749855827",
  appId: "1:606749855827:web:d7e31f132ecd013e1336a6",
  measurementId: "G-9FNZ73QBY3"
};

/**
 * Initialize Firebase
 */
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
let currentUser;

/**
 * Firebase Authentication configuration
 */
const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
const firebaseUiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: () => {
      document.querySelector("#loader").style.display = "none";
    }
  },
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Your terms of service url.
  tosUrl: "https://example.com/terms",
  // Your privacy policy url.
  privacyPolicyUrl: "https://example.com/privacy"
};
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("main").style.display = "block";
    currentUser = firebaseUser.uid;
    //startDataListeners();
  } else {
    document.querySelector("main").style.display = "none";
    firebaseUI.start("#firebaseui-auth-container", firebaseUiConfig);
  }
});

/**
 * Data listeners
 */

/**
 * Event listeners
 */
