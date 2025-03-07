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

# Function to format a directory
format_directory() {
    local dir=$1
    echo -e "${YELLOW}Formatting files in ${dir}...${NC}"
    
    # Run the formatters
    echo -e "${BLUE}Running Prettier...${NC}"
    npx prettier --write "$dir/*.{md,html}" || true
    
    echo -e "${BLUE}Running Markdownlint...${NC}"
    npx markdownlint "$dir/*.md" || true
    
    echo -e "${BLUE}Running Yamllint...${NC}"
    poetry run yamllint "$dir" || true
}

# List of directories to format if no argument is provided
DIRS=("_tabs" "_data")

# If a directory is specified, only format that one
if [ $# -eq 1 ]; then
    if [ -d "$1" ]; then
        format_directory "$1"
    else
        echo -e "${RED}Error: Directory $1 not found${NC}"
        exit 1
    fi
else
    # Format all directories
    for dir in "${DIRS[@]}"; do
        if [ -d "$dir" ]; then
            format_directory "$dir"
        fi
    done
fi

# Print completion message
echo -e "\n${GREEN}=== Formatting Complete! ===${NC}"