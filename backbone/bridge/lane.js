const { parentPort, workerData, Worker } = require('node:worker_threads')
const dgram = require('node:dgram')


const { data, path } = workerData
const { port, family, hosts } = data

const socket = dgram.createSocket(family)

const relays = hosts.map(host => new Worker(path, { workerData: host }))

let forward = data => {
  relays.forEach(relay => {
    relay.postMessage(data)
  })
}

socket.on('listening', () => {
  let address = socket.address()

  parentPort.postMessage(address)
})

socket.on('message', (data, info) => {

  console.log('receiving', data[0], data[1])
  forward(data)
})

socket.bind(port)