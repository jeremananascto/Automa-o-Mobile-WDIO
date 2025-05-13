<h2 align="center">🧪 Framework de Automação de Testes Mobile | WebdriverIO + Appium</h2>

---

### ✅ Requisitos:

[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)  
[![Appium Inspector](https://img.shields.io/badge/-Appium%20Inspector-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium-inspector/releases)  
[![Appium Driver](https://img.shields.io/badge/-Appium%20Driver-662d91?logo=appium&logoColor=white)](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli)  
[![Android Studio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=android-studio&logoColor=white)](https://developer.android.com/studio)  
[![Java JDK](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black)](https://www.oracle.com/java/technologies/downloads/)  
[![Visual Studio Code](https://img.shields.io/badge/-VSCode-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

---

### 🚀 Primeiros Passos

#### 🔧 Instalando o Appium localmente

Para configurar o ambiente de testes local, instale:

```bash
npm install -g appium@next
npm install -g appium-doctor

📱 Criar dispositivo virtual no Android Studio:
Abra o Android Studio

Clique em More Actions > AVD Manager

Crie um novo dispositivo virtual

Escolha o dispositivo e versão do Android

Clique em Finish

Inicie o emulador clicando em Launch this AVD

🔍 Verifique os dispositivos disponíveis:

adb devices

Exemplo:
Pixel 3 - Android 11
Nexus 6 - Android 10 (para testes paralelos)

📥 Clonar o repositório:

git clone https:https://github.com/jeremananascto/Automa-o-Mobile-WDIO
cd WebdriverIOAppiumMochaJS

📦 Instalar dependências:

npm install

🧩 Verificar drivers do Appium:

appium driver list

⚙️ Criar e configurar arquivo .env:

# Executar testes paralelos
RUN_MODE=parallel

# Dispositivo 1 (Android)
EMULATOR_DEVICE1_ID=Pixel_3
EMULATOR_DEVICE1_NAME=Pixel 3
EMULATOR_DEVICE1_VERSION=11

# Dispositivo 2 (Android)
EMULATOR_DEVICE2_ID=Nexus_6
EMULATOR_DEVICE2_NAME=Nexus 6
EMULATOR_DEVICE2_VERSION=10

# BrowserStack
BROWSERSTACK_USERNAME=
BROWSERSTACK_ACCESS_KEY=
BROWSERSTACK_ANDROID_APP_ID=
BROWSERSTACK_ANDROID_DEVICE=
BROWSERSTACK_ANDROID_VERSION=
BROWSERSTACK_IOS_APP_ID=
BROWSERSTACK_IOS_DEVICE=
BROWSERSTACK_IOS_VERSION=

☁️ Configurar BrowserStack:

Crie uma conta em https://www.browserstack.com
Copie seu username e access key
Faça upload dos apps .apk (Android) e .ipa (iOS)
Anote os app IDs
Escolha dispositivos Android e iOS
Atualize o arquivo .env

▶️ Executar Testes:

npm test

📊 Gerar Relatório:

npm run report


