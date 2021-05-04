import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            uploadingImage: false,
            next: false,
            movieURL: null,
            moviefile: null,
            title: "",
            description: "",
        };
        this.toggle = this.toggle.bind(this);
        this.display = this.display.bind(this);
        this.firstScreen = this.firstScreen.bind(this);
        this.nextScreen = this.nextScreen.bind(this);
    }

    componentWillUnmount() {
        // this.props.clearErrors();
    }

    toggle() {
        if (!this.props.currentUser) {
            this.props.history.push('/login')
        } else { this.setState({
            hidden: !this.state.hidden
        }) }
    }

    handleFile(e) {
        e.preventDefault();
        const mFile = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                next: true,
                movieURL: fileReader.result,
                moviefile: mFile,
                title: mFile.name.split(".")[0],
            })
        };
        if (mFile) {
            fileReader.readAsDataURL(mFile);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        formData.append('video[description]', this.state.description)
        formData.append('video[uploader_id]', this.props.currentUser.id)
        formData.append('video[moviefile]', this.state.moviefile)
        this.props.postVideo(formData);
    }

    updateTitle(e) {
        this.setState({
            title: e.currentTarget.value,
        })
    }

    updateDescription(e) {
        this.setState({
            description: e.currentTarget.value,
        })
    }

    onDragOver(e) {
        e.preventDefault();
    }
    onDragEnter(e) {
        e.preventDefault();
    }
    onDrop(e) {
        e.preventDefault();
        setTimeout(() => this.setState({ next: true }), 2500);
        const mFile = e.dataTransfer.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                uploadingImage: true, 
                movieURL: fileReader.result,
                moviefile: mFile,
                title: mFile.name.split(".")[0],
            })
        };
        if (mFile) {
            fileReader.readAsDataURL(mFile);
        }
        
    }

    firstScreen(e) {
        return <>
            <div className="uploads-filepicker">

                <input type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    onChange={this.handleFile.bind(this)} />
                <label htmlFor="file">
                    {this.state.uploadingImage ? <img id="upload-animation"
                         src={uploadGoURL}></img> : <img
                        id="upload-animation-static"
                        onDragOver={this.onDragOver.bind(this)}
                        onDragEnter={this.onDragEnter.bind(this)}
                        onDrop={this.onDrop.bind(this)}
                        src={uploadWaitURL}
                        alt="upload" />}
                    
                </label>

                <div className="uploads-dialog">

                    <h4>Drag and drop video files to upload</h4>
                    <p>Your videos will be private until you publish them.</p>

                    <input type="file"
                        name="file"
                        id="file"
                        className="inputfile"
                        onChange={this.handleFile.bind(this)} />
                    <label htmlFor="file">
                        <div className="select-files"> SELECT FILES</div></label>

                </div>
            </div>
            <div className="uploads-footer">
                <p>By submitting your videos to YourTube, you acknowledge that you agree to <span id="blue">YourTube's Terms of Service</span> and <span id="blue">Community Guidelines</span>.</p>
                <p>Please be sure not to violate others' copyright or privacy rights. <span id="blue">Learn more</span></p>
            </div>
        </>
    }

    nextScreen(e) {
        const preview = this.state.movieURL ? <div className="preview"><video
            className="vii-img"
            src={this.state.movieURL}
            muted={true}
            loop={true} /></div> : ""
        const { errors } = this.props;

        return <>
            <h3 id="upload-header">Details</h3>
            <div className="uploads-details">
            <div className="uploads-details-inputs-container">
                <div className="uploads-details-inputs">
                    <div className="upload-input">
                        <input
                            autoFocus
                            id="upload-title"
                            className="upload-text"
                            type="text"
                            placeholder="Add a title that describes your video"
                            value={this.state.title}
                            onChange={this.updateTitle.bind(this)} />
                        <label
                            id="upload-title-label">Title (required)</label>
                    </div>

                    <div className="upload-input">
                        <textarea
                            autoFocus
                            id="upload-description"
                            className="upload-text"
                            type="text"
                            value={this.state.description}
                            placeholder="Tell viewers about your video"
                            onChange={this.updateDescription.bind(this)} />
                        <label
                            id="upload-description-label">Description</label>
                    </div>
                </div>
                <div className="uploads-details-preview">
                    {preview}
                    <div className="preview-details">
                        <span>Filename</span>
                        {this.state.moviefile.name}
                    </div>
                </div>
            </div></div>

            {errors ? errors.map(er => (
                <div className="errors upload-err" key={er.id}><svg className="errors-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
                    </path></svg>{er}</div>
            )) : ""}

            <div className="upload-footer">
                <svg viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                <button type="submit" className="select-files">PUBLISH</button>
            </div>
            
        </>
    }

    display() {
        return <>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="modal">
                <div className="modal-content">
                    <div className="title-row">
                        <span className="x-close" onClick={this.toggle} >&times;</span>
                            <h3>{this.state.next ? this.state.title : "Upload videos"}</h3>
                    </div>
                    {this.state.next ? this.nextScreen() : this.firstScreen()}
                </div>
            </div>
            </form>
        </>
    }

    render() {
        return <>
            <a onClick={this.toggle}>
                <svg viewBox="0 0 24 24" className="hamburger down"
                preserveAspectRatio="xMidYMid meet"
                focusable="false">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
                </svg>
            </a>
            {/* {this.display()} */}
            {this.state.hidden ? "" : this.display()}
        </>
    }
}

export default Modal;