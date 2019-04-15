importScripts('./ngsw-worker.js')
const worker = self;

worker.onmessage = (event) => {
    console.log("rcvd at servce ", event)
    
    worker.postMessage("send bac from servce worer");
};