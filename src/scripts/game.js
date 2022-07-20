/* global window */
import Phaser from 'phaser';

import { globalState } from './objects/global-state';
import HomeScene from './scenes/home-scene';
import MainScene from './scenes/main-scene';
import PreloadScene from './scenes/preload-scene';

const DEFAULT_WIDTH = globalState.static.gameWidth;
const DEFAULT_HEIGHT = globalState.static.gameHeight;
const config = {
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, HomeScene, MainScene],
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    pixelArt: true
};

window.addEventListener('load', () => {
    new Phaser.Game(config);
});
