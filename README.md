Score address

    "scoreAddress": "cx91f29280157d5ff4a08958c147bad870c08c649b"

# Willr

> Willr.io is a cutting-edge digital platform that offers users the peace of mind they need when it comes to managing and transferring their digital assets to future beneficiaries.

### Tweaks and improvements

The project is still under development and the next updates will focus on the following tasks:

- Contracts

- [ ] Deploy one contract from another, .jar -> bytes
- [ ] Create Batch transactions

- Frontend

- [ ] Connect ICONex wallet extention
- [ ] Configure functions to send transaction

## 💻 Installing

- Contracts

You need to install OpenJDK 11 version. Visit [OpenJDK.net](http://openjdk.java.net/) for prebuilt binaries.
Or you can install a proper OpenJDK package from your OS vendors.
In macOS:

```
$ brew tap AdoptOpenJDK/openjdk
$ brew install --cask adoptopenjdk11
```

In Linux (Ubuntu 20.04):

```
$ sudo apt install openjdk-11-jdk
```

Download and Install Go
In macOS:

```
$ brew install go
```

In Linux (Ubuntu 20.04):

```
$ wget -c https://go.dev/dl/go1.16.15.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local
$ export PATH=$PATH:/usr/local/go/bin
```

Verify installation

```
$ go version
```

- Frontend

To get started, just clone the repository go to the FrontEnd folder and run yarn add:

```
git clone https://github.com/nour-karoui/Willr.io
```

```
cd willr-front
```

```
yarn add
```

## ☕ Using Willr.io

- Contracts

Build goloop CLI

```
GOLOOP_ROOT=/path/to/goloop
```

```
cd $GOLOOP_ROOT
```

```
GOBUILD_TAGS=
```

```
make goloop
```

```
./bin/goloop version
```

Check if you are in the contracts folder

```
cd willr-contracts
```

Build the SCORE

```
./gradlew build
```

Optimize the jar

```
./gradlew optimizedJar
```

Deploy the optimized jar (This is just an example command, modify the values according to what you need and your file paths)

```
$GOLOOP_ROOT/bin/goloop rpc sendtx deploy ./willr.io/build/libs/willr.io-0.1.0-optimized.jar \
    --uri https://lisbon.net.solidwallet.io/api/v3 \
    --key_store /home/bruno/repos/Willr.io/willr-contracts/keystore.json --key_password gochain \
    --nid 2 --step_limit 10000000000 \
    --content_type application/java \
```

Verify the execution

```
$GOLOOP_ROOT/bin/goloop rpc txresult 0x0f64760bd7f4aaba809bc2f908ccb68f479ef40f26bda0dedc97525f168d56ba \
    --uri https://lisbon.net.solidwallet.io/api/v3

    output:
        {
        "to": "cx0000000000000000000000000000000000000000",
        "cumulativeStepUsed": "0x3db2ff91",
        "stepUsed": "0x3db2ff91",
        "stepPrice": "0x2e90edd00",
        "eventLogs": [],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": "0x1",
        "scoreAddress": "cx91f29280157d5ff4a08958c147bad870c08c649b",
        "blockHash": "0xd11d4f598c97f94c9085f61f1a7f7b6f5a2deb810f48185167baf3079b625814",
        "blockHeight": "0x135f44d",
        "txIndex": "0x1",
        "txHash": "0x0f64760bd7f4aaba809bc2f908ccb68f479ef40f26bda0dedc97525f168d56ba"
        }
```

Send transaction command (This is just an example command, modify the values according to what you need and your file paths)

```
 $GOLOOP_ROOT/bin/goloop rpc sendtx call --to cx91f29280157d5ff4a08958c147bad870c08c649b \
    --uri https://lisbon.net.solidwallet.io/api/v3 \
    --key_store /home/bruno/repos/Willr.io/willr-contracts/keystore.json --key_password gochain \
    --nid 2 --step_limit 10000000000 \
    --method getWill \
    --param userAddress=
```

- Frontend

Check if you are in the frontend folder

```
yarn dev
```

## 😄 Be one of the contributors<br>

Do you want to be part of this project? Click [HERE](CONTRIBUTING.md) and read how to contribute.

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

[⬆ Voltar ao topo](#willr)<br>
