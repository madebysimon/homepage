---
layout: article
date: 08.04.22
edit: 08.04.22
tagline: Of Bubbles and Bias
title: A Markdown Test
subtitle: "Rest of the Text is centered and grey Lorem Ipsum dolor sit amet.<br>Consequet ur blabla some text to enable charakter breaks.<br>About three lines should do it and make it readable."
author: Simon Kelch
authortagline: CX @maia health
authorpicture: https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png
abstract: "Sometimes you feel right on track, but at times got so cought up in the goal you chose an ineffective path. What from the inside looks like progress may only mask treading in the wrong direction. Entrusting someone with informing about these choices is a tough call for many, but bears great potential."
tags:
  - Test
  - HTML
previous-title: This is the title of the previous article
previous-image: https://images.unsplash.com/photo-1644007497105-8d0ae9ec9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format
next-title: This is the title of the next article
next-image: https://images.unsplash.com/photo-1644007497105-8d0ae9ec9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format
---

## Heading Two
blabla
### Heading Three
blabla
#### Heading Four
blabla
##### h5 Heading
blabla
###### h6 Heading
blabla

---

This is the content of my page

Some text with a[^1] footnote.

[^1]: Footnote text

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

---

## Emphasis

**This is bold text**
*This is italic text*
~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


## Code

Inline `code`

Indented

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```


## Links
[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

---

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"



### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### Definition lists

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

### Abbreviations
This is for HTML
*[HTML]: Hyper Text Markup Language

This is HTML
