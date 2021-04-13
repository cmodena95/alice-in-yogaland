Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'blog', to: 'blog#index'
  root to: 'pages#splash'
  get '/home', to: 'pages#home', as: 'home'
  get '/about', to: 'pages#about', as: 'about'

end
