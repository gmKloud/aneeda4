import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private speech: SpeechRecognition, public navCtrl: NavController) {

  }

  async isSpeechSupported():Promise<boolean> {
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }

}
