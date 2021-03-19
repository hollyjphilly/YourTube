import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from 'react-router-dom';

class Modal extends React.Component {
    constructor({props}) {
        super(props)
        this.state = {
            hidden: true,
        };
        this.toggle = this.toggle.bind(this);
        this.display = this.display.bind(this);
    }

    toggle() {
        if (!this.props.currentUser) {
            this.props.history.push('/login')
        } else { this.setState({
            hidden: !this.state.hidden
        }) }
    }

    display() {
        return <>
            <div className="modal">
                <div className="modal-content">
                    <div className="title-row">
                        <span className="x-close" onClick={this.toggle} >&times;</span>
                        <h3>Upload videos</h3>
                    </div>
                    <div className="uploads-filepicker">
                        <img src={uploadURL} alt="upload" />
                        <div className="uploads-dialog">
                            <h4>Drag and drop video files to upload</h4>
                            <p>Your videos will be private until you publish them.</p>
                            <button className="select-files"> SELECT FILES</button>
                        </div>
                    </div>
                    <div className="uploads-details">
                        <p>By submitting your videos to YourTube, you acknowledge that you agree to <span id="blue">YourTube's Terms of Service</span> and <span id="blue">Community Guidelines</span>.</p>
                        <p>Please be sure not to violate others' copyright or privacy rights. <span id="blue">Learn more</span></p>
                    </div>
                </div>
            </div>
        </>
    }

    render() {
        return <>
            <a onClick={this.toggle}>
                <FontAwesomeIcon
                    className="icon"
                    icon={['fa', 'video']} />
            </a>
            {this.state.hidden ? "" : this.display()}
        </>
    }
}

export default Modal;