# Wormhole

::: warning
This documentation is in progress.
:::

A wormhole is an encrypted tunnel between two computers.

It uses the [STUN protocol](https://en.wikipedia.org/wiki/STUN) to traverse NAT, [SCTP](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) to provide reliable transmission over UDP and the [Noise protocol](https://noiseprotocol.org/noise.html) for securing the connection (using the KK handshake pattern).

Steps for Alice (initiator):

- Use STUN protocol to get a remote UDP address.
- HTTP PUT address from STUN (encrypted to Bob, signed by Alice) to https://keys.pub/disco/{sender}/{recipient}/offer.
- HTTP GET address for Bob from https://keys.pub/disco/{sender}/{recipient}/answer.
- Connect to Bob's address.
- Initiate Noise handshake.

Steps for Bob:

- Use STUN protocol to get a remote UDP address.
- HTTP GET address for Alice from https://keys.pub/disco/{sender}/{recipient}/offer.
- HTTP PUT address from STUN (encrypted for Alice, signed by Bob) to https://keys.pub/disco/{sender}/{recipient}/answer.
- Connect to Alice's address (using SCTP).
- Wait for Noise handshake.
