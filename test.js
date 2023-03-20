/*
 This is a simple script to run tests from the command line
 Create a new file called .test-api-settings.js in the same directory as this file and have it export a FramevrAutomateApi object

 Example
 -------
 const FramevrAutomateApi = require('./src');
 const api = new FramevrAutomateApi('YOUR-API-KEY-HERE', 'your-testing-room');
 api.setLogger(console.log);
 module.exports = api;
 -------

 Then run the following command from the command line:
 node test.js <test-name> <test-arguments>

 Examples
 --------

 node test.js getMembers
 node test.js addMembers "[\"test@test.test\"]"
 node test.js addMembers "[\"test@test.test\"]"
 node test.js createTextLabel "{\"assetName\": \"test\"}" "{\"value\": \"This is a new one\"}"
*/

const api = require('./.test-api-settings.js');
const test = process.argv[2];

console.log(`Running test: ${test}`);

const run = async() => {
    let result;

    if(test === 'addAdmins') {
        const admins = JSON.parse(process.argv[3]);
        result = await api.addAdmins(admins);
    } else if(test === 'addMembers') {
        const admins = JSON.parse(process.argv[3]);
        result = await api.addMembers(admins);
    } else if(test === 'changeActiveScene') {
        const scene = parseInt(process.argv[3]);
        result = await api.changeActiveScene(scene);
    } else if(test === 'changeFrameSettings') {
        const settings = JSON.parse(process.argv[3]);
        result = await api.changeFrameSettings(settings);
    } else if(test === 'createImage') {
        const data = JSON.parse(process.argv[3]);
        const settings = JSON.parse(process.argv[4]);
        result = await api.createImage(data, settings);
    } else if(test === 'createModel') {
        const data = JSON.parse(process.argv[3]);
        const settings = JSON.parse(process.argv[4]);
        result = await api.createModel(data, settings);
    } else if(test === 'createTextArea') {
        const data = JSON.parse(process.argv[3]);
        const settings = JSON.parse(process.argv[4]);
        result = await api.createTextArea(data, settings);
    } else if(test === 'createTextLabel') {
        const data = JSON.parse(process.argv[3]);
        const settings = JSON.parse(process.argv[4]);
        result = await api.createTextLabel(data, settings);
    } else if(test === 'editImage') {
        const assetId = process.argv[3];
        const data = JSON.parse(process.argv[4]);
        result = await api.editImage(assetId, {...data});
    } else if(test === 'editModel') {
        const assetId = process.argv[3];
        const data = JSON.parse(process.argv[4]);
        result = await api.editModel(assetId, {...data});
    } else if(test === 'editTextArea') {
        const assetId = process.argv[3];
        const data = JSON.parse(process.argv[4]);
        result = await api.editTextArea(assetId, {...data});
    } else if(test === 'editTextLabel') {
        const assetId = process.argv[3];
        const data = JSON.parse(process.argv[4]);
        result = await api.editTextLabel(assetId, {...data});
    } else if(test === 'getActiveScene') {
        result = await api.getActiveScene();
    } else if(test === 'getAdmins') {
        result = await api.getAdmins();
    } else if(test === 'getAssetInfo') {
        const assetType = process.argv[3];
        const assetId = process.argv[4];
        result = await api.getAssetInfo(assetType, assetId);
    } else if(test === 'getFrameSettings') {
        result = await api.getFrameSettings();
    } else if(test === 'getImage') {
        const assetId = process.argv[3];
        result = await api.getImage(assetId);
    } else if(test === 'getLibraryAssets') {
        const assetType = process.argv[3];
        const filterType = process.argv[4];
        const count = parseInt(process.argv[5]);
        result = await api.getLibraryAssets(assetType, filterType, count);
    } else if(test === 'getMembers') {
        result = await api.getMembers();
    } else if(test === 'getModel') {
        const assetId = process.argv[3];
        result = await api.getModel(assetId);
    } else if(test === 'getTextArea') {
        const assetId = process.argv[3];
        result = await api.getTextArea(assetId);
    } else if(test === 'getTextLabel') {
        const assetId = process.argv[3];
        result = await api.getTextLabel(assetId);
    } else {
        console.log('No or unknown test specified');
        return;
    }

    console.log(`Result: ${JSON.stringify(result)}`);
}
run();
