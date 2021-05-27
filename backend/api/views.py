from django.shortcuts import render
from rest_framework import viewsets
from .models import Question, Quiz, Answer
from .serializers import QuestionSerializer, QuizSerializer, AnswerSerializer

# Create your views here.
class QuizView(viewsets.ModelViewSet):
    serializer_class= QuizSerializer
    queryset= Quiz.objects.all()

class QuestionView(viewsets.ModelViewSet):
    serializer_class= QuestionSerializer
    queryset= Question.objects.all()

class AnswerView(viewsets.ModelViewSet):
    serializer_class= AnswerSerializer
    queryset= Answer.objects.all()
