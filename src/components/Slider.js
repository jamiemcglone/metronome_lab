const Slider = ({handleSliderChange},{sliderValue}) => {
    
    return (
        <input onChange={handleSliderChange} type='range' min='400' max='2000' value={sliderValue} />
    );
};

export default Slider;
