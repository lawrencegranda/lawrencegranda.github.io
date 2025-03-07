#!/bin/bash

# Format Jekyll files using prettier, markdownlint, and yamllint
# Usage: ./format.sh [directory]

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# List of directories to format if no argument is provided
DIRS=("_tabs" "_data", "_layouts", "_includes")

# Function to run formatters on all directories at once
run_formatters() {
    local dirs=("$@")
    local dirs_pattern=$(IFS="|"; echo "${dirs[*]}")
    
    echo -e "${YELLOW}Formatting files in: ${dirs[*]}...${NC}"
    
    # Run the formatters on all directories at once
    echo -e "${BLUE}Running Prettier...${NC}"
    npx prettier --write "{$(IFS=,; echo "${dirs[*]}")}/*.{md,html}" || true
    
    echo -e "${BLUE}Running Prettier on index.html...${NC}"
    npx prettier --write "index.html" || true
    
    echo -e "${BLUE}Running Markdownlint...${NC}"
    npx markdownlint "{$(IFS=,; echo "${dirs[*]}")}/*.md" || true
    
    echo -e "${BLUE}Running Yamllint...${NC}"
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

# Print completion message
echo -e "\n${GREEN}=== Formatting Complete! ===${NC}"