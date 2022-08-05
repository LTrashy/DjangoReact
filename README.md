# CRUD React.js with Django Api

Django Api on Heroku

#### https://django-company.herokuapp.com/api/companies/

#

React app CRUD on Heroku

#### https://react-companies.herokuapp.com/

#

## Deployment

To deploy this project run

```bash
  git clone https://github.com/LTrashy/DjangoReact.git
  cd DjangoReact
```

First, backend api

- In this part we create the virtual environment to run the project locally

```bash
  cd Django_companies
  pip install virtualenv
  virtualenv -p python3 venv
  source ./venv/bin/activate
```

#### on your terminal prompt u can see the virtualenv activated

- install and run local server

```bash
  pip install -r requirements_docker.txt
  python manage.py runserver
```

- http://localhost:8000/api/companies/ to access

- if you want to see the admin dashboard, change the next line in settings.py to True

```bash
  DEBUG = False
```

React project

- go to project main dir and install package from React app

```bash
  cd ..
  cd React_companies
  npm install
  npm start
```

- http://localhost:3000 to access

Go React_companies/src/components/Company/companyServer.js
to change the local and the production api django URL

## Screenshots

![preview](https://imgur.com/VyBYSBp)
