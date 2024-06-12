const { notarize } = require('electron-notarize');
const path = require('path');

exports.default = async function notarizing(context) {
  if (context.electronPlatformName !== 'darwin' || process.env.CSC_IDENTITY_AUTO_DISCOVERY === 'false') {
    console.log("Skipping notarization");
    return;
  }
  console.log("Notarizing...")

  const appBundleId = context.packager.appInfo.info._configuration.appId;
  const appName = context.packager.appInfo.productFilename;
  const appPath = path.normalize(path.join(context.appOutDir, `${appName}.app`));
   appleId = process.env.APPLE_ID;
   appleIdPassword = process.env.APPLE_ID_PASSWORD;

    appleId=null;
    appleIdPassword=null;

  if (!appleId) {
    console.warn("Not notarizing: Missing APPLE_ID environment variable");
    return;
  }

  console.log("appleId", appleId);

  if (!appleIdPassword) {
    console.warn("Not notarizing: Missing APPLE_ID_PASSWORD environment variable");
    return;
  }

  console.log("passs", appleIdPassword);


  return notarize({
    // tool: "notarytool",
    // teamId: 'H4P7CQR4CL',
    appBundleId,
    appPath,
    appleId,
    appleIdPassword,
  });
};
