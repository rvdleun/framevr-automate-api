const {FrameVrAssetType} = require("./models");

class FramevrAutomateApi {
    /**
     * @type {string} #apiKey
     */
    #apiKey = '';

    /**
     * @type {string} #baseUrl
     */
    #baseUrl = 'https://api.framevr.io:8443/automate/v1';

    /**
     * @type {(string) => void} #logger
     */
    #logger = (message) => {};

    /**
     * @type {string} #frame
     */
    #frame = '';

    /**
     * @param {string} apiKey
     */
    constructor(apiKey, frame) {
        this.#apiKey = apiKey;
        this.#frame = frame;
    }

    /**
     * @param {string[]} emails
     * @returns {Promise<string>}
     */
    async addAdmins(emails) {
        this.#logger(`Adding admins(${emails}) to ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/admins/${this.#apiKey}/${emails}`, 'post');
        return response.message;
    }

    /**
     * @param {string[]} emails
     * @returns {Promise<string>}
     */
    async addMembers(emails) {
        this.#logger(`Adding members(${emails}) to ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/members/${this.#apiKey}/${emails}`, 'post');
        return response.message;
    }

    /**
     * @param {number} scene
     */
    async changeActiveScene(scene) {
        this.#logger(`Changing scene in room ${this.#frame} to ${scene}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/activescene/${this.#apiKey}/${scene}`, 'put');
        return response.message;
    }

    /**
     * @param {FrameSetting} settings
     */
    async changeFrameSettings(settings) {
        this.#logger(`Change frame settings from ${this.#frame} with data ${JSON.stringify(settings)}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/settings/${this.#apiKey}`, 'put');
        return response.data;
    }

    /**
     * @param {FrameVrAssetType} assetType
     * @param {CreateAssetBaseRequest} settings
     * @param {BaseInfo} assetSettings
     * @returns {Promise<*>}
     */
    async createAsset(assetType, settings, assetSettings) {
        const data = {...settings, settings};

        this.#logger(`Creating asset for type ${assetType} for ${this.#frame} with data ${JSON.stringify(data)}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/assets/${assetType}/${this.#apiKey}`, 'post', data);

        return response.data;
    }

    /**
     * @param {CreateAssetBaseRequest} settings
     * @param {ImageInfo} assetSettings
     */
    async createImage(settings, assetSettings) {
        return this.createAsset(FrameVrAssetType.images, settings, assetSettings);
    }

    /**
     * @param {CreateAssetBaseRequest} settings
     * @param {ModelInfo} assetSettings
     */
    async createModel(settings, assetSettings) {
        return this.createAsset(FrameVrAssetType.models, settings, assetSettings);
    }

    /**
     * @param {CreateAssetBaseRequest} settings
     * @param {TextAreaInfo} assetSettings
     */
    async createTextArea(settings, assetSettings) {
        return this.createAsset(FrameVrAssetType.textAreas, settings, assetSettings);
    }

    /**
     * @param {CreateAssetBaseRequest} settings
     * @param {ImageInfo} assetSettings
     */
    async createTextLabel(settings, assetSettings) {
        return this.createAsset(FrameVrAssetType.texts, settings, assetSettings);
    }

    /**
     * @param {FrameVrAssetType} assetType
     * @param {string} assetId
     * @param {BaseInfo} data
     * @returns {Promise<*>}
     */
    async editAssetInfo(assetType, assetId, data) {
        this.#logger(`Editing asset info from type ${assetType}, id ${assetId} from ${this.#frame} with data ${JSON.stringify(data)}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/assets/${assetType}/${assetId}/${this.#apiKey}`, 'put', data);
        return response.data;
    }

    /**
     * @param {string} assetId
     * @param {ImageInfo} data
     * @returns {Promise<void>}
     */
    async editImage(assetId, data) {
        return this.editAssetInfo(FrameVrAssetType.images, assetId, data);
    }

    /**
     * @param {string} assetId
     * @param {ModelInfo} data
     * @returns {Promise<void>}
     */
    async editModel(assetId, data) {
        return this.editAssetInfo(FrameVrAssetType.models, assetId, data);
    }

    /**
     * @param {string} assetId
     * @param {TextAreaInfo} data
     * @returns {Promise<void>}
     */
    async editTextArea(assetId, data) {
        return this.editAssetInfo(FrameVrAssetType.textAreas, assetId, data);
    }

    /**
     *
     * @param {string} assetId
     * @param {TextLabelInfo} data
     * @returns {Promise<void>}
     */
    async editTextLabel(assetId, data) {
        return this.editAssetInfo(FrameVrAssetType.texts, assetId, data);
    }

    /**
     * @returns {Promise<string[]>}
     */
    async getAdmins() {
        this.#logger(`Fetching admins from ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/admins/${this.#apiKey}`, 'get');
        return response.data;
    }

    /**
     * @returns {Promise<string[]>}
     */
    async getActiveScene() {
        this.#logger(`Fetching active scene from ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/activescene/${this.#apiKey}`, 'get');
        return response.data;
    }

    /**
     * @returns {Promise<string[]>}
     */
    async getMembers() {
        this.#logger(`Fetching members from ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/members/${this.#apiKey}`, 'get');
        return response.data;
    }

    /**
     * @param {"particles" | "shaders"} assetType
     * @param {"featured" | "latest"} filterType
     * @param {number} count
     */
    async getLibraryAssets(assetType, filterType, count) {
        this.#logger(`Fetching library assets`);
        const response = await this.#makeRequest(`/library/${assetType}/${filterType}/${count}`, 'get');
        return response.data;
    }

    /**
     * @param {FrameVrAssetType} assetType
     * @param {string} assetId
     * @returns {Promise<BaseInfo>}
     */
    async getAssetInfo(assetType, assetId) {
        this.#logger(`Fetching asset info from type ${assetType}, id ${assetId} from ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/assets/${assetType}/${assetId}/${this.#apiKey}`, 'get');
        return response.data;
    }

    async getFrameSettings() {
        this.#logger(`Fetching frame settings from ${this.#frame}`);
        const response = await this.#makeRequest(`/frames/${this.#frame}/settings/${this.#apiKey}`, 'get');
        return response.data;
    }

    /**
     * @param {string} assetId
     * @returns {Promise<ImageInfo>}
     */
    async getImageInfo(assetId) {
        return this.getAssetInfo(FrameVrAssetType.images, assetId);
    }

    /**
     * @param {string} assetId
     * @returns {Promise<ModelInfo>}
     */
    async getModelInfo(assetId) {
        return this.getAssetInfo(FrameVrAssetType.models, assetId);
    }

    /**
     * @param {string} assetId
     */
    async getTextAreaInfo(assetId) {
        return this.getAssetInfo(FrameVrAssetType.textAreas, assetId);
    }

    /**
     * @param {string} assetId
     */
    async getTextLabelInfo(assetId) {
        return this.getAssetInfo(FrameVrAssetType.texts, assetId);
    }

    /**
     * @param {string} url
     */
    setBaseUrl(url) {
        this.#baseUrl = url;
    }

    setLogger(logger) {
        this.#logger = logger;
    }

    async #makeRequest(endpoint, method, body = null) {
        const url = `${this.#baseUrl}${endpoint}`;
        const request = await fetch(url, {
            method,
            body: body && JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });

        const json = await request.json();
        this.#logger(JSON.stringify(json));

        return json;
    }
}

module.exports = FramevrAutomateApi;
