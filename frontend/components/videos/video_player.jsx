import React from 'react';
import { Link } from 'react-router-dom';
import { play, pause, skip, muted, unmuted, settings, fullscreen }from './control_buttons';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paused: true,
            muted: false,
            settings: false,
            fullscreen: false,
            mediaTime: "0:00",
            timeWidth: "",
            duration: false
        };
        this.video = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
        this.toggleMuted = this.toggleMuted.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        this.setTime = this.setTime.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount () {
        this.setTime();
    }

    setTime() {
        const vid = this.video.current;
        let minuteValue = Math.floor(vid.currentTime / 60);
        let seconds = Math.floor(vid.currentTime - minuteValue * 60);
        let secondValue;

        if (seconds < 10) {
            secondValue = '0' + seconds;
        } else {
            secondValue = seconds;
        }

        let dminuteValue = Math.floor(vid.duration / 60);
        let dseconds = Math.floor(vid.duration - dminuteValue * 60);
        let dsecondValue;

        if (dseconds < 10) {
            dsecondValue = '0' + dseconds;
        } else {
            dsecondValue = dseconds;
        }

        let mediaTime = minuteValue + ':' + secondValue;
        let durationTime = dminuteValue + ':' + dsecondValue;
        let barLength = Math.floor((vid.currentTime / vid.duration) * 100) * 0.97 + "%";
        this.setState({ "mediaTime": mediaTime })
        this.setState({ "timeWidth": barLength })
        this.setState({ "duration": durationTime })
    }

    togglePlay() {
        const vid = this.video.current;
        if (vid.currentTime === vid.duration) {
            vid.currentTime = 0;
        }
        if (vid.paused) {
            vid.play();
            this.setState({ paused: false })
        } else {
            vid.pause();
            this.setState({ paused: true })
        }
    }

    reset() {
        this.setState({ paused: true })
    }

    toggleMuted() {
        const vid = this.video.current;
        if (vid.muted) {
            this.setState({ muted: false })
        } else {
            this.setState({ muted: true })
        }
    }

    toggleSettings() {
        // this.video.current.playbackRate = 0.25;
        // this.video.current.playbackRate = 0.5;
        // this.video.current.playbackRate = 0.75;
        // this.video.current.playbackRate = 1;
        // this.video.current.playbackRate = 1.25;
        // this.video.current.playbackRate = 1.5;
        // this.video.current.playbackRate = 1.75;
        if (this.video.current.playbackRate === 2) {
            this.video.current.playbackRate = 1;
        } else {
            this.video.current.playbackRate = 2;
        }
    }

    toggleFullscreen() {
        this.video.current.webkitEnterFullScreen();
    }

    render() {
        const { URL, id } = this.props;
        if (id) {
            return <>
            <div className="player">
                <video custom-attribute={"autoplay"}
                    ref={this.video}
                    src={URL}
                    muted={this.state.muted}
                    onTimeUpdate={this.setTime}
                    onEnded={this.reset}
                    onLoadedData={this.setTime}
                    ></video>
                
                <div className="controls-bar">
                    <div className="time-display-bar-container">
                        <div className="time-display-bar"
                        style={{ width: this.state.timeWidth }}/>
                    </div>
                    {/* <div className="time-display-bar-container">
                        <div className="grey-display-bar"
                        style={{ width: "97%" }}/>
                    </div> */}
                    <div className="controls">
                    <button
                        className="play control-btn"
                        onClick={this.togglePlay}
                        aria-label="play pause toggle"
                        title={this.state.paused ? "Play" : "Pause"}>
                        {this.state.paused ? play : pause}
                    </button>
                    
                    <Link
                        className="skip control-btn"
                        to={`/watch/${parseInt(id) + 1}`}
                        aria-label="next"
                        title="Next"
                        >{skip}</Link>
                    
                    <button
                        className="mute control-btn"
                        onClick={this.toggleMuted}
                        // aria-label="mute"
                        title={this.state.muted ? "Unmute" : "Mute"}>
                        {this.state.muted ? muted : unmuted}
                    </button>

                    <div className="time-display">
                        <span className="ytp-time-current">{this.state.mediaTime}</span>
                        <span className="ytp-time-separator"> / </span>
                        <span className="ytp-time-duration">{this.state.duration}</span>
                    </div>

                    <button
                        className="set control-btn"
                        onClick={this.toggleSettings}
                        // aria-label="settings"
                        title="Settings">
                        {settings}
                    </button>
                    
                    <button
                        className="fscn control-btn"
                        onClick={this.toggleFullscreen}
                        // aria-label="fullscreen"
                        title="Full screen">
                        {fullscreen}
                    </button>
                    </div>
                </div>
            </div>
        </>
        }
        
    }
}

export default VideoPlayer;