# Clay bricks
### Help the developers build the new web

Clay bricks is a platform meant to facilitate the discovery of new ceramic models based on a 
combination of keywords and filters

## How was it built
Clay bricks was built with the help of firebase, elasticsearch, npm registry and github.
The first step of processing is represented by the collection of data that will be used to give the developers insight. 
For this was created a firebase scheduled cloud function that basically works as a cron job, interogating the [datamodels registry](https://github.com/ceramicstudio/datamodels/blob/main/INDEX.md) at regular intervals. The function parses the registry file, inserts the relevant data in firestore, then interogates the npm apis for more details like the number of downloads of the last 18 months, the publisher info, useful urls, makes the corellation between the npm account and the github account of the model publisher (this will be used in a future release to give the owner of the model the possibility to edit and control some aspects of the published model) and inserts all this data in firestore.
After this step another function syncs the data inserted in firestore with an [Elastic App Search](https://www.elastic.co/app-search/) instance.
Having all the data collected and indexed, we have it exposed to the end users in a friendly interface, inspired from well known registries like [npm](https://www.npmjs.com/) and docker hub.

## Features

- connect with github (with the help of the corellation between npm and github acounts described above we can determine ownership of a model without saving it in firestore)
- search by keyword
- filter by relevant tags/categories
- sort by the number of downloads/likes showing the most popular packages first
- automatically update Clay bricks (a delay of a few hours from the upload of a new model to the listing in Clay bricks based on the cron function configuration)
- list relevant details about the model
- the possibility to like a model(only when signed in)

## Installation

For installation you must have up a firebase application([tutorials here](https://firebase.google.com/docs/build)), with the [Elastic App Engine](https://www.elastic.co/guide/en/app-search/current/getting-started.html) extension installed. The collection path will be configured to _models_ and the following fields will be set for indexing: _author, githubuser, publisher, version, links, name, tags, texts, likes, downloads, description, date, urlpath, proposals, comments_. The configuration from elastic and our web project will be used inside the vue frontend to replace the ones used for development.

Elastic config json example(found in /clay_front/src/utils/firestore.js):
```json
{
  searchKey: 'search-xx',
  endpointBase: 'https://clay-netw.ent.us-central1.gcp.cloud.es.io',
  engineName: 'models-search'
}
```

Firebase project config example(found in /clay_front/src/main.js) :
```json
{
  apiKey: 'AIzaSyBjD5-MT-lSqtQoOc7snVGHHqkSkHjrtMY',
  authDomain: 'clay-netw.firebaseapp.com',
  projectId: 'clay-netw',
  storageBucket: 'clay-netw.appspot.com',
  messagingSenderId: '844980183975',
  appId: '1:844980183975:web:f5dff8df67e0ef043dcc82',
}
```

After downloading the project and replacing the api keys, go in _clay_front_ and run:

```sh
npm install
```

followed by

```sh
npm run serve
```

Now you should have an instance of the web app running on localhost.
Then go in _functions_ and run:
```sh
npm install
```
After installing the functions, install the firebase [cli tools](https://firebase.google.com/docs/cli), signing to your firebase account and select the firebase project you created. Then run
```sh
firebase deploy
```

## Usage


The application is simple to use, being similar with the well known and popular existing curation systems. More details can be seen in the vide below and on the live demo:

- demo: https://clay-netw.web.app/ 

## Future work

- continue the work on the proposals system
- fix some routing problems


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
