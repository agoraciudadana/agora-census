from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^$', 'interface.views.index', name='index'),
    url(r'^index.html$', 'interface.views.index', name='indexhtml'),
)
