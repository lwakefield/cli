`heroku reviewapps`
===================

disposable apps built on GitHub pull requests

* [`heroku reviewapps:disable`](#heroku-reviewappsdisable)
* [`heroku reviewapps:enable`](#heroku-reviewappsenable)

## `heroku reviewapps:disable`

disable review apps or settings on an existing pipeline

```
USAGE
  $ heroku reviewapps:disable

OPTIONS
  -a, --app=app            (required) parent app used by review apps
  -p, --pipeline=pipeline  (required) name of pipeline
  -r, --remote=remote      git remote of parent app used by review apps
  --autodeploy             disable autodeployments
  --autodestroy            disable automatically destroying review apps

EXAMPLES
  $ heroku reviewapps:disable -p mypipeline -a myapp --autodeploy
  Disabling auto deployment ...
  Configuring pipeline... done
```

## `heroku reviewapps:enable`

enable review apps and/or settings on an existing pipeline

```
USAGE
  $ heroku reviewapps:enable

OPTIONS
  -a, --app=app            (required) parent app used by review apps
  -p, --pipeline=pipeline  (required) name of pipeline
  -r, --remote=remote      git remote of parent app used by review apps
  --autodeploy             autodeploy the review app
  --autodestroy            autodestroy the review app

EXAMPLES
  $ heroku reviewapps:enable -p mypipeline --a myapp --autodeploy --autodestroy
  Enabling review apps ...
  Enabling auto deployment ...
  Enabling auto destroy ...
  Configuring pipeline... done
```
