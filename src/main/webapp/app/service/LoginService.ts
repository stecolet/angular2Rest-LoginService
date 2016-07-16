import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';
import {Configuration} from '../configuration/Configuration'

@Injectable()
export class LoginService {

    private loginActionUrl: string;
    private registerActionUrl: string;
    private getLoggedUsersActionUrl: string;
    private registerUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.loginActionUrl = _configuration.ServerWithApiUrl + '/login';
        this.registerActionUrl = _configuration.ServerWithApiUrl + '/register';
        this.getLoggedUsersActionUrl = _configuration.ServerWithApiUrl + '/loggedUsers';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetLoggedUsers = (): Observable<User[]> => {
        //  var params = new URLSearchParams();
        //  params.set('query', query);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

            return this._http.get(this.getLoggedUsersActionUrl,options)
                .map((response: Response) => <User[]>response.json());
                //.catch(this.handleError);
    }

    public Register = (user:User): Observable<Number> => {
        //  var params = new URLSearchParams();
        //  params.set('query', query);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
         var postParameter:string = JSON.stringify(user);
         console.log('Invoking login service with '+postParameter);
            return this._http.post(this.registerActionUrl,postParameter,options)
                .map((response: Response) => <Number>response.json());
                //.catch(this.handleError);
    }

    public Login = (user:User): Observable<Number> => {
        //  var params = new URLSearchParams();
        //  params.set('query', query);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
         var postParameter:string = JSON.stringify(user);
         console.log('Invoking login service with '+postParameter);
            return this._http.post(this.loginActionUrl,postParameter,options)
                .map((response: Response) => <Number>response.json());
                //.catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
