Instalación de gem 'devise'.
- Fichero 'Gemfile', añadir: 
    "gem devise"
- Ejecutar en la terminal:
    "bundle install"
    "rails generate devise:install"
    "rails generate devise:views"
    "rails generate devise User foto:string nombre:string apellidos:string tipo:integer"
- Generará ficheros. En el fichero de migración para la base de datos, se modifica. Cómo está en el proyecto mio.
  (Nota: ordenación de los ficheros para que salga como se quiere)
- Ejecutar en la terminal:
    "rails db:migrate"
    "rails generate devise:controllers users"
  (Nota:Generará carpeta en el directorio 'controllers' en concreto 'users', además, ha generado de antes
   otra carpeta 'user' en el directorio 'views' y 'user' como modelo en el directorio 'models')
--------------------------------------------------------
YA hecho lo ANTERIOR, COPIAR FICHEROS de mi proyecto:
- CARPETAS 'users' de los directorios 'controllers' y de 'views'
- Copiar el contenido de routes.rb.
- Copiar el contenido de devise.yml, ubicada en /config/locales.
- Copiar contenido del fichero 'application.html.erb', ubicada "/views/layouts"
- Copiar el fichero '_header.html.erb', ubicada "/views/layouts"

#######################################################################
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
* 




