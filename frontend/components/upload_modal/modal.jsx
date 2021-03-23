import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from 'react-router-dom';

class Modal extends React.Component {
    constructor({props}) {
        super(props)
        this.state = {
            hidden: true,
            file: null,
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

    handleFile(e) {
        this.setState({file: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append(video[file], this.state.file)
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    display() {
        return <>
            <form>
            <div className="modal">
                <div className="modal-content">
                    <div className="title-row">
                        <span className="x-close" onClick={this.toggle} >&times;</span>
                        <h3>Upload videos</h3>
                    </div>
                    <div className="uploads-filepicker">
                        <input type="file" name="file" id="file" className="inputfile" />
                        <label for="file"><img src={uploadURL} alt="upload" /></label>
                        <div className="uploads-dialog">
                            <h4>Drag and drop video files to upload</h4>
                            <p>Your videos will be private until you publish them.</p>
                        <input type="file" name="file"
                                id="file" className="inputfile"
                                onChange={this.handleFile.bind(this)}/>
                        <label for="file"><div className="select-files"> SELECT FILES</div></label>
                        </div>
                    </div>
                    <div className="uploads-details">
                        <p>By submitting your videos to YourTube, you acknowledge that you agree to <span id="blue">YourTube's Terms of Service</span> and <span id="blue">Community Guidelines</span>.</p>
                        <p>Please be sure not to violate others' copyright or privacy rights. <span id="blue">Learn more</span></p>
                    </div>
                </div>
            </div>
            </form>
        </>
    }

    render() {
        return <>
            <a onClick={this.toggle}>
                <FontAwesomeIcon
                    className="icon"
                    icon={['fa', 'video']} />
            </a>
            {/* {this.display()} */}
            {this.state.hidden ? "" : this.display()}
        </>
    }
}

export default Modal;