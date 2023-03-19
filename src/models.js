/**
 * @enum {string}
 * @readonly
 */
const FrameVrAssetType = {
    images: 'images',
    models: 'models',
    textAreas: 'text-areas',
    texts: 'texts'
}

/**
 * @typedef {Object} BaseInfo
 * @property {Vector3} position
 * @property {Vector3} rotation
 * @property {Vector3} scale
 */

/**
 * @typedef {Object} ImageBaseInfo
 * @property {boolean} downloadable
 * @property {boolean} grabLocked
 * @property {string} imageURL
 * @property {boolean} zoomable
 */

/**
 * @typedef {Object} ModelBaseInfo
 * @property {boolean} downloadable
 * @property {boolean} grabLocked
 * @property {string} modelURL
 */

/**
 * @typedef {Object} TextAreaBaseInfo
 * @property {string} text
 */

/**
 * @typedef {Object} TextLabelBaseInfo
 * @property {string} value
 */

/**
 * @typedef {BaseInfo & ImageBaseInfo} ImageInfo
 * @typedef {BaseInfo & ModelBaseInfo} ModelInfo
 * @typedef {BaseInfo & TextAreaBaseInfo} TextAreaInfo
 * @typedef {BaseInfo & TextLabelBaseInfo} TextLabelInfo
 */

/**
 * @typedef {Object} CreateAssetBaseRequest
 * @property {string} assetName
 * @property {number[]} scenes
 * @property {string} ownerEmail
 */

/**
 * @typedef {Object} FrameSetting
 * @property {string} activeSlideId
 * @property {boolean} allowRemix
 * @property {boolean} backgroundAssets
 * @property {boolean} backgroundPhotosphere
 * @property {"owner" | "member" | "guest"} cameraPermissionLevel
 * @property {"ownerEditable" | "memberEditable" | "guestEditable"} calendarInvitePermissionLevel
 * @property {boolean} chatHistory
 * @property {string} currentPhotosphere
 * @property {boolean} customNavMesh
 * @property {string} customNavMeshPath
 * @property {"ownerEditable" | "memberEditable" | "guestEditable"} editPermissionLevel
 * @property {"ownerInteractable" | "memberInteractable" | "allInteractable"} interactPermissionLevel
 * @property {boolean} isSinglePlayerMode
 * @property {"owner" | "member" | "guest"} micPermissionLevel
 * @property {boolean} proposeAudio
 * @property {boolean} spectatorModeEnabled
 * @property {"ownerViewable" | "memberViewable" | "allViewable"} viewPermissionLevel
 * @property {boolean} ezPanelEnabled
 */

/**
 * @typedef {Object} Vector3
 * @property {number} x
 * @property {number} y
 * @property {number} z
 */

module.exports = {
    FrameVrAssetType
}
