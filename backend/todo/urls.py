from django.urls import path
from todo.views import (
    todoList,
    todoDetail,
    todoCreate,
    todoUpdate,
    todoDelete
)

app_name = "todo"

urlpatterns = [
    path('list/', todoList, name='todoList'),
    path('create/', todoCreate, name='todoCreate'),
    path('update/<str:pk>/', todoUpdate, name='todoUpdate'),
    path('detail/<str:pk>/', todoDetail, name='todoDetail'),
    path('delete/<str:pk>/', todoDelete, name='todoDelete'),
]
