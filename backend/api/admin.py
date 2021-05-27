from django.contrib import admin
from . models import Quiz, Question, Answer
# Register your models here.

class QuizAdmin(admin.ModelAdmin):
    list_display=( 'title', 'author',  'createdOn')
    search_fields=('title',)

admin.site.register(Quiz, QuizAdmin)

class InlineAnswers(admin.TabularInline):
    model = Answer

class QuestionAdmin(admin.ModelAdmin):
    list_display=('id', 'quiz', 'prompt')
    inlines = [InlineAnswers,]
    search_fields=('prompt',)
    raw_id_fields=('quiz',)

admin.site.register(Question, QuestionAdmin)

class AnswerAdmin(admin.ModelAdmin):
    list_display=('id', 'question', 'ansText')

admin.site.register(Answer, AnswerAdmin)