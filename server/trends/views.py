from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.views import View
from pytrends.request import TrendReq


class TrendView(View):

    def get(self, request):
        query = request.GET.get('q')
        if not query:
            return HttpResponseBadRequest()

        pytrends = TrendReq()
        pytrends.build_payload([query])

        data = pytrends.interest_over_time()[query].tail(25)

        response = HttpResponse(data.to_json())
        response['Content-Type'] = 'application/json'
        return response
