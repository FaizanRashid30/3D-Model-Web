import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Camera from "./Camera";
import Backdrop from "./Backdrop";
import Animator from "./Animator";

const CanvasModel = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<Environment preset="city" />
			<Camera>
				{/* <Backdrop /> */}
				<Center>
					<Animator />
				</Center>
			</Camera>
		</Canvas>
	);
};

export default CanvasModel;
