import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Headers, RequestOptions, Response} from '@angular/http';

import { AvatarService } from './avatar.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  providers: [AvatarService]
})
export class AvatarComponent implements OnInit {
  @Input() avatarUrl: string;
  @Output() updateAvatar = new EventEmitter();

  // avatarUrl: string = '../../../assets/images/ava.jpg';
  file: File;

  constructor(
    private avatarService: AvatarService
  ) { }

  ngOnInit() {
  }

  fileChange(input) {
    let reader = new FileReader();
    let index = 0;

    if(input.files[0]) {
      reader.onload = () => {
        this.file = reader.result;
        this.avatarUrl = reader.result;
        // this.save();
        this.updateAvatar.emit(this.avatarUrl);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  save() {
    if (this.file) {
      let file: File = this.file;
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
      let options = new RequestOptions({ headers: headers });
      this.avatarService.save(formData).subscribe(
          (data) => this.onSuccess(data),
          (data) => this.onError(data)
        );
    }
  }

  onSuccess(result) {
    // update account avatar
    // emit to profile-detail file object
    return 0;
  }

  onError(error) {
    return 0;
  }


}
