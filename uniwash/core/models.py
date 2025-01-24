from django.db import models


class ContactInformation(models.Model):
    name = models.CharField(max_length=100, unique=True)
    value = models.CharField(max_length=300)
    category = models.CharField(
        max_length=100,
        choices=(
            ("Email", "Email Address"),
            ("Phone", "Contact Phone"),
            ("Address", "Post Address"),
            ("Operations", "Opening Hours"),
        ),
        default="Email",
        unique=True,
    )
    icon = models.CharField(max_length=100, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.category == "Email":
            self.icon = "fa fa-envelope"
        if self.category == "Address":
            self.icon = "fa fa-map-marker"
        if self.category == "Phone":
            self.icon = "fa fa-phone"
        if self.category == "Operations":
            self.icon = "fa fa-clock-o"
        super().save(*args, **kwargs)


class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


# class Item(models.)


class Service(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        help_text="Something like Ironing, drying etc",
        choices=(
            ("Dry Cleaning", "Dry Cleaning"),
            ("Steam Ironing", "Steam Ironing"),
            ("Wash & Iron", "Wash & Iron"),
            ("Garments", "Garments"),
        ),
        default="Dry Cleaning",
    )

    def __str__(self):
        return self.name
    def get_pricing_item(self):
        return self.service_pricing.all()

class Pricing(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name="service_pricing",
    )
    item = models.CharField(max_length=200, unique=True)
    price = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.item
