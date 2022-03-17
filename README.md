# PWA Workshops

## Requirements

Before you will use this repository make sure that you have installed:

- **_Git_**

  - If you are a **Windows** or **macOS** user visit this link **[Downloading Git](https://git-scm.com/download/win)**
    then download appropriate installer and install it.
  - If you are a **Linux** (Ubuntu-based distribution) user you can paste bellow scrip into your terminal or visit this
    page **[Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**

    ```bash
    sudo apt install git-all
    ```

- **_Node.js_** and **_npm_**

  - If you are a **Windows** or **macOS** user visit this link **[Node.js download](https://nodejs.org/en/download/)**
    then download _LTS_ version for Windows and install it.
  - If you are a **Linux** (Ubunto-based distribution) user you can paste bellow scrip into your terminal or visit this
    page **[Node installation instruction](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)**
    or use **[nvm](https://github.com/nvm-sh/nvm#install--update-script)**

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

  > Or any other static HTTP server

- If you have installed **Node.js** and **npm**, then open your terminal / git-bash and run this command

  ```bash
  sudo npm install -g http-server
  ```

If you followed every step, you should be ready to start using this repository. To make sure that you have installed
everything correctly open your terminal git-bash and run the following commands:

- To check **git**: _`git --version`_ → you should see output with **git** version
- To check **node.js**: _`node --version`_ → you should see output with **node.js** version
- To check **npm**: _`npm --version`_ → you should see output with **npm** version
- To check **http-server**: _`http-server`_ → you should see output which starts with **Starting up http-server,
  serving**

## Downloading the repository

- Open your terminal / git-bash in location where you create a directory which will contain this repository

- Run the following command in your terminal / git-bash

  ```bash
  git clone https://github.com/GDSC-Lodz-University-of-Technology/pwa-workshops.git
  cd ./pwa-workshops
  ```

## Using this repository

- Open **_pwa-workshops_** directory in your terminal / git-bash
- Run `http-server` inside your terminal / git-bash in root directory
- Open your web-browser and go under **_[http://localhost:8080/](http://localhost:8080/)_**
- You can also use prepared branches if you need any hints
- Starting point of these workshops is branch 00-setup

## Workshops aim

At the end of this workshop, you should have a basic understanding of PWA. You should also have ready template for
setting up your next PWA app

## Workshops app

- App should be available online and offline
- App should be installable
- All list items should be cached

## Resources

### Articles:

- **[Google: Service Workers an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers?authuser=1)**
- **[Google: Learn PWA tutorial](https://web.dev/learn/pwa/)**
- **[Jake Archibald: The offline cookbook](https://jakearchibald.com/2014/offline-cookbook/)**
- **[What makes a good Progressive Web App?](https://web.dev/pwa-checklist/)**

### Videos:

- **[Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016](https://www.youtube.com/watch?v=cmGr0RszHc8)**
- **[Making things fast in world of build tools by Surma & Jake Archibald | JSConf Budapest 2019](https://www.youtube.com/watch?v=fWc3Zu6A3Ws)**

### Dev tools:

- **[Squoosh - image compression](https://squoosh.app/)**
- **[PWA Builder -  icons generator](https://www.pwabuilder.com/imageGenerator)**
- **[PWA Builder - Generating packages stores](https://blog.pwabuilder.com/docs/generating-your-android-package)**
- **[More PWA tools](https://www.pwabuilder.com/)**
