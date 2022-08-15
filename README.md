# Dashly email signature generator

Simple email signature generator for Dashly staff.
## Getting started

To develop the application locally run following scripts:

```
npm i
npm run start
```

Application uses `npm`. 
**Do not use `yarn`!**. It'll be blocked by package.json.

## Used URLs

https://signatures.dashly.net/

## Usage

Fill the form on the index page. If you input a banner image URL you also
have to provide a link which will be applied to the image.

*Generate* button will redirect user to a page with signature.

*Copy to clipboard* button will set user's clipboard value to siganture,
so it can be pasted directly to the email client.
