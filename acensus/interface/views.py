from django.views.generic.base import TemplateView


class Index(TemplateView):
    template_name = 'djangoindex.html'
index = Index.as_view()
