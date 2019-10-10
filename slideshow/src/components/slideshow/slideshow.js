import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './slideshow.css';

export default class Slideshow extends Component{
    constructor(props){
        super(props);
        this.state ={
            slideIndex: 0
        }
        const rationWHArray = this.props.ration.split(':');
        this.rationHW = rationWHArray[0]/rationWHArray[1];
        
        this.backward = this.backward.bind(this);
        this.forward = this.forward.bind(this);
        this.setSlideIndex = this.setSlideIndex.bind(this);
        this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.runAuotomatic = this.runAuotomatic.bind(this);
    }

    getNewSlideIndex(step){
        const slideIndex = this.state.slideIndex;
        const numberSlide = this.props.input.length;

        let newSlideIndex = slideIndex + step;

        if(newSlideIndex >= numberSlide) newSlideIndex = 0;
        else if(newSlideIndex < 0) newSlideIndex =numberSlide-1;

        return newSlideIndex;
    }

    backward(){
        this.setState({
            slideIndex: this.getNewSlideIndex(-1)
        });
    }

    forward(){
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        });
    }

    setSlideIndex(index){
        this.setState({
            slideIndex: index
        });
    }

    updateDimensions(){
        this.containerElm.style.height = `${this.containerElm.offsetWidth / this.rationHW}px`;
    }

    runAuotomatic(){
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        });
    }

    componentDidMount(){
        this.rootElm = ReactDOM.findDOMNode(this);
        this.containerElm = this.rootElm.querySelector(".containers");

        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);

        if(this.props.mode ==='automatic'){
            const timeout = this.props.timeout || 5000;

            this.automaticInterval = setInterval(()=>{
                return this.runAuotomatic();
            }, Number.parseInt(timeout))
        }
    }

    componentWillMount(){
        window.removeEventListener('resize', this.updateDimensions);
        if(this.automaticInterval) clearInterval(this.automaticInterval);
    }

    render(){

        return(
            <div className="lp-slideshow">
                <div className="containers">
                    {this.props.input.map((image,index)=>{
                        return (
                            <div key ={index} className={`slide ${this.state.slideIndex === index ? 'active' : '' }`}>
                                <div className="number-text">
                                    {`${index +1} / ${this.props.input.length}`}
                                </div>
                                <img  className ="image" src={image.src} alt={image.caption} />
                                <div className ="caption-text">{image.caption}</div>
                            </div>
                        )
                    })}

                    <span className="prev" onClick={this.backward}>back</span>
                    <span className="next" onClick={this.forward}>next</span>
                </div>
                <div className="dot-containers">
                    {this.props.input.map((____,index)=>{
                        return (
                            <span key ={index} className ={`dot ${this.state.slideIndex === index ? "active": ''}`} onClick={()=>this.setSlideIndex(index)}>
                            </span>
                        )
                    })}
                </div>
            </div>
        );
    }
}
