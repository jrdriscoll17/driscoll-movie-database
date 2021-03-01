Rails.application.routes.draw do
  scope '/api' do
    resources :users do
      resources :movies, only: %i[index create new destroy]
    end
  end
end
