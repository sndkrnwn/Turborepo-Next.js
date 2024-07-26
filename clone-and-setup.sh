#!/bin/sh

# clone-and-setup.sh

# Check if repository URL is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <repository-url>"
  exit 1
fi

REPO_URL=$1

# Clone the repository
git clone $REPO_URL

# Extract repo name from URL
REPO_NAME=$(basename $REPO_URL .git)

# Change to the repo directory
cd $REPO_NAME || exit

# Run the setup-hooks script to set up the post-checkout hook
./setup-hooks.sh

echo "Repository cloned, post-checkout hook set up, and 'client/custom' folder will be created on checkout."
