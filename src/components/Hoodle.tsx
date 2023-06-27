import { useState, useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import HoodieModel from "../assets/images/3d rotation/Hoodie with green lines.gltf"

function loadGLTFModel(scene: { add: (arg0: any) => void; }, glbPath: string, options: { receiveShadow: any; castShadow: any; }) {
	const { receiveShadow, castShadow } = options;
	return new Promise((resolve, reject) => {
		const loader = new GLTFLoader();
		loader.load(
			glbPath,
			(gltf: { scene: any; }) => {
				const obj = gltf.scene;
				obj.name = "Hoodle";
				obj.position.y = 0;
				obj.position.x = 0;
				obj.receiveShadow = receiveShadow;
				obj.castShadow = castShadow;
				scene.add(obj);

				obj.traverse(function (child: any) {
					if (child.isMesh) {
						child.castShadow = castShadow;
						child.receiveShadow = receiveShadow;
					}
				});

				resolve(obj);
			},
			undefined,
			function (error: any) {
				console.log(error);
				reject(error);
			}
		);
	});
}

function easeOutCirc(x: number) {
	return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Hoodle = () => {
	const refContainer = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(true);
	const [renderer, setRenderer] = useState(null);

	useEffect(() => {
		const { current: container } = refContainer;
		if (container && !renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;
			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(scW, scH);
			renderer.outputEncoding = THREE.sRGBEncoding;
			container.appendChild(renderer.domElement);
			setRenderer(renderer);

			const scene = new THREE.Scene();
			const scale = 55;
			const camera = new THREE.OrthographicCamera(
				-scale,
				scale,
				scale,
				-scale,
				0.01,
				50000
			);
			const target = new THREE.Vector3(-0.5, 1.2, 0);
			const initialCameraPosition = new THREE.Vector3(
				50 * Math.sin(0.2 * Math.PI),
				100,
				50 * Math.cos(0.2 * Math.PI)
			);
			const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
			scene.add(ambientLight);
			const controls = new OrbitControls(camera, renderer.domElement);
			controls.autoRotate = true;
			controls.target = target;

			loadGLTFModel(scene, HoodieModel, {
				receiveShadow: false,
				castShadow: false
			}).then(() => {
				animate();
				setLoading(false);
			});

			let req: number | null = null;
			let frame = 0;
			const animate = () => {
				req = requestAnimationFrame(animate);
				frame = frame <= 100 ? frame + 1 : frame;

				if (frame <= 100) {
					const p = initialCameraPosition;
					const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

					camera.position.y = 10;
					camera.position.x =
						p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
					camera.position.z =
						p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
					camera.lookAt(target);
				} else {
					controls.update();
				}

				renderer.render(scene, camera);
			};

			return () => {
				cancelAnimationFrame(req || 0);
				renderer.dispose();
			};
		}
	}, [renderer]);

	return (
		<div
			style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "700px", minWidth: "700px", position: "relative" }}
			ref={refContainer}
		>
			{loading && (
				<span style={{ position: "absolute", left: "50%", top: "50%" }}>
					Loading...
				</span>
			)}
		</div>
	);
};

export default Hoodle
