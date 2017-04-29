import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

const api = 'https://angular-http-test-5decd.firebaseio.com';

@Injectable()
export class ServerService {

	constructor(private http: Http) {}

	storeServers(servers: any[]) {
		const headers = new Headers({
			'Content-Type': 'application/json' // this is the default, JUST A DEMONSTRATION!
		});
		// return this.http.post(api + '/data.json', servers, { headers });
		return this.http.put(api + '/data.json', servers, { headers });
	}

	getServers() {
		return this.http.get(api + '/data')
			.map(
				(response: Response) => {
					const data = response.json();
					for (const server of data) {
						server.name = 'FETCH_' + server.name;
					}
					return data;
				}
			)
			.catch(
				(error: Response) => {
					//console.log(error);
					return Observable.throw('Something went wrong');
				}
			);
	}

	getAppName() {
		return this.http.get(api + '/appName.json')
			.map(
				(response: Response) => {
					return response.json();
				}
			);
	}
}
