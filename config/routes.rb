Rails.application.routes.draw do
  devise_for :students
  get 'home/index'
  root to:'home#index'
  #devise_for :users, :path => '', path_names:
    #{ sign_in: "login", sign_out: "logout"}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers =>
    { registrations: 'users/registrations',
      sessions: 'users/sessions',
      shared: 'users/shared',
      mailer: 'users/mailer',
      confirmations: 'users/confirmations',
      passwords: 'users/passwords'
      }, :path => '',
     path_names: {
       sign_in: 'login', sign_out: 'logout'
     }

end
