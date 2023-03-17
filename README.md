# Willr.io

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

Check if you are in the contracts folder

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
$GOLOOP_ROOT/bin/goloop rpc sendtx deploy ./WillFactory/build/libs/willr.io-0.1.0-optimized.jar \
    --uri https://lisbon.net.solidwallet.io/api/v3 \
    --key_store <keystore.json_path> --key_password <gochain> \
    --nid 2 --step_limit 10000000000 \
    --content_type application/java \
```

Send transaction command (This is just an example command, modify the values according to what you need and your file paths)
```
 $GOLOOP_ROOT/bin/goloop rpc sendtx call --to cxd1f5d12e92459a4fcdf2678a14b572687471a70e \
    --uri https://lisbon.net.solidwallet.io/api/v3 \
    --key_store keystore.json --key_password gochain \
    --nid 2 --step_limit 10000000000 \
    --method setName \
    --param name=Bob
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

[⬆ back to top](# Willr.io)<br>
