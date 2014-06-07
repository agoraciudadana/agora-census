# VPbank


## Organization of the source code

## Install instructions

Create a virtualenv:

    $ mkvirtualenv vpbank -p $(which python2)

Install dependencies:

    $ pip install -r requirements.txt

Execute script compile\_templates.sh inside folder interface:

    $ npm install . # one time
    $ npm install package.json # one time
    $ ./compile_templates.sh # when you change some template

