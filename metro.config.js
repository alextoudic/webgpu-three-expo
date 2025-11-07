// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const threePackagePath = path.resolve(__dirname, 'node_modules/three');
const r3fPath = path.resolve(__dirname, "node_modules/@react-three/fiber");

config.resolver = {
  ...config.resolver,
  assetExts: [...config.resolver.assetExts, 'glb', 'gltf', 'jpg', 'bin', 'hdr'],
  resolveRequest: (context, moduleName, platform) => {
    if (moduleName.startsWith('three/addons/')) {
      return {
        filePath: path.resolve(threePackagePath, 'examples/jsm/' + moduleName.replace('three/addons/', '') + '.js'),
        type: 'sourceFile',
      };
    }
    if (moduleName === 'three' || moduleName === 'three/webgpu') {
      return {
        filePath: path.resolve(threePackagePath, 'build/three.webgpu.js'),
        type: 'sourceFile',
      };
    }
    if (moduleName === 'three/tsl') {
      return {
        filePath: path.resolve(threePackagePath, 'build/three.tsl.js'),
        type: 'sourceFile',
      };
    }

    if (moduleName === "@react-three/fiber") {
      //Just use the vanilla web build of react three fiber, not the stale "native" code path which has not been kept up to date.
      return {
        filePath: path.resolve(r3fPath, "dist/react-three-fiber.esm.js"),
        type: "sourceFile",
      };
    }
    // Let Metro handle other modules
    return context.resolveRequest(context, moduleName, platform);
  },
}

config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  })
}

module.exports = withNativeWind(config, { input: './global.css' });
