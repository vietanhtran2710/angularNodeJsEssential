import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fileService: FileService) {

  }

  title = 'client';
  file: File | undefined;
  chosen: boolean = false;

  fileChosen(event: any) {
    if (event.target.value) {
      this.file = <File>event.target.files[0];
      this.chosen = true;
    }
  }

  submit() {
    console.log(this.file);
    let formData = new FormData();
    if (this.file) {
      formData.append('file', this.file, this.file.name);
      this.fileService.uploadFile(formData).subscribe(
        result => {
          console.log(result);
        }
      )
    }
  }

}
