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

const POSTTagging = `
PRP   VBP      NNP      PRP    RB    VBP    NNP
 |     |        |        |     |      |      |
|I| |love| |Ice Cream|  |I| |also| |like| |steak|
`;

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
                        <Link href="https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif">
                            <Text color="secondary">https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif</Text>
                        </Link>
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
                        <Image src="https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif"/>
                        <Link href="https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif">
                            <Text color="secondary">https://media.giphy.com/media/a9EJq6MtJx5YY/giphy.gif</Text>
                        </Link>
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
                        <Link href="https://media.giphy.com/media/kMdlyJ74u9khW/giphy.gif">
                            <Text color="secondary">https://media.giphy.com/media/kMdlyJ74u9khW/giphy.gif</Text>
                        </Link>
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
                    Understanding words
                </Heading>
                <Appear elementNum={0}>

                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Who is who?
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    What about verbs?
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    What do you want?
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Let's create an assistant?
                </Heading>
            </FlexBox>
        </Slide>
    </Deck>
);
