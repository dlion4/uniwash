from .models import ContactInformation, Service


def core_context_data(request):
    return {
        "contact_formation": ContactInformation.objects.filter(is_active=True),
        "item_services_price": Service.objects.all(),
    }
