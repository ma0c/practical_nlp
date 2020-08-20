# Important notes to keep in mind during presentation

Natural language processing is an active research field since 1950.

Still today we have research of novels techniques to improve different aspects of NLP.

With Google Assistant, Siri and Echo (I'm ignoring cortana on purpose) NLP and speech
recognition technologies are at the reach of everyone.

All those huge advances in language technologies are impressive, but all share some
core fundamentals

Let's evaluate language in nature.

Note that similar to some artificial languages like the programming ones, there are
a set of words and each word have its own meaning, like in nature.

Now, natural languages are very complex in comparison to other languages, english has
at least in the Oxford English dictionary 171,476 words, studies show that a native
speaker knows almost 20.000, highly educated can know 40.000 but only 5.000 are used
for daily basis communication. Python has 35

```python
import keyword
len(keyword.kwlist)
```

As is impossible store in memory all valid permutations for any given language, we
want to understand language as a construction based on block types, called Part Of
Speech, which could be:

- Nouns
- Pronouns
- Articles
- Verbs
- Adjectives
- Adverbs
- Prepositions
- Conjunctions
- Interjections

First important step is to split all utterances or phrases into lexical units, this
is called tokenization

Then we can understand each word we start with a process of simplify everything to the
root of the word and extract information from it, if a verb understand the person
the verbal time, etc, this is called morphological analysis, and two of the more 
common techniques are Stemming and Lemmatization

Now we may need to clean this information based on context.

What is silver?

- She bagged two silver medals.
- She made a silver speech.
- His worries had silvered his hair. 

This is lexical ambiguity

What is a tank?

- The tank was full of water. 
- I saw a military tank.

This is Lexical Semantic Ambiguity 

- Every man loves a woman

This is scope ambiguity

- The man saw the girl with the telescope

This is attachment ambiguity

- The car hit the ball while it was moving.

This is Semantic Ambiguity

[Taked from here](http://www.ijircce.com/upload/2014/sacaim/59_Paper%2027.pdf)

