---
layout: post
title: CSV as your open data format
permalink: csv-format
---

# CSV as a format for your open data

*Comma separated values* or CSV as been around for a very long time and is among the simplest of formats, after all the name says it all.

It’s simplicity makes it relatively compact in size and easy to [stream][3]. These properties make CSV a convenient option for (transferring) large amounts of data.

The lucidity of CSV offers it self to a wide range or implementations and straightforward parsing. This is one of the reasons it is supported by various software, including legacy systems, as well as modern version control tools such as [Github][4].

Generally speaking a CSV file is similar to a table, where each cell is separated by a comma, while a line-break is used to separate two rows of data. 

To illustrate let’s look at an example.

| Company   | Product      | Valuation (mio EUR) |
| ----------| ------------ | -------------------:|
| Startup 1 | Hover-board  | 100                 |
| Startup 2 | Teleport     | 700 000             |
| Startup 3 | Robot butler | 300 000             |

<small>Note: The data used in the example is made up. Hopefully though, someone is working on making that robot-butler a reality. :) </small>

The same data from the table above could presented with CSV in the following manner:

> Company,Product,Valuation (mio EUR)    
> Startup 1,Hover-board,100
> Startup 2,Teleport,700 000
> Startup 3,Robot butler,300 000

Even though it may seem logical based on the context that the first row represents a header row it needs to be pointed out that we didn’t add any special markup, meaning the header row might easily be misinterpreted as a regular row.
 
One way to solve this would be to note it elsewhere, perhaps as an optional parameter of the [MIME type][6].

Continuing with our example, let’s say *Startup 1* decided to stop working on the hover-board (they discovered [another company][5] was much closer to as solution) and are looking for a new idea. In the meantime *Startup 2* has decided to add a pizza-delivery service to their product list.
 
This presents two common issues of CSV, namely now our first row has only two values (Company and Valuation) and secondly in the second row under Product we have a list of two product (using a comma within the *table-cell* value is expected).

The new CSV file might look like this:

> Company,Product,Valuation (mio EUR)    
> Startup 1,,100
> Startup 2,”Teleport, Pizza-delivery”,700 000
> Startup 3,Robot butler,300 000

If we adhere to the table metaphor than it makes sense to use the same number of values in each row. Remember, even if there is no actual value the second comma let’s us know that that *table-cell* is empty. 

However, the **same number of values per line is not always required**. It depends on the implementation. Although a seemingly trivial format, CSV has many variations and there is no *real* [official standard][1]. Worth noting is that there are several [related formats][2], however none of them surpasses CSV in popularity. 

The second problem lies with our delimiter, the comma, being used as part of a value. The former being often resolved by wrapping the value in quotes, one can see how this approach can quickly become another problem, if we need quotes to be a part of the value (e.g. a longer string value). 

While there are solutions to most of these issues, they point to one of the weaknesses of CSV, mainly it’s lacking in expressiveness. While it’s simplicity offers many advantages, it also poses certain challenges in expressing more complex values. Conveying hierarchy and relational data is much better served by using a different format.

## Conclusion
All in all, CSV is a compact format, friendly to the human reader as well as being straightforward to write and parse programmatically. Despite not having universal standardisation and lacking in expressiveness, it’s advantages make it a format worth your consideration.

[1]:http://tools.ietf.org/html/rfc4180
[2]:https://en.wikipedia.org/wiki/Delimiter-separated_values
[3]:http://stackoverflow.com/questions/1216380/what-is-a-stream
[4]:https://help.github.com/articles/rendering-csv-and-tsv-data/
[5]:http://hendohover.com
[6]:https://tools.ietf.org/html/rfc4180#page-4