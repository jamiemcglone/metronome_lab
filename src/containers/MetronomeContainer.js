import Button from '../components/Button';
import Slider from '../components/Slider';
import { useEffect, useState } from 'react';

const MetronomeContainer = () => {
    const [sliderValue, setSliderValue] = useState(3000);
    const [isPlaying, setIsPlaying] = useState(false);

    
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const cowBell = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/168728/d7f97b29d97bf04b83c4ce86f8972e98e164e41c/mp3/_COWBELL_46.mp3?1669564281")
        if (isPlaying === false) return;
        const interval = setInterval(() => {
            cowBell.play()
        }, parseInt(sliderValue));
        return () => clearInterval(interval);
    }, [isPlaying, sliderValue]);

    return (
        <>
            <Slider handleSliderChange={handleSliderChange} sliderValue={sliderValue} />
            <Button handlePlayPause={handlePlayPause} />
        </>
    );
};

export default MetronomeContainer;
