import { Injectable } from '@angular/core';

@Injectable()
// based on https://github.com/firebase/quickstart-js/
export class MessagingService {
  private messaging: firebase.messaging.Messaging;
  private unsubscribeOnTokenRefresh = () => {};
 
  constructor(
    @Inject(FirebaseRef) fb: any,
    private userService: UserService
  ) {
    this.messaging = fb.messaging();
  }
 
  public enableNotifications(): firebase.Thenable<any> {
    console.log('Requesting permission...');
    return this.messaging.requestPermission().then(() => {
        console.log('Permission granted');
        // token might change - we need to listen for changes to it and update it
        this.setupOnTokenRefresh();
        return this.updateToken();
      });
  }
 
  public disableNotifications(): firebase.Thenable<any> {
    this.unsubscribeOnTokenRefresh();
    this.unsubscribeOnTokenRefresh = () => {};
    return this.userService.removeFcmToken().then();
  }
 
  private updateToken(): firebase.Thenable<any> {
    return this.messaging.getToken().then((currentToken) => {
      if (currentToken) {
        // we've got the token from Firebase, now let's store it in the database
        return this.userService.setFcmKey(currentToken);
      } else {
        console.log('No Instance ID token available. Request permission to generate one.');
      }
    });
  }
 
  private setupOnTokenRefresh(): void {
    this.unsubscribeOnTokenRefresh = this.messaging.onTokenRefresh(() => {
      console.log("Token refreshed");
      this.userService.removeFcmToken().then(() => { this.updateToken(); });
    });
  }
    
}