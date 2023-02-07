export default function PowerButton() {
    return <>

        <mesh
            rotation-x={Math.PI / 2}
            position={[12, -0.225, 9.25]}
        >
            <mesh
                position-y={-0.025}
            >
                <cylinderGeometry args={[0.12, 0.12, 0.05]} />
                <meshStandardMaterial color={"#444"} />
            </mesh>
            <mesh>
                <cylinderGeometry args={[0.1, 0.1, 0.1]} />
                <meshBasicMaterial color={[3, 1, 0.15]} toneMapped={false} />
            </mesh>
        </mesh>
    </>
}