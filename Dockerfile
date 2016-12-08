FROM ubuntu

MAINTAINER Madhava Jay me@madhavajay.com

RUN apt-get update
RUN apt-get install python python-cairo python-rsvg python-setuptools wget nano curl mongodb -y
RUN mkdir /data && mkdir /data/db
RUN mkdir har && cd har
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python get-pip.py
RUN pip install pylons pymongo==2.3 webob
RUN wget https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/harstorage/harstorage-1.0-py2.7.egg
RUN easy_install harstorage-1.0-py2.7.egg

RUN paster make-config "harstorage" production.ini
RUN paster setup-app production.ini

EXPOSE 5000

ENTRYPOINT mongod --fork --logpath /tmp/mongod.log && paster serve production.ini
