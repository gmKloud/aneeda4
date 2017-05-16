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

  async getPermission():Promise<void> {
    try {
        const permission = this.speech.requestPermission()
        console.log(permission);
        return permission;
      }
      catch(e) {
        console.log(e);
    }
  }

}
