Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :movies, except: %i[update, edit]
  end
end
