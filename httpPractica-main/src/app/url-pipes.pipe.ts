import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlPipes'
})
export class UrlPipesPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value: string) {
    const Base : string = value.split('/')[2];
    const id : string = value.split('=')[1];
    const LinkVideo : string ="https://"+Base+"/embed/"+id;

    return this.sanitizer.bypassSecurityTrustResourceUrl(LinkVideo);
  }

}
