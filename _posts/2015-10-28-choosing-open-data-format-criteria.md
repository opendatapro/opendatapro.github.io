---
layout: post
title: Choosing a format for your open data
permalink: choosing-open-data-format-criteria
---

# Choosing a format for your open data

When considering a format the concerns should be purely practical. The perfect format depends upon the circumstances of each individual project and finding it can be tricky. Hopefully the list below should give you a good idea where to start.

## Openness
If you’re offering open data, it’s only logical to offer it in an open format. Open formats can be implemented by anyone, leading to larger (potential) amount of software that can utilise data. This is also reflected in the fact that many open formats not have only a vast amount of parsing libraries available in different programming languages, but are often implemented in the language itself via native functions.

## Standardisation
Knowing exactly how a format works means it is easier to learn and implement. Having to always re-learn even small differences soon gets annoying, requires additional work and is more prone to cause in errors. A lack of standards usually results in waste of time that could be better spent. 

## Parsing support
Openness and standardisation have a lot to do with parsing support. That is, how diverse is the number of application and programming environments that provide a way to deal with the given format. For example, if you are catering mostly to consumers who use Excel you should consider using [CSV][https://tools.ietf.org/html/rfc4180]. 

On the other hand if you want to develop a platform for developers than it might be preferred to use XML or JSON, both of which are widely supported by different programming languages.

## Human readability
Developers often need to read data directly. Depending on the format this can either be a relatively simple task or a frustrating experience. 

## Expressiveness
Is the data we are storing tabular or is it relational? What data types are we storing, is it strings, numbers or something more complex, such as charts? 

Sometimes it is preferred to support a lower number of data types due to predictability. 

## Brevity
How much size data takes up is not only relevant to the cost of storage, but also in writing, reading and transfer. The later being perhaps the most significant, since internet speed connections and bandwidth cost can vary greatly. As the amount of data increases so does the importance of the size factor. 

## Conclusion
Choosing the right format for your project can be a difficult decision. While the criteria above is certainly not a definitive list, considering these aspects should bring you closer to your desired outcome.