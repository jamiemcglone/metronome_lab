

const Slider = ({handleSliderChange},{sliderValue}) => {
    
    return (
        <input onChange={handleSliderChange} type='range' min='1000' max='10000' value={sliderValue} />
    );
};

export default Slider;
