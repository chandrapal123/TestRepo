const firestore=require('@google-cloud/firestore')
const db=new firestore({
  projectId: 'myagent-mwkt',
  keyFilename: 'myagent-mwkt-firebase-adminsdk-ubjy5-3a6ad48236.json'
})
module.exports = db;
