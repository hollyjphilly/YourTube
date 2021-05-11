import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { play, pause, skip, mutedIcon, unmuted, settings, fullscreen }from './control_buttons';

function VideoPlayer(props) {
    const { URL, id, max } = props;

    const [paused, setPaused] = useState(false)
    const [muted, setMuted] = useState(false)
    const [mediaTime, setMediaTime] = useState("0:00")
    const [timeWidth, setTimeWidth] = useState("")
    const [duration, setDuration] = useState("0:00")
    const video = useRef(null)

    useEffect(()=>{
        setTime()
        setPaused(false)
    }, [id])

    function setTime() {
        const vid = video.current;
        const times = [vid.currentTime, vid.duration];

        const timestamps = times.map(time => {
            let minuteValue = Math.floor(time / 60);
            let seconds = Math.floor(time - minuteValue * 60);
            let secondValue;
        
            if (seconds < 10) {
                secondValue = '0' + seconds;
            } else {
                secondValue = seconds;
            }

            return minuteValue + ':' + secondValue
        })
    
        setMediaTime(timestamps[0]);
        setDuration(timestamps[1]);
        setTimeWidth(Math.floor((vid.currentTime / vid.duration) * 100) * 0.97 + "%");
    }

    function togglePlay() {
        const vid = video.current;
        if (vid.currentTime === vid.duration) {
            vid.currentTime = 0;
        }
        if (vid.paused) {
            vid.play();
            setPaused(false)
        } else {
            vid.pause();
            setPaused(true)
        }
    }

    function reset() {
        setPaused(true)
    }

    function toggleMuted() {
        const vid = video.current;
        if (vid.muted) {
            setMuted(false)
        } else {
            setMuted(true)
        }
    }

    function toggleSpeed() {
        if (video.current.playbackRate === 2) {
            video.current.playbackRate = 1;
        } else {
            video.current.playbackRate = 2;
        }
    }

    function toggleFullscreen() {
        video.current.webkitEnterFullScreen();
    }

    
    if (id) {
        return <>
        <div className="player">
            <video
                autoPlay
                ref={video}
                src={URL}
                muted={muted}
                onTimeUpdate={setTime}
                onEnded={reset}
                onLoadedData={setTime}
                ></video>
            
            <div className="controls-bar">
                <div className="time-display-bar-container">
                    <div className="time-display-bar"
                    style={{ width: timeWidth }}/>
                </div>
                {/* <div className="time-display-bar-container">
                    <div className="grey-display-bar"
                    style={{ width: "97%" }}/>
                </div> */}
                <div className="controls">
                <button
                    className="play control-btn"
                    onClick={togglePlay}
                    aria-label="play pause toggle"
                    title={paused ? "Play" : "Pause"}>
                    {!paused ? pause : play}
                </button>
                
                <Link
                    className="skip control-btn"
                    to={`/watch/${(parseInt(id) === max) ? 1 : (parseInt(id) + 1)}`}
                    aria-label="next"
                    title="Next"
                    >{skip}</Link>
                
                <button
                    className="mute control-btn"
                    onClick={toggleMuted}
                    // aria-label="mute"
                    title={muted ? "Unmute" : "Mute"}>
                    {muted ? mutedIcon : unmuted}
                </button>
    
                <div className="time-display">
                    <span className="ytp-time-current">{mediaTime}</span>
                    <span className="ytp-time-separator"> / </span>
                    <span className="ytp-time-duration">{duration}</span>
                </div>
    
                <button
                    className="set control-btn"
                    onClick={toggleSpeed}
                    // aria-label="settings"
                    title="Speed">
                    {settings}
                </button>
                
                <button
                    className="fscn control-btn"
                    onClick={toggleFullscreen}
                    // aria-label="fullscreen"
                    title="Full screen">
                    {fullscreen}
                </button>
                </div>
            </div>
        </div>
    </>
    } else {
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    }
}

export default VideoPlayer;