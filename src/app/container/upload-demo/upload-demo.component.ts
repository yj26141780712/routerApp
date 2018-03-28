import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
 
// const URL = '/api/';
const URL = 'http://localhost:3000/api'; 

@Component({
  selector: 'app-upload-demo',
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.css']
})
export class UploadDemoComponent  {
  public uploader:FileUploader = new FileUploader({url: URL, method: "POST"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    console.log(e); 
    this.hasBaseDropZoneOver = e;
  }
  public fileOverAnother(e:any):void {
    console.log(e);
    this.hasAnotherDropZoneOver = e;
  }

   constructor(){

   }
}
