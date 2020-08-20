# python -m spacy download en_core_web_sm
import en_core_web_sm

nlp = en_core_web_sm.load()
phrase = "I love Ice Cream. I also like steak"
document = nlp(phrase)

for token in document:
    print(
        token.text,
        token.lemma_,
        token.pos_,
        token.tag_,
        token.dep_,
        token.shape_,
        token.is_alpha,
        token.is_stop
    )
