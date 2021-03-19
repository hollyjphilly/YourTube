import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paused: true,
            muted: false,
            settings: false,
            fullscreen: false,
        }
        this.paused = true;
        this.video = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
        this.toggleMuted = this.toggleMuted.bind(this);
    }

    togglePlay(e) {
        const vid = this.video.current;
        if (vid.paused) {
            vid.play();
            this.setState({ paused: false })
        } else {
            vid.pause();
            this.setState({ paused: true })
        }
    }

    toggleMuted(e) {
        const vid = this.video.current;
        if (vid.muted) {
            this.setState({ muted: false })
        } else {
            this.setState({ muted: true })
        }
    }

    render() {
        const { URL } = this.props;
        const { muteattr } = this.state;
        const play = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'play']} />;
        const pause = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'pause']} />;
        const skip = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'step-forward']} />;
        const muted = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'volume-mute']} />;
        const unmuted = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'volume-down']} />;
        const settings = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'cog']} />;
        const fullscreen = <FontAwesomeIcon className="player-btn" 
                                      icon={['fa', 'expand']} />;
        return <>
            <div className="player">
                <video ref={this.video} src={URL} muted={this.state.muted}></video>
                <div className="controls">
                    <button
                        className="play"
                        onClick={this.togglePlay}
                        aria-label="play pause toggle">{this.state.paused ? play : pause}</button>
                    <button
                        className="mute"
                        onClick={this.toggleMuted}
                        aria-label="mute">{this.state.muted ? muted : unmuted}</button>
                    <div className="timer">
                        <div></div>
                        <span aria-label="timer">00:00</span>
                    </div>
                    <button
                        className="set"
                        onClick={this.toggleSettings}
                        aria-label="settings">{settings}</button>
                    <button
                        className="fscn"
                        onClick={this.toggleFullscreen}
                        aria-label="fullscreen">{fullscreen}</button>
                </div>
            </div>
        </>
    }
}

export default VideoPlayer;