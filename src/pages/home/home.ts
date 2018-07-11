import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sofia;
  score= 0;
  answer:string;
  value:number;
  poppy;
  mark;
  william;
  seven;
  six;
  four;
  three;
  negro;
  david;
  livo;
  scampo;
  treeygen;
  fango;
  fungi;
  kanyan;
  nigerian;
  winnie;
  matilda;
  thabo;
  macklay;
  israel;
  moza;
  nig;
  sms;
  short;
  martin;
  moses;
  maria;
  name;
  constructor(public navCtrl: NavController) {
 this.value = 0;
  }
  onanswers() {
    this.value = 1;
console.log(this.score)

 if(this.sofia === 'Sofia'){
   this.score = this.score +=1;
   this.answer= 'Sofia';
   console.log("-----------> sofia "+this.sofia);
 }
 else{
   this.poppy = 'Sofia';
   
 }
 if(this.mark){
  this.score = this.score +=1;
  this.answer= 'mark';
}
else{
  this.william = 'mark';

}  
if(this.seven){
  this.score = this.score +=1;
  this.answer= '7';
  
}
else{
  this.six = '7';
  
}
if(this.four){
  this.score = this.score +=1;
  this.answer= 'Four';
}
else{
  this.three = 'Four';
  
}
if(this.david){
  this.score = this.score +=1;
  this.answer= 'david';
}
else{
  this.negro = 'david';
  
}
if(this.nig){
  this.score = this.score +=1;
  this.answer= 'nig';
}
else{
  this.livo = 'nig';
  
  
}
if(this.scampo){
  this.score = this.score +=1;
  this.answer= 'scampo';
}
else{
  this.treeygen= 'scampo';
  
}
if(this.fungi){
  this.score = this.score +=1;
  this.answer= 'fungi';
}
else{
  this.fango= 'fungi';
  
  
if(this.kanyan){
  this.score = this.score +=1;
  this.answer= 'kanyan';
}
else{
  this.nigerian= 'kanyan';
  
}
if(this.sms){
  this.score = this.score +=1;
  this.answer= 'short message service';
}
else{
  this.short= '';
  

if(this.winnie){
  this.score = this.score +=1;
  this.answer= 'winnie';
}
else{
  this.matilda= 'winnie';
  

}
if(this.david){
  this.score = this.score +=1;
  this.answer= 'david';
}
else{
  this.thabo= 'david';
  
}
if(this.macklay){
  this.score = this.score +=1;
  this.answer= 'mackaly';
}
else{
  this.martin= 'mackalay';
  
}
if(this.moza){
  this.score = this.score +=1;
  this.answer= 'moza';
}
else{
  this.israel= 'moza';
  
}
if(this.maria){
  this.score = this.score +=1;
  this.answer= 'maria';
}
else{
  this.moses= 'maria';
  
}
}}
  }}
  
