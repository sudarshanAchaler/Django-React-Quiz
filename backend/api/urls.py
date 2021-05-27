from django.urls import path, include
from. views import QuizView, QuestionView, AnswerView
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'quiz',QuizView, 'quiz')
router.register(r'question',QuestionView, 'question')
router.register(r'answer',AnswerView, 'answer')

urlpatterns = [
    path('', include(router.urls))
]