Rails.application.routes.draw do
  #----------------------------------Home Routes --------------------------------------------#
  root to: 'home#index'
  get 'home/index'

  #----------------------------------Article Routes -----------------------------------------#
  get 'articles', to: 'articles#index'
  get 'articles/new', to: 'articles#new'
  get 'articles/:id', to: 'articles#show'
  get 'articles/:id/edit', to: 'articles#edit'
  patch 'articles/:id', to: 'articles#update', as: :article
  post 'articles', to: 'articles#create'
  delete 'articles/:id', to: 'articles#destroy'

  #----------------------------------Comment Routes -----------------------------------------#


  #----------------------------------User Routes -----------------------------------------#



end
