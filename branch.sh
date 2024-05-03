#!/bin/bash

# Get the version number from the package.json file
VERSION=$(grep '"version"' package.json | head -1 | awk -F '"' '{print $4}')

# Checkout a new branch with the version number
git checkout -b "v$VERSION"
