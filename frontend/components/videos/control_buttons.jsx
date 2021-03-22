import React from 'react';

export const play = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <path className="svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z">
        </path>
    </svg>
</div>

export const pause = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <path className="svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z">
        </path>
    </svg>
</div>

export const skip = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <path className="svg-fill" d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"></path>
    </svg>
</div>

export const muted = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <defs><clipPath id="ytp-svg-volume-animation-mask">
            <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
            <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
            <path className="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                transform="translate(0, 0)"></path></clipPath>
            <clipPath id="ytp-svg-volume-animation-slash-mask">
                <path className="ytp-svg-volume-animation-mover"
                    d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                    transform="translate(0, 0)"></path></clipPath></defs>
        <path className="svg-fill ytp-svg-volume-animation-speaker"
            d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
            fill="#fff" id="ytp-id-14"></path>
        <path className="svg-fill ytp-svg-volume-animation-hider"
            d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" id="ytp-id-15"></path>
    </svg></div>

export const unmuted = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <defs>
            <clipPath id="ytp-svg-volume-animation-mask">
                <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                <path className="ytp-svg-volume-animation-mover"
                    d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                    transform="translate(0, 0)"></path></clipPath>
            <clipPath id="ytp-svg-volume-animation-slash-mask">
                <path className="ytp-svg-volume-animation-mover"
                    d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                    transform="translate(0, 0)"></path></clipPath></defs>
        <path className="svg-fill ytp-svg-volume-animation-speaker"
            d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
            fill="#fff" id="ytp-id-14">
        </path></svg>
</div>

export const settings = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <path className="svg-fill" d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z"></path>
    </svg>
</div>

export const fullscreen = <div className="player-btn">
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <path className="svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
        <path className="svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
        <path className="svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
        <path className="svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
    </svg>
</div>