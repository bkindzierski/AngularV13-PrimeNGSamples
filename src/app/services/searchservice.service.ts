import { Injectable } from '@angular/core';

//
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError, retry, finalize } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
//
import { IBusinessClassData } from '../model/IBusinessClass';

@Injectable({
  providedIn: 'root'
})

export class SearchserviceService {

  //sample data -http://dev-net-brn.mig.local:8001/api/
  //private _url = "./assets/SampleFileLoad.json";
  private _url = 'http://dev-net-brn.MIG.local/RagApiDevDebug/api/BusinessClass';
  
  constructor(private _http: HttpClient) { }

  getSampleData(): Observable<IBusinessClassData[]>{ 
    return this._http.get(this._url)
        .pipe
        (
          map((response: IBusinessClassData[]) => response),
          catchError(this.handleError)
        );
  }

  public getProducts(): Observable<IBusinessClassData[]> {
    return this._http.get<IBusinessClassData[]>(this._url);
}

// public GetQuote(): Observable<IQuote> {
// 	const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'RequestPath': 'GetQuote/',
//         "Access-Control-Allow-Origin": "*"
//       })
//     };		
// 	return this._http.post(this._url + 'ProxyPost', quote, httpOptions)
//           .pipe
//           (
//             retry(3),
//             map((response: IQuote) => response),
//             //tap(data => console.log('getquote? ', JSON.stringify(data))),
//             catchError(this.handleError)
//           );
// }

    //
	private handleError(error: Response) {
		//console.error('handle Error: ', JSON.stringify(error.toString()));
		console.error('handle Error: ' + error.toString());
		return observableThrowError(error.toString() || 'Server error');
	}
}
