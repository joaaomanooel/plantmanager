fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## iOS
### ios bump_versions
```
fastlane ios bump_versions
```
Bump version and build number.
### ios create_app_on_apple_developer
```
fastlane ios create_app_on_apple_developer
```
Create app on Apple Developer portal.
### ios signin
```
fastlane ios signin
```
Fetch or create certificates and provisioning profiles
### ios build
```
fastlane ios build
```
Build the iOS application.
### ios distribute_staging
```
fastlane ios distribute_staging
```
Distribute to App Center.
### ios distribute_production
```
fastlane ios distribute_production
```
Distribute to TestFlight

----

## Android
### android bump_versions
```
fastlane android bump_versions
```
Bump version and build number.
### android build
```
fastlane android build
```
Build Android APK or AAB
### android distribute_staging
```
fastlane android distribute_staging
```
Distribute to App Center

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
