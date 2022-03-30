import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  selectedImage: any = null;
  imageUrl: any = null;
  check = false;
  ref: AngularFireStorageReference | any;
  @Output()
  giveUrl = new EventEmitter();

  constructor(
    private storage: AngularFireStorage,
  ) {
  }

  ngOnInit(): void {
  }

  // //uploadfile len fire base va nhan url tra ve
  // uploadFile() {
  //   // @ts-ignore
  //   if (this.selectedImage != null) {
  //
  //     this.check = true;
  //     const x = () => {
  //
  //     }
  //     const filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  //     const fileRef = this.storage.ref(filePath);
  //     this.storage.upload(filePath, this.selectedImage).snapshotChanges()
  //       .pipe(finalize(() => {
  //         fileRef.getDownloadURL().subscribe(url => {
  //           this.check = false;
  //           this.imageUrl = url;
  //           console.log(url);
  //           this.giveUrl.emit(url)
  //         })
  //       })).subscribe();
  //
  //
  //   }
  // }
  upload(): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(id);

    // @ts-ignore
    this.ref.put(this.selectedImage).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then((url: any) => {
      this.imageUrl = url;
      this.giveUrl.emit(url);
    });
  }

  // Show preview
  // @ts-ignore
  showPreview(event): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imageUrl = event.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.upload();
    }
    //  truong hop nhan choosefile nhung k chon anh va cancel
    else {
      this.selectedImage = null;

    }
  }

}
