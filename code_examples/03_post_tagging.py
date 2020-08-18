import nltk
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag

nltk.download('averaged_perceptron_tagger')

phrase = "I love Ice Cream. I also like steak"
tokenized_phrase = word_tokenize(phrase)

tagged_words = pos_tag(tokenized_phrase)
print(tagged_words)
