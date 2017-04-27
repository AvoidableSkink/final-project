from django.shortcuts import render, redirect
from django.http import HttpResponse

from .models import Todo

# Create your views here.
def index(request):
    todos = Todo.objects.all()
    context = {'todos':todos}
    return render(request, 'index.html', context)
    
def details(request, id):
    todo = Todo.objects.get(id=id)
    context = {'todo':todo}
    return render(request, 'details.html', context)

def add(request):
    if (request.method == 'POST'):
        title = request.POST['title']
        notes = request.POST['notes']
        
        todo = Todo(title=title, notes=notes)
        todo.save()
        
        return redirect('/todo')
    else:
        return render(request, 'add.html')
        
        
        