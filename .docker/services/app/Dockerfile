FROM node:14.18.2

ENV APP_HOME /usr/src/app
WORKDIR ${APP_HOME}

RUN apt-get update && \
    apt-get install -y \
    wait-for-it \
    && \
    apt-get clean

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

# Copy our custom `.bashrc` file into the Docker image.
COPY .docker/services/app/.bashrc /root/.bashrc

# Run the init script.
CMD ["/bin/bash", "/usr/src/app/.docker/services/app/init.sh"]
