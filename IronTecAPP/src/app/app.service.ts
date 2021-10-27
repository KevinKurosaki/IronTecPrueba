// import built-in and third party modules by Node.js
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {
    constructor (private http: HttpClient, private router: Router) {
    }

    //Observer for fetch github issue data API call.
    subjectData = new Subject<number>();

    //Notify changes for fetchData API call.
    data$ = this.subjectData.asObservable();
    // Notifier code for any change detected  and rejected by any subect
    readonly successNotifier: number = 200;
    readonly failureNotifier: number = 404;
    //Observer for loading notifier
    private subjectIsDataLoading = new Subject<boolean>();
    
    //Notify changes for a loading notifier.
    
    isDataLoading$ = this.subjectIsDataLoading.asObservable();
    private isExternDataLoading: boolean = false;
    data = [];
    // route changed
    routeChange: boolean = false;
    dataNotFound: string = '';

    /**
     * @param {boolean} isDataLoading Notifier value to set
     */
    updateGlobalNotifier(isDataLoading: boolean): void {
        this.isExternDataLoading = isDataLoading;
        this.subjectIsDataLoading.next(isDataLoading);
    }

    /**
     * Make an API request to fetch data
     * @param {any} payload of user data
     */
    fetchData (payload: any): void {
        // notify other components
        this.subjectIsDataLoading.next(true);
        // make http request
        this.http.get("https://api.github.com/repos/"+payload.usrName + "/" + payload.repoName + "/issues?page=" + payload.pageNo + "&per_page=" + payload.pageCount + "&state=all")
            .subscribe(
            (res: any) => {
                // assign reports from response to local variable in context
                if(this.data.length == 0) {
                    this.data = res;
                    this.router.navigateByUrl('/data');
                } else if (this.data.length > 0){
                    this.data = this.data.concat(res);
                }
                this.routeChange = true;
                // send success via broadcast to notify other components
                this.subjectData.next(this.successNotifier);
                // notify other components
                this.subjectIsDataLoading.next(false);
            },
            (err: number) => {
                this.data = [];
                this.dataNotFound = "Data not found please check user name or repository name";
                this.router.navigateByUrl('/data');
                // notify other components
                this.subjectIsDataLoading.next(false);
                // send failure via broadcast to notify other components
                this.subjectData.next(this.failureNotifier);
            }
        );
    }
}