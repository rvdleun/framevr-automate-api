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
    } else if(test === 'getImageInfo') {
        const assetId = process.argv[3];
        result = await api.getImageInfo(assetId);
    } else if(test === 'getLibraryAssets') {
        const assetType = process.argv[3];
        const filterType = process.argv[4];
        const count = parseInt(process.argv[5]);
        result = await api.getLibraryAssets(assetType, filterType, count);
    } else if(test === 'getMembers') {
        result = await api.getMembers();
    } else if(test === 'getModelInfo') {
        const assetId = process.argv[3];
        result = await api.getModelInfo(assetId);
    } else if(test === 'getTextAreaInfo') {
        const assetId = process.argv[3];
        result = await api.getTextAreaInfo(assetId);
    } else if(test === 'getTextLabelInfo') {
        const assetId = process.argv[3];
        result = await api.getTextLabelInfo(assetId);
    } else {
        console.log('No or unknown test specified');
        return;
    }

    console.log(`Result: ${JSON.stringify(result)}`);
}
run();
