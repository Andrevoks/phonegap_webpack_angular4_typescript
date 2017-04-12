#!/bin/bash

$(npm bin)/phonegap build android
adb install -r platforms/android/build/outputs/apk/android-debug.apk
adb shell am start -n com.MY_PROJECT_NAME/com.MY_PROJECT_NAME.MainActivity