FROM python:3.6
RUN mkdir /app
WORKDIR /app
RUN pip install uwsgi --no-cache-dir
ADD requirements.txt /app/
RUN pip install -r requirements.txt --no-cache-dir
ADD . /app/
