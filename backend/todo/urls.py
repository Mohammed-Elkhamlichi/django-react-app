from django.urls import path
from todo.views import todoList

app_name = "todo"

urlpatterns = [
    path('todo-list', todoList, name='todo-list'),
]
