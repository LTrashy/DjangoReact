from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100, default="")
    nit = models.PositiveBigIntegerField()
    phone = models.PositiveBigIntegerField()

    def __str__(self):
        return self.name
