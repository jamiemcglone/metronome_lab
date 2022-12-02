import { useEffect, useState, useRef } from 'react';
import Button from '../components/Button';
import Slider from '../components/Slider';
import BeatsCounter from '../components/BeatsCounter';
import Animation from '../components/Animation';

const MetronomeContainer = () => {
    const [sliderValue, setSliderValue] = useState(1200);
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(null);

    // Slider value handler
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };
    /// playPause handler function
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const playSound = () => {
        soundRef.current.currentTime = 0;
        soundRef.current.play();
    };

    useEffect(() => {
        console.log('playButton clicked');
        if (isPlaying)
            // condition the function to fire if the state of isPlaying is true before the set interval to prevent empty time
            playSound();
        else return;
        const interval = setInterval(() => {
            playSound();
        }, sliderValue);
        return () => clearInterval(interval); // clear the interval
    }, [isPlaying, sliderValue]);

    return (
        <>
            <BeatsCounter sliderValue={parseInt(60000 / sliderValue)} />
            <Slider handleSliderChange={handleSliderChange} sliderValue={sliderValue * 1000} />
            <Button handlePlayPause={handlePlayPause} />
            <Animation sliderValue={sliderValue} isPlaying={isPlaying} />
            <audio
                ref={soundRef}
                src='https://d9olupt5igjta.cloudfront.net/samples/sample_files/168728/d7f97b29d97bf04b83c4ce86f8972e98e164e41c/mp3/_COWBELL_46.mp3?1669564281'
            />
        </>
    );
};

export default MetronomeContainer;
