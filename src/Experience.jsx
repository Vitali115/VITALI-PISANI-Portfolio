import React, { useState } from "react";
import {
    Environment,
    useGLTF,
    // OrbitControls, classic View
    Html,
    ContactShadows,
    PresentationControls,
    Text,
    Float,
    // import particles
    Sparkles,
    Center,
    useTexture,


} from '@react-three/drei'
import {
    Noise,
    EffectComposer,
    Glitch,
    Vignette,
    DepthOfField
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Perf } from 'r3f-perf'

export default function Experience() {

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    // Crea uno stato chiamato showText che ha valore iniziale false
    const [showText, setShowText] = useState(false);

    // Crea una funzione chiamata handleClick che cambia il valore di showText da false a true o viceversa
    const handleClick = () => {
        setShowText(!showText);
    };


    const iframeSrcList = [

       'https://codesandbox.io/embed/mystifying-mirzakhani-r3bz7t?fontsize=14&hidenavigation=1&theme=dark',
        // 'https://codesandbox.io/embed/audiopost-io-mg58ms?fontsize=14&hidenavigation=1&theme=dark',
        // 'https://codesandbox.io/embed/chyper-io-pdms1f?fontsize=14&hidenavigation=1&theme=dark'
      ];
      
      const [iframeSrcIndex, setIframeSrcIndex] = useState(0);
    
      const changeIframeSrc = () => {
        const nextIndex = (iframeSrcIndex + 1) % iframeSrcList.length;
        setIframeSrcIndex(nextIndex);
      }



    return <>


        <EffectComposer>

            <Vignette
                offset={0.3}
                darkness={0.9}
                blendFunction={BlendFunction.NORMAL}
            />
            {/* <Glitch
    // delay={[2, 1]}
    // duration={[0.1, 0.5]}
    // strength={[0.1, 0.1]}
  
    /> */}
            <Noise
                blendFunction={BlendFunction.SOFT_LIGHT}
                opacity={0.1}
            />
            <DepthOfField
            focusDistance={0.025}
            focusLength={0.125}
            bokehScale={4}
            
            />
        </EffectComposer>

        {/* <Perf position="top-left" /> */}

        {/* aggiungo l'enviroment */}
        <Environment preset="city" />
        <color args={['#0E0E0E']} attach="background" />



        <PresentationControls

            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mas: 4, tension: 400 }}
        >
            <Float rotateIntensity={0.4} >

                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={15}
                    color={'37E5BE'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}

                />
                <primitive

                    object={computer.scene}
                    position-y={-1.2}
                >

                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >

                        <iframe

sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
src={iframeSrcList[iframeSrcIndex]}



                        ></iframe>
                    </Html>

                </primitive>
                <Text
                    font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                    fontSize={0.5}
                    position={[2, 0.45, 0.15]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign='left'
                >

                    <Html

                        rotation-y={-1.25}
                    >

                        <h1 className='text'  >Downloads<br />
                        </h1>

                    </Html>
                </Text>




                <Text
                    font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                    fontSize={0.5}
                    position={[-3, 1.15, 0.15]}
                    rotation-y={-1.25}


                >

                    <Html

                        rotation-y={-1.25}
                    >

                        <h1 className='text' onClick={handleClick} >Projects<br />
                        </h1>

                    </Html>
                </Text>


                <Text
                    font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                    fontSize={0.5}
                    position={[-2.7, 0.15, -1.35]}
                    rotation-y={-1.25}


                >

                    <Html

                        rotation-y={-1.25}
                    >

                        <h1 className='text' >Blog<br />
                        </h1>

                    </Html>
                </Text>



                {showText ? (
                    <>
                        <Text
                            font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                            fontSize={0.5}
                            position={[-2.6, 1.35, 0.25]}
                            rotation-y={-1.25}
                        >
                            <Html rotation-y={-1.25}>
                                <h1 className="text-1">
                                    <br /><br />
                                    {/* <button>DESIGN</button>
       <button>WEB DEVELOPMENT</button>
       <button>VIDEO</button> */}

                                    <span onClick={handleClick} >X</span>
                                </h1>

                            </Html>
                        </Text>

                        <Text
                            font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                            fontSize={0.5}
                            position={[-2.4, 1.25, 0.45]}
                            rotation-y={-1.25}


                        >

                            <Html

                                rotation-y={-1.25}
                            >

                                <h1 className='text-2' onClick={handleClick} >DESIGN<br />
                                <p>from 2011</p>
                                </h1>

                            </Html>
                        </Text>

                        <Text
                            font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                            fontSize={0.5}
                            position={[-1.7, 1.15, 0.45]}
                            rotation-y={-1.25}


                        >

                            <Html

                                rotation-y={-1.25}
                            >

                                <h1 className='text-2' onClick={handleClick} >WEB DEV<br />
                                <p>from 2021</p>
                                </h1>

                            </Html>
                        </Text>

                        <Text
                            font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                            fontSize={0.5}
                            position={[-0.7, 1.05, 0.45]}
                            rotation-y={-1.25}


                        >

                            <Html

                                rotation-y={-1.25}
                            >

                                <h1 className='text-2' onClick={handleClick} >
                                VIDEO<br />
                                <p>from 2015</p>
                                {/* <img  style={{ width: "300px", height : "auto", borderRadius : "7.5px"}}  src="/video.gif" /> */}
                                {/* <button>guarda i progetti</button> */}
                                </h1>
                                
                            </Html>
                        </Text>

                    </>

                ) : null}


                <Text
                    font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                    fontSize={0.5}
                    position={[2, 0.9, -1]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign='left'
                >

                    <Html

                        rotation-y={-1.25}
                    >

                        <h1 className='text' >Contact me<br />
                        </h1>

                    </Html>
                </Text>


                {/* <Text
                    font="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
                    fontSize={0.5}
                    position={[2.9, -1.9, 0.6]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign='left'
                >

                    <Html

                        rotation-y={-1.25}
                    >

                        <h1 className='text'
                        onClick={changeIframeSrc}
                        >--><br />
                        </h1>

                    </Html>
                </Text> */}

            </Float>


        </PresentationControls>

        <PresentationControls

            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[1, 0.75]}

        >

            <Center>

                <Sparkles
                    size={1}
                    scale={[50, 5, 10]}
                    position-y={1}
                    speed={1}
                    count={50}
                />

                <Sparkles
                    size={1}
                    scale={[50, 7, 10]}
                    position-y={4}
                    speed={2}
                    count={50}
                />

                <Sparkles
                    size={3}
                    scale={[50, 7, 10]}
                    position-y={4}
                    speed={2}
                    count={5}

                // color={'yellow'}
                />
            </Center>

        </PresentationControls>
        <ContactShadows

            position-y={-1.4}
            opacity={0.5}
            scale={5}
            blur={2.4}
        />

    </>
}

