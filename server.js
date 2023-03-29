import express from "express";
import {Worker} from "worker_threads"

let app = express();

app.get('/', (req, res) => {
    res.send("Hi from APP after worker thread")
})

app.get('/slow-loading', (req, res) => {
    const worker = new Worker("./worker-thread.js");
    worker.on('message', (data) => {
        res.status(200).json({data})
    })    
})

app.listen(5000, ()=> {
    console.log("server started on port 5000");
})