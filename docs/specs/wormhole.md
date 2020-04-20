# Wormhole

::: warning
This documentation is in progress.
:::

A wormhole is an encrypted tunnel between two computers.

It uses the [STUN protocol](https://en.wikipedia.org/wiki/STUN) to traverse NAT, [SCTP](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) to provide reliable transmission over UDP and the [Noise protocol](https://noiseprotocol.org/noise.html) for securing the connection (using the KK handshake pattern).

**Note: This is a preliminary version that might not work if you are behind certain firewalls or network setups that don't allow this type of direct connection. We don't fallback to a relay server, although we may add this as a feature.**

Steps for Alice (initiator):

- Use STUN protocol to get a remote UDP address.
- Save this address from STUN via HTTP PUT https://keys.pub/disco/{sender}/{recipient}/offer (encrypted to Bob, signed by Alice) to https://keys.pub/disco/{sender}/{recipient}/offer.
- Find address for Bob from HTTP GET https://keys.pub/disco/{sender}/{recipient}/answer.
- Connect to Bob's address.
- Initiate Noise handshake.

Steps for Bob:

- Use STUN protocol to get a remote UDP address.
- Find address for Alice from HTTP GET https://keys.pub/disco/{sender}/{recipient}/offer.
- Save bob's address from STUN (encrypted for Alice, signed by Bob) to HTTP PUT https://keys.pub/disco/{sender}/{recipient}/answer.
- Connect to Alice's address (using SCTP).
- Wait for Noise handshake.
