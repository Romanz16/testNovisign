import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/shared/classes/playlist.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  playlist: any =
    '{"screenKey":"0f127773-529f-4ff8-b211-af9e5c22a5bc","breakpointInterval":0,"playlists":[{"channelTime":0,"playlistItems":[{"creativeRefKey":null,"duration":10,"dataSize":586760,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayImage-1518843.jpg","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"b1f1b49b-46b8-49ef-8177-309d28128bf7.jpg","orderKey":0,"eventTypesList":[]},{"creativeRefKey":null,"duration":19,"dataSize":7848203,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"WhatsApp Video 2020-04-20 at 7.44....mp4","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"fbc403c5-e00f-4b35-9c8d-3c83217d3cbd.mp4","orderKey":1,"eventTypesList":[]},{"creativeRefKey":null,"duration":10,"dataSize":443634,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayImage-5098479.jpg","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"df1b9a4b-f5ea-41f0-b778-3aaa1fc19906.jpg","orderKey":2,"eventTypesList":[]},{"creativeRefKey":null,"duration":30,"dataSize":6752046,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayVideo-small-56493.mp4","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"86619515-6aef-4d0e-b2ec-da192c28d38d.mp4","orderKey":3,"eventTypesList":[]}],"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e"}],"modified":1620115851282}';
  sliderIndex: number = 0;

  sliderList: Array<Playlist> = JSON.parse(this.playlist).playlists[0].playlistItems.map((elem:any)=> {let type = elem.creativeKey.substring(elem.creativeKey.indexOf('.') + 1);
    return {duration: elem.duration,creativeKey: elem.creativeKey, url:'https://test.onsignage.com/PlayerBackend/creative/get/'+elem.creativeKey,type: type,};
  });

  public startSlider():void {
    let slides = document.querySelectorAll('#slides .slide');
let currentSlide = this.sliderIndex;
    console.log(this.sliderIndex++);
    
    slides[this.sliderIndex].className = 'slide';
    currentSlide = currentSlide + 1;
    this.sliderIndex++;
    slides[this.sliderIndex].className = 'slide showing';
    setTimeout(this.startSlider, 3000);
  }
  // public startSlider(): void {
  //   console.log(this.sliderIndex);

  //   let slides=document.querySelectorAll('slide');
  //   let count=slides.length;
  //   slides.forEach(function (li) {
  //   //li.style.display = 'none';
  //   });

  //   this.sliderIndex++;
  //   console.log('next' + this.sliderIndex);

  //   if (this.sliderIndex > slides.length) {
  //     this.sliderIndex = 1;
  //   }
  //   //slides[this.sliderIndex - 1].style.display = 'block';

  //   //document.querySelectorAll("slide")[1].style.display="block";
  //   setTimeout(this.startSlider, 3000);
  // }
  constructor() { }


  ngOnInit(): void { setTimeout(this.startSlider, 2000);}
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 2;
//let slideInterval =   setTimeout(startSlider, 0);
// let playlist: any =
//   '{"screenKey":"0f127773-529f-4ff8-b211-af9e5c22a5bc","breakpointInterval":0,"playlists":[{"channelTime":0,"playlistItems":[{"creativeRefKey":null,"duration":10,"dataSize":586760,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayImage-1518843.jpg","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"b1f1b49b-46b8-49ef-8177-309d28128bf7.jpg","orderKey":0,"eventTypesList":[]},{"creativeRefKey":null,"duration":19,"dataSize":7848203,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"WhatsApp Video 2020-04-20 at 7.44....mp4","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"fbc403c5-e00f-4b35-9c8d-3c83217d3cbd.mp4","orderKey":1,"eventTypesList":[]},{"creativeRefKey":null,"duration":10,"dataSize":443634,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayImage-5098479.jpg","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"df1b9a4b-f5ea-41f0-b778-3aaa1fc19906.jpg","orderKey":2,"eventTypesList":[]},{"creativeRefKey":null,"duration":30,"dataSize":6752046,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayVideo-small-56493.mp4","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"86619515-6aef-4d0e-b2ec-da192c28d38d.mp4","orderKey":3,"eventTypesList":[]}],"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e"}],"modified":1620115851282}';
// let sliderIndex: number = 0;
//const sliderList: Array<any>=[{"creativeRefKey":null,"duration":10,"dataSize":586760,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayImage-1518843.jpg","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"b1f1b49b-46b8-49ef-8177-309d28128bf7.jpg","orderKey":0,"eventTypesList":[]},{"creativeRefKey":null,"duration":19,"dataSize":7848203,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"WhatsApp Video 2020-04-20 at 7.44....mp4","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"fbc403c5-e00f-4b35-9c8d-3c83217d3cbd.mp4","orderKey":1,"eventTypesList":[]},{"creativeRefKey":null,"duration":10,"dataSize":443634,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayImage-5098479.jpg","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"df1b9a4b-f5ea-41f0-b778-3aaa1fc19906.jpg","orderKey":2,"eventTypesList":[]},{"creativeRefKey":null,"duration":30,"dataSize":6752046,"expireDate":"9999-12-30 00:00:00","startDate":"0000-00-00 00:00:00","modified":null,"contentModified":null,"startReccurenceTime":null,"expireReccurenceTime":null,"selectedReccurenceDays":null,"collectStatistics":false,"creativeProperties":null,"creativeLabel":"pixabayVideo-small-56493.mp4","ignoreEventsWhilePlaying":false,"playOnlyOnEvent":false,"slidePriority":0,"playlistKey":"22abeab2-9905-452c-b9a6-73d444209a7e","creativeKey":"86619515-6aef-4d0e-b2ec-da192c28d38d.mp4","orderKey":3,"eventTypesList":[]}];




// function startSlider() {
//   console.log(currentSlide);
  
//   slides[currentSlide].className = 'slide';
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].className = 'slide showing';
//   setTimeout(startSlider, 3000);
// }

