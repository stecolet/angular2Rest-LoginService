import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:8080";
    public ApiUrl: string = "/colettaAssessment-0.0.1-SNAPSHOT/loginRest";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
