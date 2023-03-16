import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

 ishide=false;
  
   mp3= new Audio();

   songNum:number=0;

   currentPlay:any;
   now=false;

   songs:any[]=[{src:'assets/audios/song-1.mp3', title:'Song One'},
   {src:'assets/audios/song-2.mp3', title:'Song Two'},
   {src:'assets/audios/song-3.mp3', title:'Song Three'},
   {src:'assets/audios/song-4.mp3', title:'Song Four'},
  { src:'assets/audios/song-5.mp3', title:'Song Five'}
  ]


  listSong(value:number){
    this.currentPlay=this.songs[value].title
    this.ishide=true
this.songNum=value;
    this.mp3.src=this.songs[value].src;
    this.mp3.play()
    this.now=true;
    
  }


  playSong(){
    this.ishide=!this.ishide; 
    this.mp3.src=this.songs[this.songNum].src;
    this.currentPlay=this.songs[this.songNum].title
this.mp3.play();
this.now=true;
    
    
  }

  pauseSong(){
    this.ishide=!this.ishide;
    this.mp3.pause();
    
  }

  previousSong(){
    this.ishide=true
    // this.songNum=this.songNum-=1;
    this.mp3.src=this.songs[this.songNum-=1]['src'];
    this.currentPlay=this.songs[this.songNum].title;
    // console.log('back', this.songNum);
    // console.log(this.mp3);
     this.mp3.play();


  }
   
  nextSong(){
    // this.songNum=this.songNum+=1;
    this.ishide=true
    this.mp3.src=this.songs[this.songNum+=1]['src'];
    this.currentPlay=this.songs[this.songNum].title;
    
     this.mp3.play();
    
    // console.log('next', this.songNum);
    console.log(this.mp3.src);
  }
  


}
