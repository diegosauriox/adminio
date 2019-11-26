import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Implemento } from "../common-places.component";

@Component({
    selector: 'app-dialog-add-common-place',
    templateUrl: 'dialog-add-common-place.component.html'
})

export class DialogAddCommonPlaceComponent implements OnInit {
    fileData: File = null;
    previewUrl: any = null;
    images: any[] =[];
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    formAddCommonPlace: FormGroup;
    implements: Implemento[] = [] ;
    constructor(public dialogRef: MatDialogRef<DialogAddCommonPlaceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private http: HttpClient) {
    }

    ngOnInit() {
        this.formAddCommonPlace = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            cantidad: new FormControl('100',[Validators.required]),
            descripcion: new FormControl('',[Validators.required])
        })
    }
    onNoClick(): void {
        this.dialogRef.close();
    }

    onUploadFinish(event) {
        console.log(event);
    }

    onSubmit() {

    }

    createCommonPlace(commonPlace) {
        if (this.formAddCommonPlace.valid) {
          this.executeCreateCommonPlace(commonPlace);
        }
      }
    
      hasError(controlName: string, errorName){
        return this.formAddCommonPlace.controls[controlName].hasError(errorName);
      }
    
      executeCreateCommonPlace(commonPlace){
        console.log(commonPlace);
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

    addImplement() {
        console.log(this.implements.length);
        const newProperty = {} as Implemento;
        newProperty.id = this.implements.length + 1;
        this.implements.push({
          id: newProperty.id,
          nombre: newProperty.nombre,
          cantidad: newProperty.cantidad,
        })
      }

      deleteImplement(id: number) {
        const new_implements: Implemento[] = [];
        let j = 0;
        for ( let i = 0; i < this.implements.length; i++) {
          if ( this.implements[i].id !== id) {
            j = j + 1;
            this.implements[i].id = j;
            new_implements.push(this.implements[i]);
          }
        }
        this.implements = new_implements;
      }
}