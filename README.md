# react-three-fbx-viewer

> fbx viewer with three.js for react

**Only render a fbx files**


## Install

```bash
npm install --save react-three-fbx-for-pyt
```

## Usage

```jsx
import React, { Component } from 'react';
import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';

let fbxUrl = require('./asd.fbx');

export default class App extends Component {
  onLoad(e) {
    console.log(e);
  }

  onError(e) {
    console.log(e);
  }
  render () {
    let cameraPosition = {
      x:150,
      y:300,
      z:350
    }
    return (
      <div>
        <ReactThreeFbxViewer cameraPosition={cameraPosition} url={fbxUrl} onLoading={this.onLoad} onError={this.onError}/>
      </div>
    );
  }
}

```

## Properties

### inputs
| param        | description           | type  | default |
| ------------- | -------------------- | :-----: | ----- |
| url | url fbx to load | String | "" |
| backgroundColor | color in hex 如果设置了alpha为true的话该值会失效| Hex | 0x000000 |
| alpha | 是否设置背景透明 | boolean | false |
| width | 设置画布宽度 | number | 当前window的宽度 |
| height | 设置画布高度| number | 当前window的高度 |
| angle | angle of perspective camera in scene | number | 45 |
| near | near of perspective camera in scene | number | 1 |
| far | far of perspective camera in scene | number | 2000 |
| cameraPosition | camera position in scene | Object | {x: 2, y: 0, z: 10} |
| controlsPosition | control position in scene | Object | {x: 0, y: 0, z: 0} |

*In a future, you will can choice the lights (HemisphereLight,HemisphereLight,AmbientLight, ...)*
### inputs
| event        | description           | return |
| ------------- | -------------------- | :-----: |
| onError | return an error | object  error |
| onLoading | return an object with fbx is loading | object onloading |

---
### 特别鸣谢
原作者@ https://github.com/kappys1/react-three-fbx-viewer