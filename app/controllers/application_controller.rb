class ApplicationController < ActionController::Base
=begin
 before_action :configure_permitted_parameters, if: :devise_controller?

 protected
 #Método que guardar (sign_up) y actualiza (account_update) los parámetros específicados
 def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :last_name])
   devise_parameter_sanitizer.permit(:account_update, keys: [:name, :last_name])
 end
 =end
=begin
 helper_method :login
 helper_method :current_user

 def current_user
   User.find_by(id: session[:user_id])
 end

 def login
   !current_user.nil?
 end
=end

end

