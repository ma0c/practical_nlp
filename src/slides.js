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
                <Heading size="2" >
                    What is language?
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    How language works?
                </Heading>
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
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Understanding words
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Separating words
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
                    Who is who?
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
