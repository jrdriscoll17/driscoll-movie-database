Rails.application.routes.draw do
  scope '/api' do
    resources :users do
      resources :movies, only: %i[index create new destroy]
    end
    get  'login'  => 'session#new'
    post 'login'  => 'session#create'
    post 'logout' => 'session#destroy'
  end
end
