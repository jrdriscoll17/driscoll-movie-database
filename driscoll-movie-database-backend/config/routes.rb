Rails.application.routes.draw do
  resources :movies, except: %i[update, edit]
end
