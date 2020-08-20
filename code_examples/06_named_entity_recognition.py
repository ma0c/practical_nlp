# python -m spacy download en_core_web_sm
import en_core_web_sm

nlp = en_core_web_sm.load()
phrase = "I love Ice Cream. I also like steak"
document = nlp(phrase)

for entity in document.ents:
    print(
        entity.text,
        entity.start_char,
        entity.end_char,
        entity.label_
    )
