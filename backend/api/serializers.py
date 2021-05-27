from rest_framework import serializers
from .models import Question, Quiz, Answer

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Answer
        fields=('id', 'url', 'question', 'ansText', 'isRight')

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    answer_set=AnswerSerializer(many=True, read_only=True)
    class Meta:
        model=Question
        fields=('id', 'url', 'quiz', 'prompt', 'answer_set')

class QuizSerializer(serializers.ModelSerializer):
    question_set=QuestionSerializer(many=True, read_only=True)
    class Meta:
        model=Quiz
        fields=('id', 'url', 'author', 'title', 'description' , 'createdOn', 'question_set')