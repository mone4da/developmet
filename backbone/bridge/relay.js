const { parentPort, workerData } = require('node:worker_threads')
const dgram = require('node:dgram')

const { port, host, family } = workerData

const socket = dgram.createSocket(family)
socket.connect(port, host)

parentPort.on('message', data => {
  console.log('forwarding', data)
  socket.send(data)
})


console.log('relay ready')