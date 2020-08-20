import React from "react";

import {
    Deck,
    Slide,
    Heading,
    FlexBox,
    Image,
    Link,
    Text,
    Appear,
    ListItem,
    UnorderedList,
    Notes,
    Markdown,
    CodePane,
    Stepper
} from "spectacle";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import qr from "../static/img/qr.png"


const POSTags = `| Number | Tag  | Description                              | Number | Tag  | Description                           |
|--------|------|------------------------------------------|--------|------|---------------------------------------|
| 1.     | CC   | Coordinating conjunction                 | 19.    | PRP$ | Possessive pronoun                    |
| 2.     | CD   | Cardinal number                          | 20.    | RB   | Adverb                                |
| 3.     | DT   | Determiner                               | 21.    | RBR  | Adverb, comparative                   |
| 4.     | EX   | Existential there                        | 22.    | RBS  | Adverb, superlative                   |
| 5.     | FW   | Foreign word                             | 23.    | RP   | Particle                              |
| 6.     | IN   | Preposition or subordinating conjunction | 24.    | SYM  | Symbol                                |
| 7.     | JJ   | Adjective                                | 25.    | TO   | to                                    |
| 8.     | JJR  | Adjective, comparative                   | 26.    | UH   | Interjection                          |
| 9.     | JJS  | Adjective, superlative                   | 27.    | VB   | Verb, base form                       |
| 10.    | LS   | List item marker                         | 28.    | VBD  | Verb, past tense                      |
| 11.    | MD   | Modal                                    | 29.    | VBG  | Verb, gerund or present participle    |
| 12.    | NN   | Noun, singular or mass                   | 30.    | VBN  | Verb, past participle                 |
| 13.    | NNS  | Noun, plural                             | 31.    | VBP  | Verb, non-3rd person singular present |
| 14.    | NNP  | Proper noun, singular                    | 32.    | VBZ  | Verb, 3rd person singular present     |
| 15.    | NNPS | Proper noun, plural                      | 33.    | WDT  | Wh-determiner                         |
| 16.    | PDT  | Predeterminer                            | 34.    | WP   | Wh-pronoun                            |
| 17.    | POS  | Possessive ending                        | 35.    | WP$  | Possessive wh-pronoun                 |
| 18.    | PRP  | Personal pronoun                         | 36.    | WRB  | Wh-adverb                             |`;


const phrase = "I love Ice Cream. I also like steak";

const tokenization = "|I| |love| |Ice Cream|  |I| |also| |like| |steak|";

const pythonTokenization = `from nltk.tokenize import word_tokenize

phrase = "I love Ice Cream. I also like steak"
tokenized_phrase = word_tokenize(phrase)

print(tokenized_phrase)

>>> ['I', 'love', 'Ice', 'Cream', '.', 'I', 'also', 'like', 'steak']
`;

const stemmingVsLemmatization = `from nltk.tokenize import word_tokenize
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

>>> ['He', 'ran', 'and', 'ate', 'at', 'the', 'same', 'time']
>>> ['He', 'run', 'and', 'eat', 'at', 'the', 'same', 'time']
`;

const POSTTagging = `
PRP   VBP      NNP      PRP    RB    VBP    NNP
 |     |        |        |     |      |      |
|I| |love| |Ice Cream|  |I| |also| |like| |steak|
`;

const porterStemmerRules = `
Step 1a
    SSES -> SS                         caresses  ->  caress
    IES  -> I                          ponies    ->  poni
                                       ties      ->  ti
    SS   -> SS                         caress    ->  caress
    S    ->                            cats      ->  cat
Step 1b
    (m>0) EED -> EE                    feed      ->  feed
                                       agreed    ->  agree
    (*v*) ED  ->                       plastered ->  plaster
                                       bled      ->  bled
    (*v*) ING ->                       motoring  ->  motor
                                       sing      ->  sing
    ...
`;

const spacyAnalysis = `import en_core_web_sm

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
`;

const spacyResponse = `I -PRON- PRON PRP nsubj X True True
love love VERB VBP ROOT xxxx True False
Ice Ice PROPN NNP compound Xxx True False
Cream Cream PROPN NNP dobj Xxxxx True False
. . PUNCT . punct . False False
I -PRON- PRON PRP nsubj X True True
also also ADV RB advmod xxxx True True
like like VERB VBP ROOT xxxx True False
steak steak PROPN NNP dobj xxxx True False
`;

const spacyNER = `import en_core_web_sm

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
`;

const spacyNERResponse = `Ice Cream 7 16 ORG`;

export const Slides = (props) => (
    <Deck transition={['zoom','slide']} transitionDuration={800}  {...props}>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size={1} textColor="secondary" >
                    Practical NLP
                </Heading>
                <Heading size={3}>
                    Mauricio Collazos
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Image src={qr} />
                <Link href="https://ma0c.github.io/practical_nlp/.">
                    <Text color="secondary">ma0c.github.io/practical_nlp/</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    What is language?
                </Heading>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading size="2" >
                    Communication in nature
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif"/>
                        {/*<Link href="https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading size="2" >
                    Communication in nature
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/ehae6ceAiGIFwnhWtV/giphy.gif"/>
                        {/*<Link href="https://media.giphy.com/media/ehae6ceAiGIFwnhWtV/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/ehae6ceAiGIFwnhWtV/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading size="2" >
                    Communication in nature
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/kMdlyJ74u9khW/giphy.gif"/>
                        {/*<Link href="https://media.giphy.com/media/kMdlyJ74u9khW/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/kMdlyJ74u9khW/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading size="2" >
                    Communication in nature
                </Heading>

                        <Image src="https://www.medindia.net/health-images/chimpanzee1.jpg"/>
                        <Link href="https://people.howstuffworks.com/swearing4.htm">
                            <Text color="secondary">https://people.howstuffworks.com/swearing4.htm</Text>
                        </Link>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Artificial Communication
                </Heading>

                <Appear elementNum={0}><Text margin="0px">1952 Audrey por IBM (Digit Recognition)</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">1960 Shoebox por IBM (Digits and operands)</Text></Appear>
                <Appear elementNum={2}><Text margin="0px">1972 Dynamic Time Warping (Sakoe, Chiba y Vintsyuk)</Text></Appear>
                <Appear elementNum={3}><Text margin="0px">1980 Hidden Markov Models</Text></Appear>
                <Appear elementNum={4}><Text margin="0px">1990 Gaussian Mixtures Models</Text></Appear>
                <Appear elementNum={5}><Text margin="0px">2000 Robust Speech Recognition</Text></Appear>
                <Appear elementNum={6}><Text margin="0px">2012 Context Dependent Deep Neuran Netwowks Hidden Markov Models</Text></Appear>
                <Appear elementNum={7}><Text margin="0px">2014 Deep Speech (Recurrent Deep Neural Networks)</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    What is language?
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Text>
                            An structured system of communication
                        </Text>
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    How language works?
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Xerxes_Cuneiform_Van.JPG" width={400} />
                        <Link href="https://en.wikipedia.org/wiki/Cuneiform">
                            <Text color="secondary">https://en.wikipedia.org/wiki/Cuneiform</Text>
                        </Link>
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    How language works?
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Hieroglyphs_from_the_tomb_of_Seti_I.jpg" width={400} />
                        <Link href="https://en.wikipedia.org/wiki/Egyptian_hieroglyphs">
                            <Text color="secondary">https://en.wikipedia.org/wiki/Egyptian_hieroglyphs</Text>
                        </Link>
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    How language works?
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/11I8v5lE8uq79C/giphy.gif" width={400} />
                        {/*<Link href="https://media.giphy.com/media/11I8v5lE8uq79C/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/11I8v5lE8uq79C/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Understanding words
                </Heading>
                <Appear elementNum={0}><Text margin="0px">Subjects(Noun)</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">Actions(Verbs)</Text></Appear>
                <Appear elementNum={2}><Text margin="0px">Qualify(Adjectives)</Text></Appear>
                <Appear elementNum={3}><Text margin="0px">...</Text></Appear>
                <Appear elementNum={4}><Text margin="0px">Pronouns(Adjectives)</Text></Appear>
                <Appear elementNum={5}><Text margin="0px">Adverbs</Text></Appear>
                <Appear elementNum={6}><Text margin="0px">Prepositions</Text></Appear>
                <Appear elementNum={7}><Text margin="0px">Conjunctions</Text></Appear>
                <Appear elementNum={8}><Text margin="0px">Determinants</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Understanding words
                </Heading>
                <Markdown>
                    {POSTags}
                </Markdown>
                <Link href="https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html">
                    <Text color="secondary">https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Order Matters
                </Heading>
                <Appear elementNum={0}><Text margin="0px">[Sentence] -> [Noun Phrase] [Verb Phrase]</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">[Noun Phrase] -> [Article] [Noun]</Text></Appear>
                <Appear elementNum={2}><Text margin="0px">[Noun Phrase] -> [Adjective] [Noun]</Text></Appear>
                <Appear elementNum={3}><Text margin="0px">[Noun Phrase] -> [Noun]</Text></Appear>
                <Appear elementNum={4}><Text margin="0px">...</Text></Appear>
                <Appear elementNum={5}><Text margin="0px">[Verb Phrase] -> [Verb] [Noun Phrase]</Text></Appear>
                <Appear elementNum={6}><Text margin="0px">[Verb Phrase] -> [Verb] [Prepositional Phrase Phrase]</Text></Appear>
                <Appear elementNum={7}><Text margin="0px">[Verb Phrase] -> [Verb] [Noun Phrase] [Prepositional Phrase Phrase]</Text></Appear>
                <Appear elementNum={8}><Text margin="0px">[Verb Phrase] -> [Verb] [Noun Phrase] [Adverb]</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Separating words
                </Heading>
                <Appear elementNum={0}>
                    <pre style={{fontSize: "2rem"}}>
                        {phrase}
                    </pre>
                </Appear>
                <Appear elementNum={1}>
                    <pre style={{fontSize: "2rem"}}>
                        {tokenization}
                    </pre>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Separating words
                </Heading>

                <CodePane
                    lang="python"
                    margin="20px auto"
                >
                    {pythonTokenization}
                </CodePane>

            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Categorizing words
                </Heading>
                <Appear elementNum={0}>
                    <pre style={{fontSize: "2rem"}}>
                        {phrase}
                    </pre>
                </Appear>
                <Appear elementNum={1}>
                    <pre style={{fontSize: "2rem"}}>
                        {tokenization}
                    </pre>
                </Appear>
                <Appear elementNum={2}>
                    <pre style={{fontSize: "2rem"}}>
                        {POSTTagging}
                    </pre>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Porter Stemmer
                </Heading>
                <Appear elementNum={0}>
                    <pre style={{fontSize: "1.5rem"}}>
                        {porterStemmerRules}
                    </pre>
                    <Link href="https://tartarus.org/martin/PorterStemmer/def.txt">
                        <Text color="secondary">https://tartarus.org/martin/PorterStemmer/def.txt</Text>
                    </Link>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Stemming vs Lemmatization
                </Heading>
                <CodePane
                    lang="python"
                    margin="20px auto"
                >
                    {stemmingVsLemmatization}
                </CodePane>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    A modern approach
                </Heading>
                <CodePane
                    lang="python"
                    margin="20px auto"
                >
                    {spacyAnalysis}
                </CodePane>
                <Appear elementNum={0}>
                    <CodePane
                        lang="python"
                        margin="20px auto"
                    >
                        {spacyResponse}
                    </CodePane>
                </Appear>

            </FlexBox>
        </Slide>
        <Slide>
            <Heading size="2">
                Language Model
            </Heading>
            <Appear>
                <Text>
                    <BlockMath math="P(w_1^n) = \prod_{k=1}^{n}{P(w_k|w_1^{k-1})}"/>
                </Text>
            </Appear>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Ambiguity
                </Heading>
                <Text>
                    What is silver?
                </Text>
                <Appear elementNum={0}><Text margin="0px">She bagged two silver medals. (Noun)</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">She made a silver speech. (Adjective)</Text></Appear>
                <Appear elementNum={2}><Text margin="0px">His worries had silvered his hair. (Verb)</Text></Appear>
                <Appear elementNum={3}><Text margin="0px">Lexical ambiguity</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Lexical Semantic Ambiguity
                </Heading>
                <Text>
                    What is a tank?
                </Text>
                <Appear elementNum={0}><Text margin="0px">The tank was full of water. (Noun)</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">I saw a military tank. (Noun)</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Scope Ambiguity
                </Heading>
                <Text>
                    Every man loves a woman
                </Text>
                <Appear elementNum={0}><Text margin="0px">For every man there is a woman</Text></Appear>
                <Appear elementNum={1}><Text margin="0px"> There is one particular woman who is loved by every man</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Scope Ambiguity
                </Heading>
                <Text>
                    The man saw the girl with the telescope
                </Text>
                <Appear elementNum={0}><Text margin="0px">The man saw the girl using a telescope</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">The man saw a girl carrying a telescope</Text></Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Semantic Ambiguity
                </Heading>
                <Text>
                    The car hit the ball while it was moving.
                </Text>
                <Appear elementNum={0}><Text margin="0px">The car was moving</Text></Appear>
                <Appear elementNum={1}><Text margin="0px">The ball was moving</Text></Appear>
                <Appear elementNum={2}>
                    <Link href="http://www.ijircce.com/upload/2014/sacaim/59_Paper%2027.pdf">
                        <Text color="secondary">http://www.ijircce.com/upload/2014/sacaim/59_Paper%2027.pdf</Text>
                    </Link>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Who is who?
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"/>
                        {/*<Link href="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    A better way to represent words
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://miro.medium.com/max/624/1*wwDrMqTX_eW7Vr9UxFPAOQ.png"/>
                        <Link href="https://medium.com/analytics-vidhya/maths-behind-word2vec-explained-38d74f32726b">
                            <Text color="secondary">https://medium.com/analytics-vidhya/maths-behind-word2vec-explained-38d74f32726b</Text>
                        </Link>
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    A modern approach
                </Heading>
                <CodePane
                    lang="python"
                    margin="20px auto"
                >
                    {spacyNER}
                </CodePane>
                <Appear elementNum={0}>
                    <CodePane
                        lang="python"
                        margin="20px auto"
                    >
                        {spacyNERResponse}
                    </CodePane>
                </Appear>

            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    What do you want?
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif"/>
                        {/*<Link href="https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Understanding sequences of words
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://miro.medium.com/max/698/1*Yhu1P012irDHOBLUB98FEw.png"/>
                        <Link href="https://towardsdatascience.com/word-embeddings-for-sentence-classification-c8cb664c5029">
                            <Text color="secondary">https://towardsdatascience.com/word-embeddings-for-sentence-classification-c8cb664c5029</Text>
                        </Link>
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>

            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Let's create an assistant!
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Things get complicated
                </Heading>

                <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                    <Image src="https://media.giphy.com/media/UedEkAAyEhMLC/giphy.gif"/>
                    {/*<Link href="https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif">*/}
                    {/*    <Text color="secondary">https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif</Text>*/}
                    {/*</Link>*/}
                </FlexBox>

            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Run away before questions
                </Heading>
                <Appear elementNum={0} justifyContent="center">
                    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
                        <Image src="https://media.giphy.com/media/TJaNCdTf06YvwRPCge/giphy.gif"/>
                        {/*<Link href="https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif">*/}
                        {/*    <Text color="secondary">https://media.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif</Text>*/}
                        {/*</Link>*/}
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>
    </Deck>
);
