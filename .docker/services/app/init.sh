#! /bin/bash

########################################################################################################################
# This script will run within the Docker container running the `app` service, per the `CMD` statement in its Dockerfile.
########################################################################################################################

# Stop if an error occurs.
set -e

# Stop if a referenced variable is not set.
set -u

# Get the user's attention, as they may have been multitasking.
#
# References:
# - https://manytools.org/hacker-tools/ascii-banner/ (font used is: "ANSI shadow")
# - https://stackoverflow.com/a/5947802 (using ANSI color codes with bash)
# - https://stackoverflow.com/a/33206814 (ANSI color code syntax)
#
CYAN="\033[0;36m"
CYAN_UNDERLINED="\033[0;36;4m"
echo -e ""
echo -e "${CYAN} You can access a shell running within this container,"
echo -e "${CYAN} by issuing the following command on the host machine:"
echo -e "${CYAN} $ ${CYAN_UNDERLINED}docker-compose exec app bash${CYAN}"
echo -e ""

# Start the app in "watch mode" for development.
yarn start:dev
