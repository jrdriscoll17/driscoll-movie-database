Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :movies, except: %i[update, edit]
  end
end
