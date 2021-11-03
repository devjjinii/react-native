## 리액트 네이티브

* APP 다운 (Expo Go)
   * 프로젝트 터미널 > expo login 
   * Expo
      * https://expo.io/
   * 도움이 되는 링크
      * https://facebook.github.io/react-native/docs/getting-started
      * https://facebook.github.io/react-native/docs/components-and-apis
   * React Navigation Docs
      * https://reactnavigation.org/docs/getting-started
      * https://reactnative.dev/
---
* ⭐인강⭐
   * https://www.udemy.com/course/react-native-the-practical-guide/
   * https://www.nomadcoders.co/react-native-for-beginners

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
   * npm install react-native-vector-icons
      * import Icon from 'react-native-vector-icons/Ionicons'; -->  `<Icon name="원하는class" size={24} color="white"/>`
   * React Navigation  --> 5.X 버전
       ```js
      react-navigation -> @react-navigation/native
      react-navigation-stack -> @react-navigation/stack
      react-navigation-tabs -> @react-navigation/bottom-tabs, @react-navigation/material-top-tabs
      react-navigation-material-bottom-tabs -> @react-navigation/material-bottom-tabs
      react-navigation-drawer -> @react-navigation/drawer
       ``` 
      * npm install @react-navigation/native
          * expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
          * npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
      * npm install @react-navigation/bottom-tabs
      * npm install @react-navigation/stack
   * React Navigation ---> 4.X 버전  ---> npm install react-navigation ... 으로 진행
   * npm install react-native-paper
---
* expo install expo-location
* 날씨 API 
   * https://openweathermap.org/api
   * https://openweathermap.org/api/one-call-api