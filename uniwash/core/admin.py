from django.contrib import admin

from .models import Contact
from .models import ContactInformation
from .models import Pricing
from .models import Service


@admin.register(ContactInformation)
class ContactInformationAdmin(admin.ModelAdmin):
    list_display = ["name", "value", "category", "icon", "is_active"]

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ["name", "phone", "is_active"]


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ["name"]
@admin.register(Pricing)
class PricingAdmin(admin.ModelAdmin):
    list_display = ["service", "item", "price"]
