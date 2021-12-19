from django.urls import path
from login.views import login_student
app_name = 'login'


urlpatterns = [
    path('login/',
         login_student, name='login_student')
]
