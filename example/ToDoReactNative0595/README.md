# ToDoReactNative0595

App based on react-native v.0.59.5

Use Dropbox-authent v.0.0.6?
Login with external browser

##How to use:

Add linking to your project:
https://reactnative.dev/docs/0.59/linking#openurl

Add information about you redirect url.
For example, for url `oauth2todo://foo` it will be:

iOS: update `ios/info.plist`
```
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Viewer</string>
			<key>CFBundleURLName</key>
			<string>foo</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>oauth2todo</string>
			</array>
		</dict>
	</array>
```

Android: update `android/app/src/main/AndroidManifest.xml`
```
  <intent-filter android:label="filter_react_native">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="oauth2todo" android:host="foo" /> // A
  </intent-filter>
```
