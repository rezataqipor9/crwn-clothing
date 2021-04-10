import firebase from 'firebase/app'
import 'firebase/firestore'
const firestore=firebase.firestore()
// first approach
firestore.collection('users').doc('DAhiQ1qyry1smkgbYeCq').collection('carditem').doc('bpMXgTDdWwPdTIBvbpMO')
// second approach
firestore.doc('/users/DAhiQ1qyry1smkgbYeCq/carditem/bpMXgTDdWwPdTIBvbpMO')