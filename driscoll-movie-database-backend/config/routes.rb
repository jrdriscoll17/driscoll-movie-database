Rails.application.routes.draw do
  resources :users
  resources :movies, except: %i[update, edit]
end
