import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.tag import pos_tag
from nltk.chunk import RegexpParser

nltk.download('averaged_perceptron_tagger')

phrase = "I love Ice Cream. I also like steak"
tokenized_sentences = sent_tokenize(phrase)
tokenized_phrases = [word_tokenize(sentence) for sentence in tokenized_sentences]

tagged_words = [pos_tag(phrase) for phrase in tokenized_phrases]
print(tagged_words)

grammar = r"""
NP: {<PRP|NN|NNP>}
"""

parser = RegexpParser(grammar)

results = [parser.parse(sentence) for sentence in tagged_words]
print(results)
results[0].draw()



