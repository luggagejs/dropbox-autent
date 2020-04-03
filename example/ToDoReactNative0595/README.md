# ToDoReactNative0595

App based on react-native v.0.59.5

Use Dropbox-authent v.0.0.6?
Login with external browser

##How to use:

Add linking to your project:
https://reactnative.dev/docs/0.59/linking#openurl

###iOS

Add in `info.plist` information about you redirect url.
For example, for url `oauth2todo://foo` it will be:

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
