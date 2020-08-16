from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer

phrase = "I love Ice Cream. I also like steak"
tokenized_phrase = word_tokenize(phrase)

stemmer = PorterStemmer()
stemmed_words = [stemmer.stem(word) for word in tokenized_phrase]
print(stemmed_words)
