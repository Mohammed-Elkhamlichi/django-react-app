from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie

from todo.models import Todo
from todo.serializers import TodoSerializer

# Create your views here.


@api_view(['GET'])
def todoList(request):
    # /todo/list
    todo_list = Todo.objects.all()
    serializer = TodoSerializer(todo_list, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def todoDetail(request, pk):
    # todo/detail/2
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(todo, many=False)
    return Response(serializer.data)


@ensure_csrf_cookie
@api_view(['GET', 'POST'])
def todoCreate(request):
    # /todo/create/
    body = request.POST.get('body')
    todo = Todo.objects.all().filter(body=body)
    print(todo)

    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        serializer = TodoSerializer(todo, many=False)
        print(serializer.data)
        return Response(serializer.data)


@api_view(['PUT', 'POST'])
def todoUpdate(request, pk):
    data = request.data
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(instance=todo, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def todoDelete(request, pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return Response('Todo Has Been Deleted Successfully')
