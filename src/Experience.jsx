import { PresentationControls, Environment, BakeShadows, CameraControls, ContactShadows, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { AmbientLight, DirectionalLightHelper } from 'three'
import { useControls, button } from 'leva'
import { useThree } from '@react-three/fiber'
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import Platform from './Platform/0 - Platform.jsx'
import Cubes from './Cubes/Cubes.jsx'

export default function Experience() {

    // Directional light Helper and controlers
    // const directLight = useRef()
    // useHelper(directLight, DirectionalLightHelper, 1)
    const { position, target, intensity } = useControls('DirectLight', {
        position: { x: 1, y: 1, z: -1 },
        target: { x: 0, y: 0, z: 0 },
        intensity: 2
    })

    const gl = useThree((state) => state.gl)
    useControls({
        screenshot: button(() => {
            const link = document.createElement('a')
            link.setAttribute('download', 'canvas.png')
            link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
            link.click()
        })
    })

    return <>

        {/* <Perf position="top-left" /> */}

        <EffectComposer
            multisampling={4} //default 8
        >
            <Bloom
                mipmapBlur
                luminanceThreshold={0.9} //default 0.9
                intensity={2}
            />
        </EffectComposer>

        {/* <Environment preset='city' /> */}

        {/* <directionalLight
            position={[0.3, 0.9, 1]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[512, 512]}
            shadow-camera-near={0.01}
            shadow-camera-far={12}
            shadow-camera-top={3}
            shadow-camera-right={2}
            shadow-camera-bottom={- 2}
            shadow-camera-left={-2}
            shadow-bias={0.001}
        /> */}

        <directionalLight
            // ref={directLight}
            position={[1, 1, -1]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0.01}
            shadow-camera-far={12}
            shadow-camera-top={3}
            shadow-camera-right={2}
            shadow-camera-bottom={- 2}
            shadow-camera-left={-2}
            shadow-bias={0.0001}
            target-position={[0, 0, 0]}
        />
        <directionalLight
            // ref={directLight}
            position={[-2, 0, 0.5]}
            intensity={0.7}
            castShadow
            shadow-mapSize={[256, 256]}
            shadow-camera-near={0.01}
            shadow-camera-far={12}
            shadow-camera-top={3}
            shadow-camera-right={2}
            shadow-camera-bottom={- 2}
            shadow-camera-left={-2}
            shadow-bias={0.0001}
            target-position={[0, 0, 0]}
        />

        <directionalLight
            // ref={directLight}
            position={[0, 0.1, 1]}
            intensity={0.1}
            castShadow
            shadow-mapSize={[512, 512]}
            shadow-camera-near={0.01}
            shadow-camera-far={12}
            shadow-camera-top={3}
            shadow-camera-right={2}
            shadow-camera-bottom={- 2}
            shadow-camera-left={-2}
            shadow-bias={0.001}
            target-position={[0, 0, 0]}
        />

        <directionalLight
            // ref={directLight}
            position={[0, 1, 0]}
            intensity={0.2}
            castShadow
            shadow-mapSize={[512, 512]}
            shadow-camera-near={0.01}
            shadow-camera-far={12}
            shadow-camera-top={3}
            shadow-camera-right={2}
            shadow-camera-bottom={- 2}
            shadow-camera-left={-2}
            shadow-bias={0.0001}
            target-position={[0, 0, 0]}
        />

        <ambientLight intensity={0.3} />

        <ContactShadows opacity={0.5} />

        <mesh
            position-y={-0.1}
            rotation-x={-Math.PI / 2}
            castShadow
            receiveShadow
            visible={false}
        >
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color="#000000" />
        </mesh>

        {/* <BakeShadows /> */}

        <CameraControls />

        {/* <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-1, 0.4]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 200 }}
        // snap={{ mass: 4, tension: 400 }}
        > */}

        <mesh
            // rotation-x={Math.PI / 8}
            scale={0.1}
            position={[-0.95, 0.35, -0.4]}
        >

            <Platform />

            <Cubes />

        </mesh>
        {/* </PresentationControls> */}
    </>
}