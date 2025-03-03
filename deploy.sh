#!/bin/bash

# Set text colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get current date in YYYY-MM-DD format
date=$(date '+%Y-%m-%d')
commit_message="production-update-$date"

# Build the project
echo -e "${GREEN}Building project...${NC}"
npm run deploy

# Check if build was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Build successful!${NC}"
    
    # Git operations
    echo -e "${YELLOW}Committing changes...${NC}"
    git add .
    git commit -m "$commit_message"
    
    echo -e "${YELLOW}Pushing to repository...${NC}"
    git push origin main
    
    echo -e "${GREEN}Deployment complete!${NC}"
else
    echo -e "${RED}Build failed! Please check the errors above.${NC}"
    exit 1
fi 