# FrameVR Automate API Helper
This is a helper library for the FrameVR Automate API for Node. It is a wrapper around the API that makes it easier to use.

[Please consult the FrameVR Automate API documentation for more information.](https://docs.framevr.io/)

## Example
```js
const FramevrAutomateApi = require('framevr-automate-api');
const apiKey = '12345-ABCDE';
const room = 'your-room';

const api = new FramevrAutomateApi(apiKey, room);
api.setLogger(console.log); // Optional if you want to output any debug messages

const activeScene = await api.getActiveScene();  // Returns active scene data
await api.setActiveScene(3); // Sets active scene to slide #3
```

## Available Methods
[Check the FrameVR Automate API documentation for available parameters](https://docs.framevr.io/)

* constructor(apiKey, room)
* addAdmins(emails)
* addMembers(emails)
* changeActiveScene(scene)
* changeFrameSettings(settings)
* createImage(settings, assetSettings)
* createModel(settings, assetSettings)
* createTextArea(settings, assetSettings)
* createTextLabel(settings, assetSettings)
* editImage(assetId, data)
* editModel(assetId, data)
* editTextArea(assetId, data)
* editTextLabel(assetId, data)
* getAdmins()
* getActiveScene()
* getMembers()
* getLibraryAssets(assetType, filterType, count)
* getAssetInfo(assetType, assetId)
* getImageInfo(assetId)
* getModelInfo(assetId)
* getTextAreaInfo(assetId)
* getTextLabelInfo(assetId)
