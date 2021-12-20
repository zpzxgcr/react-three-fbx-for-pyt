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
				<ReactThreeFbxViewer
				alpha
				enablePan
				width={1920} disableZoom
				height={1080} disableRotate
				cameraPosition={cameraPosition} url={fbxUrl} onLoading={this.onLoad} onError={this.onError}/>
			</div>
		);
	}
}
