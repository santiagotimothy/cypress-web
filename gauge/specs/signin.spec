# SignIn spec

Tags: login, auth

* Go to SignIn screen

## Sign In with empty credentials

* Click SignIn button
* Error should show "Invalid username/password"

## Sign In with invalid credentials

* Test these invalid credentials
    |Username|Password|
    |-----------------|
    |invalid |password|
    |another ||
    ||invalid|

## Sign In with valid credentials

* Test these valid credentials
    |Username|Password|
    |-----------------|
    |admin|p455|