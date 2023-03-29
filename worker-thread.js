import { parentPort } from 'worker_threads'

for(var i = 0; i < 500000000; i++) {

}

parentPort.postMessage(i)