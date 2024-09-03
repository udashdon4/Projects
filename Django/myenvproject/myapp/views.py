from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index (request): 
    context = {
        'name' : 'Sim',
        'age': 32,
        'gender': 'boy'
    }
    return render(request, 'index.html', context)