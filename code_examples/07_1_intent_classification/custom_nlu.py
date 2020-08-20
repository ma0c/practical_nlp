from rasa.nlu.model import Interpreter

interpreter = Interpreter.load("models/20200818-222727/nlu")

results = interpreter.parse("hello")
