from django import forms

from .models import Contact


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ["name", "phone", "message"]
        widgets = {
            "name": forms.TextInput(
                attrs={
                    "class": "form-control pg-form_field require error",
                    "placeholder": "Full Name",
                },
            ),
            "phone": forms.TextInput(
                attrs={
                    "class": "form-control pg-form_field require",
                    "placeholder": "Phone number",
                },
            ),
            "message": forms.Textarea(
                attrs={
                    "class": "form-control pg-form_field require",
                    "placeholder": "write your message here. Will respond in no time",
                    "rows": 3,
                },
            ),
        }
