import { Component } from '@angular/core';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';
import { NavController, Platform } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  speechPercept: Array<string> = [];
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;

  constructor(private speech: SpeechRecognition, public navCtrl: NavController, private platform: Platform) {

  }

  listenForSpeech():void {

    this.androidOptions = {
      prompt: "Aneeda..."
    }

    this.iosOptions = {
      language: "en-US"
    }

    if(this.platform.is('android')) {
      this.speech.startListening(this.androidOptions).subscribe(data => this.speechPercept = data, errors => console.log(errors))
    }
    else if (this.platform.is('ios')) {
      this.speech.startListening(this.iosOptions).subscribe(data => this.speechPercept = data, errors => console.log(errors))
    }
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

  async hasPermission():Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission()
      console.log(permission);
      return permission;
    }
    catch(e) {
      console.log(e);
    }
  }

  async getSupportedLang():Promise<Array<string>> {
    try {
      const languages = await this.getSupportedLang();
      console.log(languages);
      return languages;
    }
    catch(e) {
      console.log(e);
    }
  }

  }
