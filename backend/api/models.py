from django.db import models
from django.contrib.auth.models import User
# Create your models here.
DEFAULT_DESC="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam voluptas iure ut pariatur! Aut quod dolorum voluptates iure quo quaerat quas. Omnis beatae blanditiis quaerat eveniet reiciendis sit? Porro molestiae repellat neque doloremque."
class Quiz(models.Model):
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField( max_length=255)
    description = models.CharField(null=True, blank=True, default=DEFAULT_DESC, max_length=255)
    createdOn = models.DateTimeField( auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.DO_NOTHING)
    prompt = models.TextField()

    def __str__(self):
        return self.prompt

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.DO_NOTHING)
    ansText = models.TextField()
    isRight = models.BooleanField(default=False)

    def __str__(self):
        return self.ansText

    class Meta:
        ordering=('id',)