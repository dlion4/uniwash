from django.http import JsonResponse
from django.views.generic import FormView
from django.views.generic import TemplateView
from .forms import ContactForm

# Create your views here.


class HomePageView(TemplateView, FormView):
    template_name = "pages/home.html"
    form_class = ContactForm

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            # form.save()
            return JsonResponse(
                {
                    "detail": "Your message was received successfully",
                    "client": {
                        "message": form.cleaned_data.get("message"),
                        "client": str(form.cleaned_data.get("name")),
                        "phone": str(form.cleaned_data.get("phone")),
                    },
                },
                status=201,
            )
        return JsonResponse(form.errors.get_json_data(), status=400)
