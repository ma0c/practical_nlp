from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer

phrase = "He ran and ate at the same time"
tokenized_phrase = word_tokenize(phrase)

stemmer = PorterStemmer()
stemmed_words = [stemmer.stem(word) for word in tokenized_phrase]
print(stemmed_words)

lemmatizer = WordNetLemmatizer()
stemmed_words = [lemmatizer.lemmatize(word, "v") for word in tokenized_phrase]
print(stemmed_words)
