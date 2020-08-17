import React, { Component } from 'react';
import { Growl } from '../../components/growl/Growl';
import { FileUpload } from '../../components/fileupload/FileUpload';
import { AppInlineHeader } from '../../AppInlineHeader';
import { FileUploadDoc } from './FileUplodDoc';

export class FileUploadDemo extends Component {

    constructor(props) {
        super(props);

        this.onUpload = this.onUpload.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    }

    onUpload() {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onBasicUpload() {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    onBasicUploadAuto() {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="fileUpload">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <div className="card">
                        <h5>Advanced</h5>
                        <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload} multiple={true} accept="image/*" maxFileSize={1000000}
                            emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />

                        <h5>Basic</h5>
                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />

                        <h5>Basic with Auto</h5>
                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto={true} chooseLabel="Browse" />
                    </div>
                </div>

                <FileUploadDoc />
            </div>
        )
    }
}
