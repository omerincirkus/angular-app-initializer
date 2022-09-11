import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _data: IUserData = {
    name: 'guest',
    avatar: 'assets/jiu.jpeg'
  }

  get data(): IUserData {
    return this._data
  }

  constructor(private http: HttpClient) {
  }

  public loadData(): Observable<IUserData> {
    return this.http.get<IUserData>('./assets/user.json')
      .pipe(
        delay(500),
        tap((response: IUserData) => this._data = response)
      );
  }

  // public loadData(): Observable<IUserData> {
  //   return iif(
  //     () => this.authService.isLoggedIn,
  //     this.http.get<IUserData>('./assets/user.json'),
  //     of({name: 'guest', avatar: 'assets/no-avatar.png'})
  //   ).pipe(
  //     tap((output: IUserData) => this._data = output),
  //   );
  // }
}

export interface IUserData {
  name: string,
  avatar: string
}
