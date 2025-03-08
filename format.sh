#!/bin/bash

# Format Jekyll files using prettier, markdownlint, and yamllint
# Usage: ./format.sh [directory]

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
MAGENTA='\033[0;35m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# List of directories to format if no argument is provided
DIRS=("_tabs" "_data", "_layouts", "_includes", "_posts")

# Function to run formatters on all directories at once
run_formatters() {
    local dirs=("$@")
    local dirs_pattern=$(IFS="|"; echo "${dirs[*]}")
    
    echo -e "${YELLOW}Formatting files in: ${dirs[*]}...${NC}"
    
    # Run the formatters on all directories at once
    echo -e "${MAGENTA}Running Prettier...${NC}"
    npx prettier --write "{$(IFS=,; echo "${dirs[*]}")}/*.{md,html}" || true
    
    echo -e "${MAGENTA}Running Prettier on index.html...${NC}"
    npx prettier --write "index.html" || true
    
    echo -e "${MAGENTA}Running Markdownlint...${NC}"
    npx markdownlint "{$(IFS=,; echo "${dirs[*]}")}/*.md" || true
    
    echo -e "${MAGENTA}Running Yamllint...${NC}"
    poetry run yamllint "${dirs[@]}" || true
}

# If a directory is specified, only format that one
if [ $# -eq 1 ]; then
    if [ -d "$1" ]; then
        run_formatters "$1"
    else
        echo -e "${RED}Error: Directory $1 not found${NC}"
        exit 1
    fi
else
    # Format all directories together
    valid_dirs=()
    for dir in "${DIRS[@]}"; do
        if [ -d "$dir" ]; then
            valid_dirs+=("$dir")
        fi
    done
    
    if [ ${#valid_dirs[@]} -gt 0 ]; then
        run_formatters "${valid_dirs[@]}"
    else
        echo -e "${RED}Error: No valid directories found${NC}"
        exit 1
    fi
fi

echo -e "\n${GREEN}=== Formatting Complete! ===${NC}"

# Build Jekyll site
echo -e "\n${MAGENTA}Building Jekyll site...${NC}"
bundle exec jekyll build --quiet

# Run HTML Proofer
echo -e "\n${MAGENTA}Running HTML Proofer...${NC}"
bundle exec htmlproofer _site \
    --disable-external \
    --ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/" || true

# Clean up site
echo -e "\n${MAGENTA}Cleaning Up...${NC}"
bundle exec jekyll clean --quiet

# Print completion message
echo -e "\n${GREEN}=== All Done! ===${NC}"
