FROM node:lts

RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-pip \
        python3-setuptools \
        groff \
        less \
    && pip3 install --upgrade pip \
    && apt-get clean

RUN pip3 --no-cache-dir install --upgrade awscli

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ../

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY app/. .

EXPOSE 5000

CMD [ "npm", "run", "start-server" ]