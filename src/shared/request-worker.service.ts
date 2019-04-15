import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RequestsWorker {

    requests = {};
    requestsCounter = 0;
    worker = new Worker("./sw-custom.js");

    constructor() {


        //this.receive = this.receive.bind(this);
        //this.send = this.send.bind(this);

        this.worker.onmessage = this.receive;
    }

    send(args) {
        const id = `request-${this.requestsCounter++}`;

        return new Promise((resolve, reject) => {
            this.requests[id] = ({ data, error }) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(data);
            };
            console.log("entered request worer", args)
            this.worker.postMessage({ id, data: args })
        });
    }

    receive(event) {
        const { id, data, error } = event.data;
        console.log("rcvd from sw", event)
        if (typeof this.requests[id] === "function") {
            this.requests[id]({ data, error });
            console.log("--->----")
            delete this.requests[id];
        }
    }
}