# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-04-29 07:18
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0004_auto_20170427_2327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='createdAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2017, 4, 29, 7, 18, 3, 419914)),
        ),
    ]
