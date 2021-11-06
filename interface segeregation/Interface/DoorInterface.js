const doorMixins = (BaseClass) => class extends BaseClass {
    openDoors() {
        throw new Error('Method not implemented!');
    }
}

module.exports = doorMixins;