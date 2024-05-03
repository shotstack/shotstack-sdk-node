#!/bin/bash

# Get the version number from the package.json file
VERSION=$(grep '"version"' package.json | head -1 | awk -F '"' '{print $4}')

# Push the branch to the remote repository
git push --set-upstream origin "v$VERSION"

# Open the pull request URL in the default browser
xdg-open "https://github.com/shotstack/shotstack-sdk-node/compare/v$VERSION?expand=1"
exit
