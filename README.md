To enable code-signing and notarization:

export CSC_IDENTITY_AUTO_DISCOVERY="true"
export APPLE_ID="<your Apple ID>"
export APPLE_ID_PASSWORD="<your Apple Password>"
export GH_TOKEN="<YOUR_TOKEN_HERE>"

yarn run publish
