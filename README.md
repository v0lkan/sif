```
   _,                            ,--.   ,---.
  /(_                     ,---.  `--'  /  .-'
 |   '-._        . ' .   (  .-'  ,--.  |  `-,
 \    ,-.)      -= * =- .-'  `)  |  |  |  .-'
  \((` .(        '/. '  `----'   `--'  `--'
   )\  _/        /         just like magic
.-'   '--.      /
\,         \   /|
 ';,_) _)'\ \,//    
  `\   (   '._/   
   |  . '.
   |      \
   |  \|   |
    \  |  /
     '.| /
```

> **NOTE**
> 
> This README is in draft mode.
>
> I'll remove this notice when the README is finalized.

## Summary

`sif` is an intelligent curator that makes information meaningful and findable.

> `sif` is not a search engine; it's different.

If you love links, if you love to keep your information all together,
and if you love to find things easily, then `sif` is just for you.

If you cannot live without a graphical user interface. If you open some sort
of rich-text-enable cloud-ready word processor to store a simple link to a
web page, or to write a simple "how to" note for later reference, then 
probably `sif` is not for you.  


Since `sif` is a command line interface to sifting your stuff, you'll benefit
it most, you are comfortable with the command line. However, even if you 
are not a comamnd line aficionado it's really easy to get used to it if you
[spend five minutes to read the **Usage Examples**][link].

## Backstory

I'd been privately using a bunch of shell scripts for a similar purpose;
and I decided to make it more usable, and publicly available; and that's
how `sif` came up to be.

## Dependencies

TBD

## How to Install

TBD

## Local Development Setup

TBD

## Configuration

TBD

## Supported Environments

TBD

## Usage Examples

TBD

## Versioning and Backwards Compatibility

TBD

## Wanna Help?

TBD

## Contact Information

* **Project Owner**: [Volkan Özçelik](http://volkan.io/)
* **Project Website**: [o2js.com](http://o2js.com/)

## License

## Code of Conduct

As contributors and maintainers of this project, and in the interest of 
fostering an open and welcoming community, we pledge to respect all people who 
contribute through reporting issues, posting feature requests, updating 
documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free 
experience for everyone, regardless of level of experience, gender, gender 
identity and expression, sexual orientation, disability, personal appearance, 
body size, race, ethnicity, age, religion, or nationality.

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery
* Personal attacks
* Trolling or insulting/derogatory comments
* Public or private harassment
* Publishing other's private information, such as physical or electronic 
addresses, without explicit permission
* Other unethical or unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or 
reject comments, commits, code, wiki edits, issues, and other contributions 
that are not aligned to this Code of Conduct. By adopting this Code of Conduct, 
project maintainers commit themselves to fairly and consistently applying these 
principles to every aspect of managing this project. Project maintainers who 
do not follow or enforce the Code of Conduct may be permanently removed from 
the project team.

This code of conduct applies both within project spaces and in public spaces 
when an individual is representing the project or its community.

Instances of abusive, harassing, or otherwise unacceptable behavior may be 
reported by opening an issue or contacting one or more of the project 
maintainers.

*This Code of Conduct is adapted from the 
[Contributor Covenant](http://contributor-covenant.org), version 1.2.0, 
available at 
[http://contributor-covenant.org/version/1/2/0/](http://contributor-covenant.org/version/1/2/0/)*.

## About



## Has Only What's Needed

Parkinson's Law tells us that "work expands so as to fill the time available for 
its completion". Applied to software, this means that applications tend to 
bloatware, obese programs whose complexity makes them nearly impossible to
 debug and maintain.
 
## Usage Examples

TODO:// to be updated.

## The Index

`sif` has a large sample data that you can use out-of-the box if you want to.
I regularly update the data set; and you are welcome to suggest additional links
too.

The initial data you see when you install `sif`, will be my original 
(and growing) working set; however you are more than welcome to PR and add 
additional links to it.

TODO:// explain process of how to suggest link.
TODO:// add ability to fetch recent data set (from github)

## The Backstory

I touch a substantial amount of links while I'm doing my day-to-day work. 
I collect, categorize, and sift links.

After figuring out that it becomes damn hard to search your bookmarks after your 
browser's bookmark index grows above tens of megabytes, I decided to create a
command-line utility that will help me sift through data efficiently 
and effectively.

Although there are websites for this purpose, they are slow to respond, and the
are slower to use than a terminal. --- command line FTW!

--

// TODO: processing a duplicate link should be visible in the report output so that
you can decide to update or ignore it.

// TODO: some of the stuff in "lib" (like the one that goes through links and gets meta information) 
// can turn out to be additional side projects keep this in mind when writing them.

// TODO: also write about the development process, how the js is transpiled etc.

REMARK:
sif runs in unix-like environments; why? because I wanted to leverage the already
superb file searching and sorting capabilities of unix. -- `egrep` and `sort`
can be implemented in pure JavaScript (as streams) too; I'll leave it in the 
"icebox" for issues to consider later.

Tags can be any kind of text; try to keep your tags simple and memorable.
An alias is a single-word token with no spaces in it.
