module.exports = {
  port: 12345,
  family: 'udp4',
  path: {
    lane: './lane.js',
    relay: './relay.js'
  },

  channels: [
    {
      id: 'channel 0',

      lanes: [
        {
          id: 0,
          port: 12345,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 22345,
              family: 'udp4'
            },
            {
              address: 'localhost',
              port: 22346,
              family: 'udp4'
            }
          ]
        },
        {
          id: 1,
          port: 12346,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 22347,
              family: 'udp4'
            },
            {
              address: 'localhost',
              port: 22348,
              family: 'udp4'
            }
          ]
        }
      ]
    },

    {
      id: 'channel 1',

      lanes: [
        {
          id: 0,
          port: 12347,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 22349,
              family: 'udp4'
            },
            {
              address: 'localhost',
              port: 22350,
              family: 'udp4'
            }
          ]

        },
        {
          id: 1,
          port: 12348,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 22351,
              family: 'udp4'
            },
            {
              address: 'localhost',
              port: 22352,
              family: 'udp4'
            }
          ]
        }
      ]
    },
    {
      id: 'channel 2',

      lanes: [
        {
          id: 0,
          port: 12349,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 22353,
              family: 'udp4',
            },
            {
              address: 'localhost',
              port: 22354,
              family: 'udp4'
            }
          ]

        },
        {
          id: 1,
          port: 12350,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 22355,
              family: 'udp4'
            },
            {
              address: 'localhost',
              port: 22356,
              family: 'udp4'
            }
          ]
        }
      ]
    }
  ]
}