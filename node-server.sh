#!/bin/bash

curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs

npm i pm2  -g
npm i connect serve-static http-proxy-middleware https