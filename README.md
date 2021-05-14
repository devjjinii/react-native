## 리액트 네이티브

* https://www.udemy.com/course/react-native-the-practical-guide/
    * Expo
        * https://expo.io/
    * 도움이 되는 링크
      * https://facebook.github.io/react-native/docs/getting-started
      * https://facebook.github.io/react-native/docs/components-and-apis

* 프로젝트 생성
    * node -v
    * npm -v
    * npm install -g expo-cli
    * expo init "생성할 프로젝트명"
    * cd "생성한 프로젝트명"
    * npm start

* 실행
    * Android Emulator
        * https://docs.expo.io/workflow/android-studio-emulator/
    * vi .bash_profile 
        * SDK platform-tools 경로 설정
        * source .bash_profile
    * iOS Simulator 
        * https://docs.expo.io/workflow/ios-simulator/

* 터미널에서 npm start -> a (Android Emulator restart)

* 디버깅
   * Android : ctrl + m

* 필요하면 설치 
   * expo install expo-app-loading
      * import { AppLoading } from 'expo';  import 안될 경우 -->  import AppLoading from 'expo-app-loading'
   * expo install expo-font 
   * npm i @expo/vector-icons
