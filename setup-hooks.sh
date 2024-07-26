#!/bin/sh

# setup-hooks.sh

HOOKS_DIR=$(git rev-parse --git-dir)/hooks

# Create a post-checkout hook
cat << 'EOF' > $HOOKS_DIR/post-checkout
#!/bin/sh
# Create the 'antam' folder under 'custom' directory
mkdir -p custom/antam
EOF

# Make the hook executable
chmod +x $HOOKS_DIR/post-checkout
