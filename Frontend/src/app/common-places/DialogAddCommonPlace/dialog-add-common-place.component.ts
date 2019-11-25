import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-dialog-add-common-place',
    templateUrl: 'dialog-add-common-place.component.html'
})

export class DialogAddCommonPlaceComponent {
    fileData: File = null;
    previewUrl: any = null;
    images: any[] =[];
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    constructor(public dialogRef: MatDialogRef<DialogAddCommonPlaceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private http: HttpClient) {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }

    onUploadFinish(event) {
        console.log(event);
    }

    onSubmit() {

    }

    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
    }

    preview() {
        // Show preview 
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
            this.images.push(this.previewUrl);
        }
    }

    onImagen(){
        console.log("dsfsfdsd");
    }
}