#!/bin/bash

python manage.py collectstatic --clear --no-input
python manage.py migrate
uwsgi --socket :8000  --module server.wsgi --master --processes 10
