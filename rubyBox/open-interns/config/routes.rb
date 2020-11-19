Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :interns
    end  
  end

  # this is importent for front end
  get '*path', to: 'pages#index', via: :all
end
