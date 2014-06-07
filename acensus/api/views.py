from django.http import HttpResponse
from django.views.generic.base import View

import json

class Test(View):
    def get(self, request):
        jsondata = json.dumps({'status': 'ok'})
        return HttpResponse(jsondata, content_type='application/json')
test = Test.as_view()

class Login(View):
    def post(self, request):
        data = {
            'status': 'ok',
            'apikey': 'deadbeefdeadbeefdeadbeefdeadbeef',
            'user': 'Foobar',
            'balance': '33.3'
        }

        jsondata = json.dumps(data)
        return HttpResponse(jsondata, content_type='application/json')
login = Login.as_view()

class Logout(View):
    def post(self, request):
        jsondata = json.dumps({'status': 'ok'})
        return HttpResponse(jsondata, content_type='application/json')
logout = Logout.as_view()

class SignUp(View):
    def post(self, request):
        jsondata = json.dumps({'status': 'ok'})
        return HttpResponse(jsondata, content_type='application/json')
signup = SignUp.as_view()

class APNToken(View):
    def post(self, request):
        jsondata = json.dumps({'status': 'ok'})
        return HttpResponse(jsondata, content_type='application/json')
apntoken = api_key_required(APNToken.as_view())
