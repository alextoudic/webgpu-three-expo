# WebGPU Three.js Expo Example

A minimal reproduction of [react-native-webgpu](https://github.com/wcandillon/react-native-webgpu)'s `react-three-fiber` example, showcasing Three.js running on React Native WebGPU with Expo and Tailwind CSS.

## Features

- Interactive 3D scene with rotating boxes, cylinders, and spheres
- Orbit controls for camera manipulation
- WebGPU-powered rendering on React Native
- Expo Router setup with TypeScript and Tailwind (via Nativewind)

## Installation

```bash
# Install dependencies
bun install

# For iOS, you may need to disable Metal Validation in Xcode
# Edit Scheme → Uncheck "Metal Validation"
```

## Running

```bash
# Start the Expo development server
bun start

# Build and run on iOS
bun ios

# Build and run on Android
bun android
```

## Project Structure

- `src/screens/Scene` - Main 3D scene component with Three.js objects
- `src/components/Canvas` - WebGPU canvas wrapper
- `src/components/OrbitControl` - Camera orbit controls implementation

## Notes

This project uses a patched version of `@react-three/fiber` to work with React Native WebGPU.

## Related Projects

- [react-native-webgpu](https://github.com/wcandillon/react-native-webgpu) - React Native WebGPU implementation using Dawn
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js

