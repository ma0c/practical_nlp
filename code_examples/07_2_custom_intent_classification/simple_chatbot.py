from rasa.nlu.model import Interpreter


class Chatbot(object):

    def __init__(self):
        self.interpreter = Interpreter.load("models/nlu")
        self.tasks = list()

    @staticmethod
    def read_message(prompt="What else you want to do > "):
        try:
            return input(prompt)
        except KeyboardInterrupt:
            return "goodbye"

    def extract_and_classify(self, text):
        response = self.interpreter.parse(text)
        entities = {
            "indexes": list(),
            "tasks": list()
        }
        print(response)
        for entity in response["entities"]:
            if entity["entity"] == "task":
                entities["tasks"].append(entity["value"])
            elif entity["entity"] == "task_id":
                entities["indexes"].append(int(entity["value"]))
        return (
            entities,
            response["intent"]["name"]
        )

    def compose_response(self, intent, entities):
        if intent == "hello":
            return "Hello, what can I do for you"
        elif intent == "goodbye":
            return "It was nice to talk with you, have a nice day"
        elif intent == "list_task":
            return "All tasks: \n{}".format(
                "{}".format(
                    "\n".join(
                        [
                            "{} - {}".format(x, y) for x, y in zip(
                                range(len(self.tasks)),
                                self.tasks
                            )
                        ]
                    )
                )
            )

        elif intent == "show_task":
            return "Tasks: {}".format(
                "\n".join(
                    [self.tasks[i] for i in entities["indexex"]]
                )
            )
        elif intent == "create_task":
            [self.tasks.append(task) for task in entities["tasks"]]
            return "Tasks added"
        elif intent == "delete_task":
            [self.tasks.pop(index) for index in entities["indexes"]]
            return "Tasks deleted"
        else:
            return "Sorry, can't understand what you saying"


if __name__ == "__main__":
    print("Loading model")
    chatbot = Chatbot()
    message = chatbot.read_message("Welcome to your TODO list chatbot, what do you want to do  > ")
    while True:
        entities, intent = chatbot.extract_and_classify(message)
        response = chatbot.compose_response(intent, entities)

        print(response) if response is not None else ""
        if intent == "goodbye":
            break
        message = chatbot.read_message()

