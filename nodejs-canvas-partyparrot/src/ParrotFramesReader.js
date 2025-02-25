const config = require("./config");

function ParrotFramesReader(parrotConfig, whiteVersion) {
    this.parrotConfig = parrotConfig;
    this.baseParrotsPath = whiteVersion ? config.whiteBaseParrots : config.baseParrots;
}

ParrotFramesReader.prototype.getFrames = function() {
    let frames = [];
    let numberOfFrames = this.parrotConfig.getNumberOfFrames();
    for(var i = 1; i <= numberOfFrames; i++) {
        frames.push(`${this.baseParrotsPath}/${this.parrotConfig.getParrotType()}/frame-${i.toString().padStart(3, '0')}.png`);
    }
    return frames;
}

module.exports = ParrotFramesReader;