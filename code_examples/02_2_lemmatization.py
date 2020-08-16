import nltk.download
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

nltk.download('wordnet')

phrase = "I love Ice Cream. I also like steak"
tokenized_phrase = word_tokenize(phrase)

lemmatizer = WordNetLemmatizer()
stemmed_words = [lemmatizer.lemmatize(word) for word in tokenized_phrase]
print(stemmed_words)
